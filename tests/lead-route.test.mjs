import assert from "node:assert/strict";
import test from "node:test";

import { handleLeadRequest, MAX_LEAD_REQUEST_BYTES, POST } from "../src/app/api/leads/route.ts";
import { LeadDeliveryError } from "../src/lib/lead-delivery.ts";

const validSubmission = {
  submissionId: "2ba160d6-84e0-4dd7-bc1e-6fe46b87a271",
  name: "Jordan Lee",
  phone: "202-555-0142",
  email: "jordan@example.com",
  projectLocation: "20001",
  serviceType: "Interior",
  projectDescription: "Paint the living room walls and ceiling.",
  contactPreference: "Text",
  attribution: { source: "PaintSwitch website", campaign: "" },
};

function request(body, headers = {}) {
  return new Request("https://paintswitch.com/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://paintswitch.com", ...headers },
    body,
  });
}

async function assertGenericError(response, status, code) {
  assert.equal(response.status, status);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.deepEqual(await response.json(), { success: false, code });
}

test("rejects cross-origin submissions", async () => {
  const response = await POST(request(JSON.stringify(validSubmission), { origin: "https://example.com" }));
  assert.equal(response.status, 403);
  assert.deepEqual(await response.json(), { success: false, code: "REQUEST_REJECTED" });
});

test("requires a canonical or explicitly allowed request origin", async () => {
  const withoutOrigin = request(JSON.stringify(validSubmission));
  withoutOrigin.headers.delete("origin");
  assert.equal((await POST(withoutOrigin)).status, 403);

  const malformedOrigin = request(JSON.stringify(validSubmission), { origin: "not a URL" });
  assert.equal((await POST(malformedOrigin)).status, 403);

  const localAlias = new Request("http://localhost:3000/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "http://127.0.0.1:3000" },
    body: JSON.stringify(validSubmission),
  });
  assert.equal((await POST(localAlias)).status, 503);
});

test("accepts the exact verified production Vercel origin", async () => {
  const vercelRequest = new Request("https://paintswitch-web.vercel.app/api/leads", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://paintswitch-web.vercel.app",
    },
    body: JSON.stringify(validSubmission),
  });

  assert.equal((await POST(vercelRequest)).status, 503);

  const mismatchedCanonicalOrigin = new Request("https://paintswitch-web.vercel.app/api/leads", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://paintswitch.com",
    },
    body: JSON.stringify(validSubmission),
  });

  assert.equal((await POST(mismatchedCanonicalOrigin)).status, 403);
});

test("requires JSON", async () => {
  const response = await POST(request("name=Jordan", { "content-type": "application/x-www-form-urlencoded" }));
  assert.equal(response.status, 415);

  const lookalike = await POST(request(JSON.stringify(validSubmission), { "content-type": "application/jsonx" }));
  assert.equal(lookalike.status, 415);

  const parameterized = await POST(request(JSON.stringify(validSubmission), {
    "content-type": "application/json; charset=utf-8",
  }));
  assert.equal(parameterized.status, 503);
});

test("enforces declared and measured request-size limits", async () => {
  const declared = await POST(request("{}", { "content-length": String(MAX_LEAD_REQUEST_BYTES + 1) }));
  assert.equal(declared.status, 413);

  const malformedLength = await POST(request("{}", { "content-length": "not-a-number" }));
  assert.equal(malformedLength.status, 400);

  const negativeLength = await POST(request("{}", { "content-length": "-1" }));
  assert.equal(negativeLength.status, 400);

  const measured = await POST(request(JSON.stringify({ payload: "x".repeat(MAX_LEAD_REQUEST_BYTES) })));
  assert.equal(measured.status, 413);

  let chunksRead = 0;
  const stream = new ReadableStream({
    pull(controller) {
      chunksRead += 1;
      controller.enqueue(new Uint8Array(8_192));
      if (chunksRead === 10) controller.close();
    },
  });
  const streamed = await POST(new Request("https://paintswitch.com/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://paintswitch.com" },
    body: stream,
    duplex: "half",
  }));
  assert.equal(streamed.status, 413);
  assert.ok(chunksRead < 10, "the route stops reading once the byte limit is crossed");
});

test("accepts the exact UTF-8 body limit and rejects one byte beyond it", async () => {
  const serialized = JSON.stringify(validSubmission);
  const serializedBytes = new TextEncoder().encode(serialized).byteLength;
  const exactBody = serialized + " ".repeat(MAX_LEAD_REQUEST_BYTES - serializedBytes);
  assert.equal(new TextEncoder().encode(exactBody).byteLength, MAX_LEAD_REQUEST_BYTES);
  assert.equal((await POST(request(exactBody))).status, 503);

  const oneByteOver = `${exactBody} `;
  await assertGenericError(await POST(request(oneByteOver)), 413, "REQUEST_TOO_LARGE");

  const forgedSmallLength = request(oneByteOver, { "content-length": "1" });
  await assertGenericError(await POST(forgedSmallLength), 413, "REQUEST_TOO_LARGE");
});

