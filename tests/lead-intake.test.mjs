import assert from "node:assert/strict";
import test from "node:test";

import { parseLeadSubmission } from "../src/lib/lead-intake.ts";

const validSubmission = () => ({
  submissionId: "2ba160d6-84e0-4dd7-bc1e-6fe46b87a271",
  name: "  Jordan   Lee  ",
  phone: "(202) 555-0142",
  email: " Jordan@example.COM ",
  projectLocation: " 20001 ",
  serviceType: "Interior",
  projectDescription: "Paint the living room walls and ceiling.",
  contactPreference: "Text",
  attribution: {
    source: "PaintSwitch website",
    campaign: "summer-launch",
  },
});

test("accepts and normalizes a complete approved lead", () => {
  const result = parseLeadSubmission(validSubmission());
  assert.equal(result.ok, true);
  if (!result.ok) return;

  assert.equal(result.value.name, "Jordan Lee");
  assert.equal(result.value.phone, "+12025550142");
  assert.equal(result.value.email, "jordan@example.com");
  assert.equal(result.value.projectLocation, "20001");
});

test("accepts every approved service and contact preference", () => {
  for (const serviceType of ["Interior", "Exterior", "Cabinet", "Commercial"]) {
    for (const contactPreference of ["Call", "Text", "Email"]) {
      const result = parseLeadSubmission({ ...validSubmission(), serviceType, contactPreference });
      assert.equal(result.ok, true, `${serviceType}/${contactPreference}`);
    }
  }
});

test("rejects missing, unknown, or malformed fields", () => {
  const cases = [
    null,
    [],
    { ...validSubmission(), email: "not-an-email" },
    { ...validSubmission(), phone: "123" },
    { ...validSubmission(), submissionId: "not-a-uuid" },
    { ...validSubmission(), serviceType: "Drywall" },
    { ...validSubmission(), contactPreference: "Carrier pigeon" },
    { ...validSubmission(), projectDescription: "" },
    { ...validSubmission(), extra: "unexpected" },
    { ...validSubmission(), attribution: { source: "website", campaign: "", extra: true } },
  ];

  for (const input of cases) assert.equal(parseLeadSubmission(input).ok, false);
});

test("requires every approved field and both attribution values", () => {
  const requiredFields = [
    "submissionId",
    "name",
    "phone",
    "email",
    "projectLocation",
    "serviceType",
    "projectDescription",
    "contactPreference",
    "attribution",
  ];

  for (const field of requiredFields) {
    const input = validSubmission();
    delete input[field];
    assert.equal(parseLeadSubmission(input).ok, false, `missing ${field}`);
  }

  for (const field of ["source", "campaign"]) {
    const input = validSubmission();
    delete input.attribution[field];
    assert.equal(parseLeadSubmission(input).ok, false, `missing attribution.${field}`);
  }

  for (const attribution of [null, [], "website", 42]) {
    assert.equal(parseLeadSubmission({ ...validSubmission(), attribution }).ok, false);
  }
});

test("rejects primitive request bodies", () => {
  for (const input of [undefined, true, false, 0, 42, "{}"] ) {
    assert.equal(parseLeadSubmission(input).ok, false, String(input));
  }
});

test("rejects malformed and unsafe email addresses from direct API callers", () => {
  const invalidEmails = [
    "<script>@a.com",
    ".a@example.com",
    "a.@example.com",
    "a..b@example.com",
    "a@example..com",
    "a@-example.com",
    "a@example-.com",
    "a@exa_mple.com",
    "a@@example.com",
  ];

  for (const email of invalidEmails) {
    assert.equal(parseLeadSubmission({ ...validSubmission(), email }).ok, false, email);
  }
});

test("rejects values outside the documented maximum lengths", () => {
  assert.equal(parseLeadSubmission({ ...validSubmission(), name: "n".repeat(101) }).ok, false);
  assert.equal(parseLeadSubmission({ ...validSubmission(), phone: `202${"-".repeat(30)}5550142` }).ok, false);
  assert.equal(parseLeadSubmission({ ...validSubmission(), email: `${"e".repeat(245)}@example.com` }).ok, false);
  assert.equal(parseLeadSubmission({ ...validSubmission(), projectLocation: "x".repeat(201) }).ok, false);
  assert.equal(parseLeadSubmission({ ...validSubmission(), projectDescription: "x".repeat(2001) }).ok, false);
  assert.equal(parseLeadSubmission({
    ...validSubmission(),
    attribution: { source: "x".repeat(101), campaign: "" },
  }).ok, false);
});

