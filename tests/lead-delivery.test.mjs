import assert from "node:assert/strict";
import test from "node:test";

import { deliverLead, LeadDeliveryError } from "../src/lib/lead-delivery.ts";

const validLead = {
  submissionId: "2ba160d6-84e0-4dd7-bc1e-6fe46b87a271",
  name: "Jordan Lee",
  phone: "+12025550142",
  email: "jordan@example.com",
  projectLocation: "20001",
  serviceType: "Interior",
  projectDescription: "Paint the living room walls and ceiling.",
  contactPreference: "Text",
  attribution: { source: "PaintSwitch website", campaign: "dmv-beta" },
};

const fieldIds = {
  contactPreference: "field-contact-preference",
  serviceType: "field-service-type",
  projectDescription: "field-project-description",
  projectLocation: "field-project-location",
  submissionId: "field-submission-id",
  campaignSource: "field-campaign-source",
  campaignName: "field-campaign-name",
};

const validEnvironment = {
  LEAD_DELIVERY_ENABLED: "true",
  GHL_PRIVATE_INTEGRATION_TOKEN: "pit-test-token-with-safe-length",
  GHL_LOCATION_ID: "location-0001",
  GHL_PIPELINE_ID: "pipeline-0001",
  GHL_PIPELINE_STAGE_ID: "stage-000001",
  GHL_CUSTOM_FIELD_IDS: JSON.stringify(fieldIds),
  UPSTASH_REDIS_REST_KV_REST_API_URL: "https://paintswitch-test.upstash.io",
  UPSTASH_REDIS_REST_KV_REST_API_TOKEN: "upstash-test-token-with-safe-length",
};

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, reject, resolve };
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function requestBody(init) {
  assert.equal(typeof init?.body, "string");
  return JSON.parse(init.body);
}

