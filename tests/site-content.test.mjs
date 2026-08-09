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
const homePage = source("src/app/page.tsx");
const rootLayout = source("src/app/layout.tsx");
const hero = source("src/components/hero.tsx");
const trustBar = source("src/components/trust-bar.tsx");
const chatWidget = source("src/components/highlevel-chat-widget.tsx");

const customerFacingSources = {
  homepage: homePage,
  metadata: rootLayout,
  hero,
  "trust bar": trustBar,
  "privacy page": privacyPage,
  "terms page": termsPage,
  "shared legal page": legalPage,
  footer,
  "quote form": quoteForm,
  "chat widget": chatWidget,
};

test("defines distinct, dated PaintSwitch legal routes", () => {
  assert.match(privacyPage, /title: "Privacy Policy \| PaintSwitch"/u);
  assert.match(privacyPage, /title="Privacy Policy"/u);
  assert.match(termsPage, /title: "Website Terms \| PaintSwitch"/u);
  assert.match(termsPage, /title="Website Terms"/u);

  assert.equal((legalPage.match(/<h1\b/gu) ?? []).length, 1);
  assert.match(legalPage, /effectiveDate = "August 4, 2026"/u);
  assert.match(legalPage, /Effective \{effectiveDate\}/u);
  assert.match(privacyPage, /effectiveDate="August 8, 2026"/u);
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
  assert.match(privacyPage, /The website chat identifies itself as Switch bot, PaintSwitch&apos;s AI assistant/u);
  assert.match(privacyPage, /cannot provide or accept a firm price/u);
  assert.match(privacyPage, /does not export chat transcripts through a transcript or summary workflow/u);
  assert.match(privacyPage, /Live-chat messages that are not associated with an active project follow the same period/u);
  assert.match(privacyPage, /Do not send payment-card data/u);
  assert.match(privacyPage, /href="mailto:hello@paintswitch\.com"/u);
});

test("website terms preserve DMV review, Virginia priority, and approved first-contact targets", () => {
  assert.match(termsPage, /accepts project requests throughout the DMV for individual service-area review/u);
  assert.match(termsPage, /Virginia projects are prioritized for the public beta/u);
  assert.match(termsPage, /Does not confirm that PaintSwitch serves the project location/u);
  assert.match(termsPage, /Does not provide or accept a firm price/u);
  assert.match(termsPage, /Does not schedule or book a project/u);
  assert.match(termsPage, /Does not authorize a deposit or payment/u);
  assert.match(termsPage, /Does not create a painting or service contract/u);
  assert.match(termsPage, /first human contact attempt within five minutes for requests received between <strong>8:00 a\.m\. and 8:00 p\.m\. Eastern Time, daily<\/strong>/u);
  assert.match(termsPage, /9:00 a\.m\. Eastern Time the following day/u);
  assert.match(termsPage, /These are first-contact operating targets/u);
  assert.match(termsPage, /It is not consent to automated SMS messages/u);
  assert.match(termsPage, /PaintSwitch does not send automated customer SMS during the beta/u);
  assert.match(termsPage, /href="\/privacy"/u);
  assert.match(termsPage, /href="mailto:hello@paintswitch\.com"/u);
});

test("public market copy preserves DMV intake while prioritizing Virginia", () => {
  for (const [name, value] of Object.entries({homePage, rootLayout, hero, trustBar, termsPage})) {
    assert.match(value, /DMV/u, `${name} must preserve the confirmed DMV market`);
  }

  for (const value of [homePage, rootLayout, hero, termsPage]) {
    assert.match(value, /Virginia/u);
    assert.doesNotMatch(value, /(?:Virginia[- ]only|only Virginia)/iu);
  }
});

test("privacy use copy stays inside the approved beta purpose boundary", () => {
  const approvedPurposes = [
    "Review and respond to your quote request",
    "Evaluate project and service-area availability",
    "Qualify and manage the lead",
    "Contact you about the project",
    "Notify the responsible PaintSwitch team member",
    "Record basic lead-source and campaign attribution",
    "Prevent duplicate submissions, fraud, and abuse",
    "Maintain and secure the lead-delivery process",
    "Operate the optional AI-assisted live chat and review its performance",
  ];
  const useSection = privacyPage.match(/<h2>How we use information<\/h2>([\s\S]*?)<\/section>/u)?.[1];

  assert.ok(useSection, "privacy use section is missing");
  assert.equal((useSection.match(/<li>/gu) ?? []).length, approvedPurposes.length);
  for (const purpose of approvedPurposes) {
    assert.ok(useSection.includes(`<li>${purpose}</li>`), `missing approved privacy purpose: ${purpose}`);
  }
  assert.match(privacyPage, /does not use beta lead information for unrelated marketing\./u);
  assert.doesNotMatch(privacyPage, /without separate permission/u);
  assert.doesNotMatch(privacyPage, /Meet applicable legal obligations/u);
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