test("measures multibyte bodies in UTF-8 bytes rather than string length", async () => {
  const multibyteBody = JSON.stringify({ payload: "🎨".repeat(4_100) });
  assert.ok(multibyteBody.length < MAX_LEAD_REQUEST_BYTES);
  assert.ok(new TextEncoder().encode(multibyteBody).byteLength > MAX_LEAD_REQUEST_BYTES);

  await assertGenericError(await POST(request(multibyteBody)), 413, "REQUEST_TOO_LARGE");
});

test("rejects invalid UTF-8 and broken request streams without leaking errors", async () => {
  const invalidUtf8 = new ReadableStream({
    start(controller) {
      controller.enqueue(Uint8Array.of(0xc3, 0x28));
      controller.close();
    },
  });
  const invalidUtf8Request = new Request("https://paintswitch.com/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://paintswitch.com" },
    body: invalidUtf8,
    duplex: "half",
  });
  await assertGenericError(await POST(invalidUtf8Request), 400, "INVALID_REQUEST");

  const brokenStream = new ReadableStream({
    start(controller) {
      controller.error(new Error("private upstream detail"));
    },
  });
  const brokenRequest = new Request("https://paintswitch.com/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://paintswitch.com" },
    body: brokenStream,
    duplex: "half",
  });
  await assertGenericError(await POST(brokenRequest), 400, "INVALID_REQUEST");
});

test("cancels stalled request bodies after the bounded read timeout", { timeout: 8_000 }, async () => {
  let cancelled = false;
  const stalledStream = new ReadableStream({
    pull() {
      return new Promise(() => {});
    },
    cancel() {
      cancelled = true;
    },
  });
  const stalledRequest = new Request("https://paintswitch.com/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://paintswitch.com" },
    body: stalledStream,
    duplex: "half",
  });

  await assertGenericError(await POST(stalledRequest), 400, "INVALID_REQUEST");
  assert.equal(cancelled, true);
});

test("rejects empty and primitive JSON bodies generically", async () => {
  for (const body of ["", "null", "[]", "42", "true", '"text"']) {
    await assertGenericError(await POST(request(body)), 400, "INVALID_REQUEST");
  }
});

test("returns generic validation errors", async () => {
  const malformed = await POST(request("{"));
  assert.equal(malformed.status, 400);
  assert.deepEqual(await malformed.json(), { success: false, code: "INVALID_REQUEST" });

  const invalid = await POST(request(JSON.stringify({ ...validSubmission, serviceType: "Drywall" })));
  assert.equal(invalid.status, 400);
  assert.deepEqual(await invalid.json(), { success: false, code: "INVALID_REQUEST" });
});

test("keeps a valid lead fail-closed until exact-once delivery is configured", async () => {
  const response = await POST(request(JSON.stringify(validSubmission), { origin: "https://paintswitch.com" }));
  assert.equal(response.status, 503);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(response.headers.get("retry-after"), "60");
  assert.deepEqual(await response.json(), { success: false, code: "LEAD_DELIVERY_UNAVAILABLE" });
});

test("returns only generic delivery results and errors without leaking secrets or lead PII", async () => {
  const privateDetails = [
    validSubmission.name,
    validSubmission.email,
    validSubmission.phone,
    "pit-super-secret-private-token",
    "opportunity-private-identifier",
  ];

  const success = await handleLeadRequest(
    request(JSON.stringify(validSubmission)),
    async () => ({
      opportunityId: privateDetails[4],
      diagnostic: privateDetails.join(" "),
    }),
  );
  assert.equal(success.status, 200);
  assert.deepEqual(await success.json(), { success: true });

  const failures = [
    {
      code: "conflict",
      expectedBody: { success: false, code: "SUBMISSION_CONFLICT" },
      expectedRetryAfter: null,
      expectedStatus: 409,
    },
    {
      code: "busy",
      expectedBody: { success: false, code: "LEAD_DELIVERY_UNAVAILABLE" },
      expectedRetryAfter: "2",
      expectedStatus: 503,
    },
    {
      code: "unexpected",
      expectedBody: { success: false, code: "LEAD_DELIVERY_UNAVAILABLE" },
      expectedRetryAfter: "60",
      expectedStatus: 503,
    },
  ];

  for (const failure of failures) {
    const response = await handleLeadRequest(
      request(JSON.stringify(validSubmission)),
      async () => {
        if (failure.code === "unexpected") throw new Error(privateDetails.join(" "));
        const error = new LeadDeliveryError(failure.code);
        error.cause = new Error(privateDetails.join(" "));
        throw error;
      },
    );
    const body = await response.text();
    const exposedResponse = `${body}\n${JSON.stringify(Object.fromEntries(response.headers))}`;

    assert.equal(response.status, failure.expectedStatus);
    assert.equal(response.headers.get("retry-after"), failure.expectedRetryAfter);
    assert.deepEqual(JSON.parse(body), failure.expectedBody);
    for (const privateDetail of privateDetails) {
      assert.equal(exposedResponse.includes(privateDetail), false);
    }
  }
});