function createHarness(options = {}) {
  const redisStates = new Map();
  const redisLocks = new Map();
  const contactsByEmail = new Map();
  const opportunities = [];
  const redisRequests = [];
  const ghlRequests = [];
  let contactSequence = 0;
  let opportunitySequence = 0;
  let lockSequence = 0;
  let searchSequence = 0;
  let createSequence = 0;
  let stateGetSequence = 0;
  const failedStateWritePhases = new Set();

  async function redisFetch(url, init) {
    redisRequests.push({ url: String(url), init });
    if (options.redisUnavailable) {
      return jsonResponse({ error: "simulated Redis outage" }, 503);
    }

    const command = requestBody(init);
    assert.ok(Array.isArray(command));

    if (command[0] === "GET") {
      stateGetSequence += 1;
      if (options.failStateGetCalls?.has(stateGetSequence)) {
        return jsonResponse({ error: "simulated Redis state-read outage" }, 503);
      }
      return jsonResponse({ result: redisStates.get(command[1]) ?? null });
    }

    if (command[0] === "SET") {
      const [, key, token, nx, ex, seconds] = command;
      assert.equal(nx, "NX");
      assert.equal(ex, "EX");
      assert.equal(seconds, 60);
      if (redisLocks.has(key)) return jsonResponse({ result: null });
      redisLocks.set(key, token);
      return jsonResponse({ result: "OK" });
    }

    if (command[0] === "EVAL") {
      const [, script, keyCount] = command;
      if (keyCount === 1) {
        const [, , , lockKey, token] = command;
        if (redisLocks.get(lockKey) !== token) return jsonResponse({ result: 0 });
        redisLocks.delete(lockKey);
        return jsonResponse({ result: 1 });
      }

      assert.equal(keyCount, 2);
      const [, , , lockKey, stateKey, token, serializedState] = command;
      if (redisLocks.get(lockKey) !== token) return jsonResponse({ result: 0 });
      const nextState = JSON.parse(serializedState);
      if (
        options.failStateWritePhasesOnce?.has(nextState.phase) &&
        !failedStateWritePhases.has(nextState.phase)
      ) {
        failedStateWritePhases.add(nextState.phase);
        return jsonResponse({ error: `simulated Redis ${nextState.phase} write outage` }, 503);
      }
      redisStates.set(stateKey, serializedState);
      if (script.includes("redis.call('DEL', KEYS[1])")) redisLocks.delete(lockKey);
      return jsonResponse({ result: 1 });
    }

    assert.fail(`Unexpected Redis command: ${String(command[0])}`);
  }

  async function ghlFetch(url, init) {
    const parsedUrl = new URL(String(url));
    const body = init?.body ? requestBody(init) : undefined;
    const request = {
      body,
      headers: new Headers(init?.headers),
      method: init?.method,
      pathname: parsedUrl.pathname,
      searchParams: parsedUrl.searchParams,
    };
    ghlRequests.push(request);

    if (parsedUrl.pathname === "/contacts/upsert" && init?.method === "POST") {
      if (options.contactFailureStatus) {
        return jsonResponse({ message: `private provider detail for ${body.email}` }, options.contactFailureStatus);
      }

      let contact = contactsByEmail.get(body.email);
      if (!contact) {
        contactSequence += 1;
        contact = { id: `contact-${String(contactSequence).padStart(6, "0")}`, ...body };
        contactsByEmail.set(body.email, contact);
      }
      return jsonResponse({ contact: { id: contact.id } });
    }

    if (parsedUrl.pathname === "/opportunities/search" && init?.method === "GET") {
      searchSequence += 1;
      if (options.failSearchCalls?.has(searchSequence)) {
        return jsonResponse({ message: "simulated search outage" }, 503);
      }

      const contactId = parsedUrl.searchParams.get("contactId");
      const pipelineId = parsedUrl.searchParams.get("pipelineId");
      return jsonResponse({
        opportunities: opportunities.filter((opportunity) => (
          opportunity.contactId === contactId && opportunity.pipelineId === pipelineId
        )),
      });
    }

    if (parsedUrl.pathname === "/opportunities/" && init?.method === "POST") {
      createSequence += 1;
      await options.beforeOpportunityCreate?.({ body, createSequence });

      if (options.rejectFirstOpportunityCreate && createSequence === 1) {
        return jsonResponse({ message: "simulated configuration rejection" }, 422);
      }

      if (options.timeoutBeforeAcceptanceOnce && createSequence === 1) {
        return jsonResponse({ message: "simulated timeout before acceptance" }, 504);
      }

      opportunitySequence += 1;
      const opportunity = {
        id: `opportunity-${String(opportunitySequence).padStart(6, "0")}`,
        ...body,
      };
      opportunities.push(opportunity);

      if (options.acceptThenTimeoutOnce && createSequence === 1) {
        return jsonResponse({ message: "simulated timeout after acceptance" }, 504);
      }
      return jsonResponse({ opportunity: { id: opportunity.id } });
    }

    assert.fail(`Unexpected GoHighLevel request: ${init?.method} ${parsedUrl.pathname}`);
  }

  const fetch = async (url, init) => {
    const hostname = new URL(String(url)).hostname;
    if (hostname.endsWith(".upstash.io")) return redisFetch(url, init);
    if (hostname === "services.leadconnectorhq.com") return ghlFetch(url, init);
    assert.fail(`Unexpected network host: ${hostname}`);
  };

  return {
    contactsByEmail,
    dependencies: {
      fetch,
      now: () => Date.UTC(2026, 7, 3, 12, 0, 0),
      randomUUID: () => `lock-token-${++lockSequence}`,
      sleep: async () => {},
    },
    ghlRequests,
    opportunities,
    redisLocks,
    redisRequests,
    redisStates,
  };
}

function assertDeliveryError(code) {
  return (error) => {
    assert.ok(error instanceof LeadDeliveryError);
    assert.equal(error.code, code);
    assert.equal(error.message, "Lead delivery failed");
    return true;
  };
}

