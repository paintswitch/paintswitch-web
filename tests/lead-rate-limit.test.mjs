import assert from "node:assert/strict";
import test from "node:test";

import {
  enforceLeadRateLimit,
  LeadRateLimitUnavailableError,
} from "../src/lib/lead-rate-limit.ts";
import {
  LEAD_RATE_LIMIT_MAX_SUBMISSIONS,
  LEAD_RATE_LIMIT_WINDOW_SECONDS,
} from "../src/lib/upstash-idempotency.ts";

const validEnvironment = {
  VERCEL_ENV: "production",
  UPSTASH_REDIS_REST_KV_REST_API_URL: "https://paintswitch-test.upstash.io",
  UPSTASH_REDIS_REST_KV_REST_API_TOKEN: "upstash-test-token-with-safe-length",
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function deployedRequest(ip, extraHeaders = {}) {
  return new Request("https://paintswitch.com/api/leads", {
    headers: { "x-vercel-forwarded-for": ip, ...extraHeaders },
  });
}

function createHarness(options = {}) {
  const counters = new Map();
  const requests = [];
  let now = 0;

  async function fetch(url, init) {
    requests.push({ url: String(url), init });
    if (options.unavailable) return jsonResponse({ error: "simulated outage" }, 503);
    if (options.result !== undefined) return jsonResponse({ result: options.result });

    const command = JSON.parse(init.body);
    assert.equal(command[0], "EVAL");
    assert.equal(command[2], 1);
    assert.match(command[1], /PEXPIRE/u);
    const [, , , key, limit, windowMilliseconds] = command;
    assert.equal(limit, LEAD_RATE_LIMIT_MAX_SUBMISSIONS);
    assert.equal(windowMilliseconds, LEAD_RATE_LIMIT_WINDOW_SECONDS * 1_000);

    let entry = counters.get(key);
    if (entry && entry.expiresAt <= now) {
      counters.delete(key);
      entry = undefined;
    }
    const current = entry?.count ?? 0;
    if (current >= limit) {
      return jsonResponse({ result: [0, current, entry.expiresAt - now] });
    }

    entry = {
      count: current + 1,
      expiresAt: entry?.expiresAt ?? now + windowMilliseconds,
    };
    counters.set(key, entry);
    return jsonResponse({ result: [1, entry.count, entry.expiresAt - now] });
  }

  return {
    advance(milliseconds) {
      now += milliseconds;
    },
    counters,
    dependencies: { fetch },
    requests,
  };
}

test("allows five valid submissions per IP, blocks the sixth, and resets after ten minutes", async () => {
  const harness = createHarness();
  const options = { environment: validEnvironment, dependencies: harness.dependencies };
  const request = deployedRequest("203.0.113.42");

  for (let index = 0; index < LEAD_RATE_LIMIT_MAX_SUBMISSIONS; index += 1) {
    assert.deepEqual(await enforceLeadRateLimit(request, options), {
      allowed: true,
      retryAfterSeconds: 0,
    });
  }

  assert.deepEqual(await enforceLeadRateLimit(request, options), {
    allowed: false,
    retryAfterSeconds: LEAD_RATE_LIMIT_WINDOW_SECONDS,
  });
  assert.equal([...harness.counters.values()][0].count, LEAD_RATE_LIMIT_MAX_SUBMISSIONS);

  harness.advance((LEAD_RATE_LIMIT_WINDOW_SECONDS - 60) * 1_000);
  assert.deepEqual(await enforceLeadRateLimit(request, options), {
    allowed: false,
    retryAfterSeconds: 60,
  });
  assert.equal([...harness.counters.values()][0].count, LEAD_RATE_LIMIT_MAX_SUBMISSIONS);

  harness.advance(60 * 1_000);
  assert.deepEqual(await enforceLeadRateLimit(request, options), {
    allowed: true,
    retryAfterSeconds: 0,
  });
  assert.equal([...harness.counters.values()][0].count, 1);

  const serializedRequests = harness.requests.map((item) => item.init.body).join("\n");
  assert.doesNotMatch(serializedRequests, /203\.0\.113\.42|upstash-test-token|Jordan|jordan@example/u);
  for (const item of harness.requests) {
    assert.equal(new Headers(item.init.headers).get("authorization"), `Bearer ${validEnvironment.UPSTASH_REDIS_REST_KV_REST_API_TOKEN}`);
  }
});

test("keeps IP and deployment-environment buckets independent", async () => {
  const harness = createHarness();
  const production = { environment: validEnvironment, dependencies: harness.dependencies };
  const preview = {
    environment: { ...validEnvironment, VERCEL_ENV: "preview" },
    dependencies: harness.dependencies,
  };

  await enforceLeadRateLimit(deployedRequest("203.0.113.10"), production);
  await enforceLeadRateLimit(deployedRequest("203.0.113.11"), production);
  await enforceLeadRateLimit(deployedRequest("203.0.113.10"), preview);

  const keys = [...harness.counters.keys()];
  assert.equal(keys.length, 3);
  assert.ok(keys.some((key) => key.startsWith("ps:lead-rate:v1:production:")));
  assert.ok(keys.some((key) => key.startsWith("ps:lead-rate:v1:preview:")));
});

test("canonicalizes equivalent IPv6 addresses into one bucket", async () => {
  const harness = createHarness();
  const options = { environment: validEnvironment, dependencies: harness.dependencies };

  await enforceLeadRateLimit(deployedRequest("2001:0db8:0:0:0:0:0:1"), options);
  await enforceLeadRateLimit(deployedRequest("2001:db8::1"), options);

  assert.equal(harness.counters.size, 1);
  assert.equal([...harness.counters.values()][0].count, 2);
});

test("trusts only a single Vercel-provided client IP in deployed environments", async () => {
  const harness = createHarness();
  const options = { environment: validEnvironment, dependencies: harness.dependencies };

  await assert.rejects(
    enforceLeadRateLimit(new Request("https://paintswitch.com/api/leads", {
      headers: { "x-forwarded-for": "203.0.113.42" },
    }), options),
    LeadRateLimitUnavailableError,
  );
  await assert.rejects(
    enforceLeadRateLimit(deployedRequest("203.0.113.42, 198.51.100.7"), options),
    LeadRateLimitUnavailableError,
  );
  assert.equal(harness.requests.length, 0);
});

test("rejects a forged Vercel client-IP header outside Vercel", async () => {
  const harness = createHarness();
  const environment = { ...validEnvironment, VERCEL_ENV: "development" };
  const request = deployedRequest("203.0.113.42");

  await assert.rejects(
    enforceLeadRateLimit(request, { environment, dependencies: harness.dependencies }),
    LeadRateLimitUnavailableError,
  );
  assert.equal(harness.requests.length, 0);
});

test("uses a non-identifying shared bucket for local development", async () => {
  const harness = createHarness();
  const environment = { ...validEnvironment, VERCEL_ENV: "development" };
  const request = new Request("http://localhost:3000/api/leads");

  assert.deepEqual(await enforceLeadRateLimit(request, {
    environment,
    dependencies: harness.dependencies,
  }), { allowed: true, retryAfterSeconds: 0 });
  assert.match([...harness.counters.keys()][0], /^ps:lead-rate:v1:local:[0-9a-f]{64}$/u);
});

test("fails closed on unavailable or malformed limiter state", async () => {
  const cases = [
    createHarness({ unavailable: true }),
    createHarness({ result: [1, 1, -1] }),
    createHarness({ result: [1, 99, LEAD_RATE_LIMIT_WINDOW_SECONDS * 1_000] }),
  ];

  for (const harness of cases) {
    await assert.rejects(
      enforceLeadRateLimit(deployedRequest("203.0.113.42"), {
        environment: validEnvironment,
        dependencies: harness.dependencies,
      }),
      LeadRateLimitUnavailableError,
    );
  }
});
