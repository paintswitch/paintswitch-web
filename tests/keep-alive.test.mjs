import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { handleKeepAliveRequest } from "../src/app/api/keep-alive/route.ts";
import { KEEP_ALIVE_KEY, KEEP_ALIVE_TTL_SECONDS } from "../src/lib/upstash-idempotency.ts";

const environment = {
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

function request(headers = {}) {
  return new Request("https://paintswitch.com/api/keep-alive", { headers });
}

test("keep-alive writes one timestamp with an expiry and no lead data", async () => {
  const calls = [];
  const dependencies = {
    fetch: async (url, init) => {
      calls.push({ url, body: JSON.parse(init.body) });
      return jsonResponse({ result: "OK" });
    },
  };

  const response = await handleKeepAliveRequest(request(), { environment, dependencies });

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://paintswitch-test.upstash.io");
  const [commandName, key, value, expiryFlag, ttl] = calls[0].body;
  assert.equal(commandName, "SET");
  assert.equal(key, KEEP_ALIVE_KEY);
  assert.ok(!Number.isNaN(Date.parse(value)));
  assert.equal(expiryFlag, "EX");
  assert.equal(ttl, KEEP_ALIVE_TTL_SECONDS);
});

test("keep-alive reports failure when the database is unavailable or unconfigured", async () => {
  const failing = { fetch: async () => jsonResponse({ error: "ERR" }, 500) };
  const unavailable = await handleKeepAliveRequest(request(), { environment, dependencies: failing });
  assert.equal(unavailable.status, 503);

  let called = false;
  const unconfigured = await handleKeepAliveRequest(request(), {
    environment: { VERCEL_ENV: "production" },
    dependencies: { fetch: async () => { called = true; return jsonResponse({ result: "OK" }); } },
  });
  assert.equal(unconfigured.status, 503);
  assert.equal(called, false);
});

test("keep-alive enforces CRON_SECRET when one is configured", async () => {
  let calls = 0;
  const dependencies = { fetch: async () => { calls += 1; return jsonResponse({ result: "OK" }); } };
  const secured = { ...environment, CRON_SECRET: "cron-secret-for-tests" };

  const missing = await handleKeepAliveRequest(request(), { environment: secured, dependencies });
  const wrong = await handleKeepAliveRequest(request({ authorization: "Bearer nope" }), {
    environment: secured,
    dependencies,
  });
  assert.equal(missing.status, 401);
  assert.equal(wrong.status, 401);
  assert.equal(calls, 0);

  const right = await handleKeepAliveRequest(request({ authorization: "Bearer cron-secret-for-tests" }), {
    environment: secured,
    dependencies,
  });
  assert.equal(right.status, 200);
  assert.equal(calls, 1);
});

test("Vercel Cron calls keep-alive once a day", () => {
  const config = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
  assert.deepEqual(config.crons, [{ path: "/api/keep-alive", schedule: "17 9 * * *" }]);
});