test("delivers a first lead with the exact approved GoHighLevel field mapping", async () => {
  const harness = createHarness();

  const result = await deliverLead(validLead, {
    environment: validEnvironment,
    dependencies: harness.dependencies,
  });

  assert.deepEqual(result, { opportunityId: "opportunity-000001", replayed: false });
  assert.equal(harness.contactsByEmail.size, 1);
  assert.equal(harness.opportunities.length, 1);

  const contactRequest = harness.ghlRequests.find((request) => request.pathname === "/contacts/upsert");
  assert.ok(contactRequest);
  assert.deepEqual(contactRequest.body, {
    locationId: validEnvironment.GHL_LOCATION_ID,
    name: validLead.name,
    email: validLead.email,
    phone: validLead.phone,
    createNewIfDuplicateAllowed: false,
    customFields: [
      { id: fieldIds.contactPreference, fieldValue: validLead.contactPreference },
    ],
  });

  const opportunityRequest = harness.ghlRequests.find((request) => request.pathname === "/opportunities/");
  assert.ok(opportunityRequest);
  assert.deepEqual(opportunityRequest.body, {
    pipelineId: validEnvironment.GHL_PIPELINE_ID,
    locationId: validEnvironment.GHL_LOCATION_ID,
    name: "Jordan Lee \u2014 Interior quote",
    pipelineStageId: validEnvironment.GHL_PIPELINE_STAGE_ID,
    status: "open",
    contactId: "contact-000001",
    customFields: [
      { id: fieldIds.serviceType, fieldValue: validLead.serviceType },
      { id: fieldIds.projectDescription, fieldValue: validLead.projectDescription },
      { id: fieldIds.projectLocation, fieldValue: validLead.projectLocation },
      { id: fieldIds.submissionId, fieldValue: validLead.submissionId },
      { id: fieldIds.campaignSource, fieldValue: validLead.attribution.source },
      { id: fieldIds.campaignName, fieldValue: validLead.attribution.campaign },
    ],
  });

  for (const request of harness.ghlRequests) {
    assert.equal(request.headers.get("authorization"), `Bearer ${validEnvironment.GHL_PRIVATE_INTEGRATION_TOKEN}`);
    assert.equal(request.headers.get("version"), "v3");
    assert.equal(request.headers.get("content-type"), "application/json");
  }

  const completedState = [...harness.redisStates.values()].find((value) => value.includes('"phase":"completed"'));
  assert.ok(completedState);
  assert.doesNotMatch(completedState, /Jordan|jordan@example\.com|2025550142/u);
});

test("returns a completed submission as a replay without another GoHighLevel call", async () => {
  const harness = createHarness();
  const options = { environment: validEnvironment, dependencies: harness.dependencies };

  const first = await deliverLead(validLead, options);
  const requestCountAfterFirstDelivery = harness.ghlRequests.length;
  const second = await deliverLead(validLead, options);

  assert.deepEqual(first, { opportunityId: "opportunity-000001", replayed: false });
  assert.deepEqual(second, { opportunityId: "opportunity-000001", replayed: true });
  assert.equal(harness.ghlRequests.length, requestCountAfterFirstDelivery);
  assert.equal(harness.opportunities.length, 1);
  assert.equal(harness.redisLocks.size, 0);
});

test("rejects a changed payload that reuses a completed submission ID", async () => {
  const harness = createHarness();
  const options = { environment: validEnvironment, dependencies: harness.dependencies };
  await deliverLead(validLead, options);
  const requestCountAfterFirstDelivery = harness.ghlRequests.length;

  await assert.rejects(
    deliverLead({ ...validLead, projectDescription: "A different project." }, options),
    assertDeliveryError("conflict"),
  );

  assert.equal(harness.ghlRequests.length, requestCountAfterFirstDelivery);
  assert.equal(harness.opportunities.length, 1);
  assert.equal(harness.redisLocks.size, 0);
});

