import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

function source(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

function withoutSourceComments(value) {
  return value
    .replace(/\/\*[\s\S]*?\*\//gu, "")
    .replace(/^\s*\/\/.*$/gmu, "");
}

const privacyPage = source("src/app/privacy/page.tsx");
const termsPage = source("src/app/terms/page.tsx");
const legalPage = source("src/components/legal-page.tsx");
const footer = source("src/components/footer.tsx");
const quoteForm = source("src/components/quote-request-form.tsx");

const customerFacingSources = {
  "privacy page": privacyPage,
  "terms page": termsPage,
  "shared legal page": legalPage,
  footer,
  "quote form": quoteForm,
};

test("defines distinct, dated PaintSwitch legal routes", () => {
  assert.match(privacyPage, /title: "Privacy Policy \| PaintSwitch"/u);
  assert.match(privacyPage, /title="Privacy Policy"/u);
  assert.match(termsPage, /title: "Website Terms \| PaintSwitch"/u);
  assert.match(termsPage, /title="Website Terms"/u);

  assert.equal((legalPage.match(/<h1\b/gu) ?? []).length, 1);
  assert.match(legalPage, /Effective August 4, 2026/u);
  assert.match(legalPage, /<Footer \/>/u);
  assert.match(legalPage, /href="\/"/u);
});

test("privacy policy matches the approved beta data boundary", () => {
  for (const fieldDescription of [
    "name, phone number, and email address",
    "project ZIP code or address",
    "requested painting service and project description",
    "preferred contact method",
    "website submission identifier and basic source and campaign information",
  ]) {
    assert.ok(privacyPage.includes(fieldDescription), `missing privacy field: ${fieldDescription}`);
  }

  for (const provider of ["Vercel", "GoHighLevel/LeadConnector", "Upstash", "Microsoft 365"]) {
    assert.ok(privacyPage.includes(provider), `missing provider disclosure: ${provider}`);
  }

  assert.match(privacyPage, /does not sell or rent beta lead information/u);
  assert.match(privacyPage, /retained for up to 12 months after the last meaningful interaction/u);
  assert.match(privacyPage, /Upstash technical lead-delivery records expire after 30 days/u);
  assert.match(privacyPage, /rate-limit records expire after the applicable 10-minute window/u);
  assert.match(privacyPage, /Selecting <strong>Text<\/strong> as a preferred contact method does not provide consent to automated SMS messages/u);
  assert.match(privacyPage, /Automated customer SMS is disabled during the beta/u);
  assert.match(privacyPage, /href="mailto:hello@paintswitch\.com"/u);
});

test("website terms preserve manual review and approved operating targets", () => {
  assert.match(termsPage, /accepts Virginia project requests for individual service-area review/u);
  assert.match(termsPage, /Does not confirm that PaintSwitch serves the project location/u);
  assert.match(termsPage, /Does not provide or accept a firm price/u);
  assert.match(termsPage, /Does not schedule or book a project/u);
  assert.match(termsPage, /Does not authorize a deposit or payment/u);
  assert.match(termsPage, /Does not create a painting or service contract/u);
  assert.match(termsPage, /within five minutes for requests received between <strong>8:00 a\.m\. and 8:00 p\.m\. Eastern Time, daily<\/strong>/u);
  assert.match(termsPage, /9:00 a\.m\. Eastern Time the following day/u);
  assert.match(termsPage, /These are operating targets and do not guarantee an exact response time/u);
  assert.match(termsPage, /It is not consent to automated SMS messages/u);
  assert.match(termsPage, /PaintSwitch does not send automated customer SMS during the beta/u);
  assert.match(termsPage, /href="\/privacy"/u);
  assert.match(termsPage, /href="mailto:hello@paintswitch\.com"/u);
});

test("footer exposes real legal and PaintSwitch contact links", () => {
  assert.match(footer, /\["Privacy", "\/privacy"\]/u);
  assert.match(footer, /\["Terms", "\/terms"\]/u);
  assert.match(footer, /\["hello@paintswitch\.com", "mailto:hello@paintswitch\.com"\]/u);
  assert.doesNotMatch(footer, /\["(?:Privacy|Terms)", "#"\]/u);
});

test("quote form shows the approved contact disclosure before submission", () => {
  const disclosure = "By submitting, you confirm that you are at least 18 and ask PaintSwitch to contact you about this project using the contact information you provide.";
  const preferenceBoundary = "records a contact preference only and is not consent to automated SMS.";

  assert.ok(quoteForm.includes(disclosure));
  assert.ok(quoteForm.includes(preferenceBoundary));
  assert.match(quoteForm, /Automated customer SMS is currently disabled/u);
  assert.match(quoteForm, /href="\/privacy">Privacy Policy<\/a>/u);
  assert.match(quoteForm, /href="\/terms">Website Terms<\/a>/u);

  const disclosurePosition = quoteForm.indexOf(disclosure);
  const submitButtonPosition = quoteForm.indexOf('type="submit"');
  assert.ok(disclosurePosition >= 0 && disclosurePosition < submitButtonPosition);
});

test("public legal, footer, and form source has no customer-facing Jen reference", () => {
  for (const [name, value] of Object.entries(customerFacingSources)) {
    assert.doesNotMatch(
      withoutSourceComments(value),
      /\bJen(?:\s+Contracting)?\b/iu,
      `${name} contains a customer-facing Jen reference`,
    );
  }
});