test("accepts exact field-length boundaries and rejects one character beyond them", () => {
  const exactEmail = `${"a".repeat(64)}@${"b".repeat(63)}.${"c".repeat(63)}.${"d".repeat(61)}`;
  assert.equal(exactEmail.length, 254);

  const exact = parseLeadSubmission({
    ...validSubmission(),
    name: "n".repeat(100),
    phone: `${"-".repeat(20)}2025550142`,
    email: exactEmail,
    projectLocation: "l".repeat(200),
    projectDescription: "d".repeat(2000),
    attribution: {
      source: "s".repeat(100),
      campaign: "c".repeat(100),
    },
  });
  assert.equal(exact.ok, true);

  const overEmail = `${"a".repeat(64)}@${"b".repeat(63)}.${"c".repeat(63)}.${"d".repeat(62)}`;
  assert.equal(overEmail.length, 255);

  const overLimitCases = [
    { name: "n".repeat(101) },
    { phone: `${"-".repeat(21)}2025550142` },
    { email: overEmail },
    { projectLocation: "l".repeat(201) },
    { projectDescription: "d".repeat(2001) },
    { attribution: { source: "s".repeat(101), campaign: "" } },
    { attribution: { source: "website", campaign: "c".repeat(101) } },
  ];

  for (const override of overLimitCases) {
    assert.equal(parseLeadSubmission({ ...validSubmission(), ...override }).ok, false);
  }
});

test("enforces UUID v4 version and variant bits", () => {
  const validIds = [
    "2BA160D6-84E0-4DD7-8C1E-6FE46B87A271",
    "2ba160d6-84e0-4dd7-9c1e-6fe46b87a271",
    "2ba160d6-84e0-4dd7-ac1e-6fe46b87a271",
    "2ba160d6-84e0-4dd7-bc1e-6fe46b87a271",
  ];

  for (const submissionId of validIds) {
    const result = parseLeadSubmission({ ...validSubmission(), submissionId });
    assert.equal(result.ok, true, submissionId);
    if (result.ok) assert.equal(result.value.submissionId, submissionId.toLowerCase());
  }

  for (const submissionId of [
    "2ba160d6-84e0-1dd7-bc1e-6fe46b87a271",
    "2ba160d6-84e0-4dd7-7c1e-6fe46b87a271",
    "00000000-0000-0000-0000-000000000000",
    " 2ba160d6-84e0-4dd7-bc1e-6fe46b87a271 ",
  ]) {
    assert.equal(parseLeadSubmission({ ...validSubmission(), submissionId }).ok, false, submissionId);
  }
});

test("rejects attacker-controlled keys and prototype-pollution fields", () => {
  for (const field of ["pipelineId", "ownerId", "customFields", "constructor", "prototype"]) {
    assert.equal(parseLeadSubmission({ ...validSubmission(), [field]: "attacker" }).ok, false, field);
  }

  const protoInput = validSubmission();
  Object.defineProperty(protoInput, "__proto__", {
    value: { polluted: true },
    enumerable: true,
  });
  assert.equal(parseLeadSubmission(protoInput).ok, false, "__proto__");

  const stringPayload = parseLeadSubmission({
    ...validSubmission(),
    projectDescription: '\"},\"pipelineId\":\"attacker',
  });
  assert.equal(stringPayload.ok, true);
  if (stringPayload.ok) {
    assert.equal(stringPayload.value.projectDescription, '\"},\"pipelineId\":\"attacker');
    assert.equal(Object.hasOwn(stringPayload.value, "pipelineId"), false);
  }
});

test("accepts one-character required text values without inventing minimums", () => {
  const result = parseLeadSubmission({
    ...validSubmission(),
    name: "Q",
    projectLocation: "1",
    projectDescription: "?",
  });
  assert.equal(result.ok, true);
});

test("rejects control characters while preserving multiline project details", () => {
  const singleLineFields = [
    "submissionId",
    "name",
    "phone",
    "email",
    "projectLocation",
  ];
  for (const field of singleLineFields) {
    assert.equal(
      parseLeadSubmission({ ...validSubmission(), [field]: `${validSubmission()[field]}\u0000` }).ok,
      false,
      field,
    );
  }

  for (const field of ["source", "campaign"]) {
    const attribution = { ...validSubmission().attribution, [field]: `value\r\ninjected` };
    assert.equal(parseLeadSubmission({ ...validSubmission(), attribution }).ok, false, field);
  }

  for (const projectDescription of ["Living room\u0000walls", "Living room\u001bwalls"]) {
    assert.equal(parseLeadSubmission({ ...validSubmission(), projectDescription }).ok, false);
  }

  const result = parseLeadSubmission({
    ...validSubmission(),
    projectDescription: "Living room\r\nCeiling and walls",
  });
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.value.projectDescription, "Living room\nCeiling and walls");
});