test("fails a concurrent duplicate as busy while the lock owner completes exactly once", async () => {
  const createReached = deferred();
  const allowCreate = deferred();
  const harness = createHarness({
    beforeOpportunityCreate: async () => {
      createReached.resolve();
      await allowCreate.promise;
    },
  });
  const options = { environment: validEnvironment, dependencies: harness.dependencies };

  const firstDelivery = deliverLead(validLead, options);
  await createReached.promise;

  await assert.rejects(deliverLead(validLead, options), assertDeliveryError("busy"));
  assert.equal(harness.opportunities.length, 0);

  allowCreate.resolve();
  assert.deepEqual(
    await firstDelivery,
    { opportunityId: "opportunity-000001", replayed: false },
  );
  assert.equal(harness.opportunities.length, 1);
  assert.equal(
    harness.ghlRequests.filter((request) => request.pathname === "/opportunities/").length,
    1,
  );
  assert.equal(harness.redisLocks.size, 0);
});

test("fails closed on a Redis outage before sending anything to GoHighLevel", async () => {
  const harness = createHarness({ redisUnavailable: true });

  await assert.rejects(
    deliverLead(validLead, {
      environment: validEnvironment,
      dependencies: harness.dependencies,
    }),
    assertDeliveryError("unavailable"),
  );

  assert.ok(harness.redisRequests.length > 0);
  assert.equal(harness.ghlRequests.length, 0);
  assert.equal(harness.opportunities.length, 0);
});

test("releases an acquired lock when the initial state read fails", async () => {
  const harness = createHarness({ failStateGetCalls: new Set([1]) });

  await assert.rejects(
    deliverLead(validLead, {
      environment: validEnvironment,
      dependencies: harness.dependencies,
    }),
    assertDeliveryError("unavailable"),
  );

  assert.equal(harness.redisLocks.size, 0);
  assert.equal(harness.ghlRequests.length, 0);
  assert.equal(harness.opportunities.length, 0);
});

test("does not create an opportunity when persisting the creating state fails", async () => {
  const harness = createHarness({ failStateWritePhasesOnce: new Set(["creating"]) });

  await assert.rejects(
    deliverLead(validLead, {
      environment: validEnvironment,
      dependencies: harness.dependencies,
    }),
    assertDeliveryError("unavailable"),
  );

  assert.equal(
    harness.ghlRequests.filter((request) => request.pathname === "/opportunities/").length,
    0,
  );
  assert.equal(harness.opportunities.length, 0);
  assert.equal(harness.redisLocks.size, 0);
});

test("reconciles an accepted-but-ambiguous opportunity on retry without creating it twice", async () => {
  const harness = createHarness({
    acceptThenTimeoutOnce: true,
    failSearchCalls: new Set([2]),
  });
  const options = { environment: validEnvironment, dependencies: harness.dependencies };

  await assert.rejects(deliverLead(validLead, options), assertDeliveryError("unavailable"));
  assert.equal(harness.opportunities.length, 1, "the provider accepted the first create request");

  const retry = await deliverLead(validLead, options);
  assert.deepEqual(retry, { opportunityId: "opportunity-000001", replayed: true });
  assert.equal(harness.opportunities.length, 1);
  assert.equal(
    harness.ghlRequests.filter((request) => request.pathname === "/opportunities/").length,
    1,
  );
  assert.equal(harness.redisLocks.size, 0);
});

test("never repeats an ambiguous create when the provider did not accept it", async () => {
  const reports = [];
  const harness = createHarness({ timeoutBeforeAcceptanceOnce: true });
  const options = {
    environment: validEnvironment,
    dependencies: {
      ...harness.dependencies,
      report: (event, submissionId) => reports.push({ event, submissionId }),
    },
  };

  await assert.rejects(deliverLead(validLead, options), assertDeliveryError("unavailable"));
  await assert.rejects(deliverLead(validLead, options), assertDeliveryError("unavailable"));

  assert.equal(harness.opportunities.length, 0);
  assert.equal(
    harness.ghlRequests.filter((request) => request.pathname === "/opportunities/").length,
    1,
  );
  assert.deepEqual(reports, [
    { event: "provider-ambiguous", submissionId: validLead.submissionId },
    { event: "provider-ambiguous", submissionId: validLead.submissionId },
  ]);
  assert.equal(harness.redisLocks.size, 0);
});

test("reconciles after a completed-state write fails without creating twice", async () => {
  const harness = createHarness({
    failSearchCalls: new Set([2]),
    failStateWritePhasesOnce: new Set(["completed"]),
  });
  const options = { environment: validEnvironment, dependencies: harness.dependencies };

  await assert.rejects(deliverLead(validLead, options), assertDeliveryError("unavailable"));
  assert.equal(harness.opportunities.length, 1);

  const retry = await deliverLead(validLead, options);
  assert.deepEqual(retry, { opportunityId: "opportunity-000001", replayed: true });
  assert.equal(harness.opportunities.length, 1);
  assert.equal(
    harness.ghlRequests.filter((request) => request.pathname === "/opportunities/").length,
    1,
  );
  assert.equal(harness.redisLocks.size, 0);
});

test("retries an explicitly rejected opportunity after configuration is corrected", async () => {
  const harness = createHarness({ rejectFirstOpportunityCreate: true });
  const options = { environment: validEnvironment, dependencies: harness.dependencies };

  await assert.rejects(deliverLead(validLead, options), assertDeliveryError("unavailable"));
  assert.equal(harness.opportunities.length, 0);

  const retry = await deliverLead(validLead, options);
  assert.deepEqual(retry, { opportunityId: "opportunity-000001", replayed: false });
  assert.equal(harness.opportunities.length, 1);
  assert.equal(
    harness.ghlRequests.filter((request) => request.pathname === "/opportunities/").length,
    2,
  );
});

test("creates a second opportunity for the same contact when the submission ID is new", async () => {
  const harness = createHarness();
  const options = { environment: validEnvironment, dependencies: harness.dependencies };
  const secondLead = {
    ...validLead,
    submissionId: "885d761d-f1e6-4e78-8272-25bc51822e92",
    serviceType: "Exterior",
    projectDescription: "Paint the exterior siding and trim.",
  };

  const first = await deliverLead(validLead, options);
  const second = await deliverLead(secondLead, options);

  assert.deepEqual(first, { opportunityId: "opportunity-000001", replayed: false });
  assert.deepEqual(second, { opportunityId: "opportunity-000002", replayed: false });
  assert.equal(harness.contactsByEmail.size, 1);
  assert.equal(harness.opportunities.length, 2);
  assert.equal(harness.opportunities[0].contactId, harness.opportunities[1].contactId);
  assert.notEqual(
    harness.opportunities[0].customFields.find((field) => field.id === fieldIds.submissionId).fieldValue,
    harness.opportunities[1].customFields.find((field) => field.id === fieldIds.submissionId).fieldValue,
  );
});

test("prefers the Marketplace Upstash variables when both naming schemes exist", async () => {
  const harness = createHarness();
  const environment = {
    ...validEnvironment,
    UPSTASH_REDIS_REST_URL: "https://redis.example.com",
    UPSTASH_REDIS_REST_TOKEN: "too-short",
  };

  const result = await deliverLead(validLead, { environment, dependencies: harness.dependencies });

  assert.deepEqual(result, { opportunityId: "opportunity-000001", replayed: false });
  assert.equal(harness.opportunities.length, 1);
});

test("supports the legacy Upstash variables when Marketplace variables are absent", async () => {
  const {
    UPSTASH_REDIS_REST_KV_REST_API_URL: legacyUrl,
    UPSTASH_REDIS_REST_KV_REST_API_TOKEN: legacyToken,
    ...baseEnvironment
  } = validEnvironment;
  const harness = createHarness();
  const environment = {
    ...baseEnvironment,
    UPSTASH_REDIS_REST_URL: legacyUrl,
    UPSTASH_REDIS_REST_TOKEN: legacyToken,
  };

  const result = await deliverLead(validLead, { environment, dependencies: harness.dependencies });

  assert.deepEqual(result, { opportunityId: "opportunity-000001", replayed: false });
  assert.equal(harness.opportunities.length, 1);
});

test("rejects missing or invalid delivery configuration before any network call", async () => {
  const configurations = [
    ["disabled", { ...validEnvironment, LEAD_DELIVERY_ENABLED: "false" }],
    ["missing GHL token", { ...validEnvironment, GHL_PRIVATE_INTEGRATION_TOKEN: undefined }],
    ["short GHL token", { ...validEnvironment, GHL_PRIVATE_INTEGRATION_TOKEN: "too-short" }],
    ["invalid location ID", { ...validEnvironment, GHL_LOCATION_ID: "bad_id" }],
    ["invalid custom-field JSON", { ...validEnvironment, GHL_CUSTOM_FIELD_IDS: "{" }],
    ["missing custom field", {
      ...validEnvironment,
      GHL_CUSTOM_FIELD_IDS: JSON.stringify({ ...fieldIds, campaignName: undefined }),
    }],
    ["unexpected custom field", {
      ...validEnvironment,
      GHL_CUSTOM_FIELD_IDS: JSON.stringify({ ...fieldIds, extra: "field-extra-value" }),
    }],
    ["insecure Redis URL", {
      ...validEnvironment,
      UPSTASH_REDIS_REST_KV_REST_API_URL: "http://paintswitch-test.upstash.io",
    }],
    ["non-Upstash Redis URL", {
      ...validEnvironment,
      UPSTASH_REDIS_REST_KV_REST_API_URL: "https://redis.example.com",
    }],
    ["Redis URL with credentials", {
      ...validEnvironment,
      UPSTASH_REDIS_REST_KV_REST_API_URL: "https://user:password@paintswitch-test.upstash.io",
    }],
    ["short Redis token", {
      ...validEnvironment,
      UPSTASH_REDIS_REST_KV_REST_API_TOKEN: "too-short",
    }],
    ["missing Marketplace Redis URL", {
      ...validEnvironment,
      UPSTASH_REDIS_REST_KV_REST_API_URL: undefined,
    }],
    ["missing Marketplace Redis token", {
      ...validEnvironment,
      UPSTASH_REDIS_REST_KV_REST_API_TOKEN: undefined,
    }],
    ["invalid Marketplace pair with valid legacy fallback", {
      ...validEnvironment,
      UPSTASH_REDIS_REST_KV_REST_API_URL: "https://redis.example.com",
      UPSTASH_REDIS_REST_URL: "https://paintswitch-legacy.upstash.io",
      UPSTASH_REDIS_REST_TOKEN: "upstash-legacy-token-with-safe-length",
    }],
  ];

  for (const [label, environment] of configurations) {
    const harness = createHarness();
    await assert.rejects(
      deliverLead(validLead, { environment, dependencies: harness.dependencies }),
      assertDeliveryError("unavailable"),
      label,
    );
    assert.equal(harness.redisRequests.length, 0, `${label} must not reach Redis`);
    assert.equal(harness.ghlRequests.length, 0, `${label} must not reach GoHighLevel`);
  }
});

test("collapses provider rejections containing PII into a generic delivery error", async () => {
  const harness = createHarness({ contactFailureStatus: 422 });

  await assert.rejects(
    deliverLead(validLead, {
      environment: validEnvironment,
      dependencies: harness.dependencies,
    }),
    (error) => {
      assertDeliveryError("unavailable")(error);
      assert.doesNotMatch(error.message, /Jordan|jordan@example\.com|pit-test-token/u);
      return true;
    },
  );
});
