import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  alexandriaCityPage,
  arlingtonCityPage,
  buildCityJsonLd,
  chevyChaseVillageCityPage,
  cityLandingPages,
  mcLeanCityPage,
  potomacCityPage,
  viennaCityPage,
  fairfaxStationCityPage,
  bethesdaCityPage,
  greatFallsCityPage,
  oaktonCityPage,
} from "../src/lib/city-landing-pages.ts";

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
const globalStyles = source("src/app/globals.css");
const header = source("src/components/header.tsx");
const buttons = source("src/components/buttons.tsx");
const serviceCard = source("src/components/service-card.tsx");
const howItWorks = source("src/components/how-it-works.tsx");
const sectionHeading = source("src/components/section-heading.tsx");
const brandLogoComponent = source("src/components/brand-logo.tsx");
const brandLogoAsset = source("public/images/paintswitch-logo.svg");
const cityLandingPageComponent = source("src/components/city-landing-page.tsx");
const cityLandingPageData = source("src/lib/city-landing-pages.ts");
const alexandriaPage = source("src/app/alexandria-va/page.tsx");
const arlingtonPage = source("src/app/arlington-va/page.tsx");
const chevyChaseVillagePage = source("src/app/chevy-chase-village-md/page.tsx");
const mcLeanPage = source("src/app/mclean-va/page.tsx");
const potomacPage = source("src/app/potomac-md/page.tsx");
const viennaPage = source("src/app/vienna-va/page.tsx");
const fairfaxStationPage = source("src/app/fairfax-station-va/page.tsx");
const bethesdaPage = source("src/app/bethesda-md/page.tsx");
const greatFallsPage = source("src/app/great-falls-va/page.tsx");
const oaktonPage = source("src/app/oakton-va/page.tsx");
const sitemap = source("src/app/sitemap.ts");

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
  header,
  buttons,
  "service card": serviceCard,
  "how it works": howItWorks,
  "section heading": sectionHeading,
  "brand logo": brandLogoComponent,
  "city landing page": cityLandingPageComponent,
  "city landing page data": cityLandingPageData,
  "Alexandria page": alexandriaPage,
  "Arlington page": arlingtonPage,
  "Chevy Chase Village page": chevyChaseVillagePage,
  "McLean page": mcLeanPage,
  "Potomac page": potomacPage,
  "Vienna page": viennaPage,
  "Fairfax Station page": fairfaxStationPage,
  "Bethesda page": bethesdaPage,
  "Great Falls page": greatFallsPage,
  "Oakton page": oaktonPage,
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
  assert.match(termsPage, /effectiveDate="August 9, 2026"/u);
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

test("website terms preserve DMV review, Virginia priority, and avoid a response-time promise", () => {
  assert.match(termsPage, /accepts project requests throughout the DMV for individual service-area review/u);
  assert.match(termsPage, /Virginia projects are prioritized for the public beta/u);
  assert.match(termsPage, /Does not confirm that PaintSwitch serves the project location/u);
  assert.match(termsPage, /Does not provide or accept a firm price/u);
  assert.match(termsPage, /Does not schedule or book a project/u);
  assert.match(termsPage, /Does not authorize a deposit or payment/u);
  assert.match(termsPage, /Does not create a painting or service contract/u);
  assert.match(termsPage, /follows up as soon as reasonably possible/u);
  assert.match(termsPage, /Response times vary based on when a request is received, current lead volume, and team availability/u);
  assert.match(termsPage, /does not guarantee contact, project acceptance, availability, scheduling, or booking within a specific timeframe/u);
  assert.doesNotMatch(termsPage, /five minutes|5 minutes|9:00 a\.m\./iu);
  assert.match(termsPage, /It is not consent to automated SMS messages/u);
  assert.match(termsPage, /PaintSwitch does not send automated customer SMS during the beta/u);
  assert.match(termsPage, /href="\/privacy"/u);
  assert.match(termsPage, /href="mailto:hello@paintswitch\.com"/u);
});

test("public market copy preserves DMV intake; Virginia priority stays in legal terms only", () => {
  for (const [name, value] of Object.entries({homePage, rootLayout, hero, trustBar, termsPage})) {
    assert.match(value, /DMV/u, `${name} must preserve the confirmed DMV market`);
  }

  // Marketing copy no longer states the Virginia-priority operational detail (owner-approved
  // 2026-08-20 copy revision); it remains disclosed in the Website Terms.
  assert.match(termsPage, /Virginia/u);
  assert.doesNotMatch(termsPage, /(?:Virginia[- ]only|only Virginia)/iu);

  for (const [name, value] of Object.entries({homePage, hero})) {
    assert.doesNotMatch(value, /Virginia/u, `${name} should no longer mention Virginia priority in marketing copy`);
  }

  // rootLayout keeps "Virginia painters" only as an SEO keyword, not in visible marketing copy.
  assert.match(rootLayout, /keywords:.*Virginia painters/su);
  const [, visibleDescription] = rootLayout.match(/description:\s*"([^"]*)"/u) ?? [];
  assert.ok(visibleDescription, "rootLayout must define a metadata description");
  assert.doesNotMatch(visibleDescription, /Virginia/u, "rootLayout metadata description should not mention Virginia priority");
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

test("customer-facing brand marks use the approved exact production logo", () => {
  const logoBytes = Buffer.from(
    readFileSync(new URL("../public/images/paintswitch-logo.svg", import.meta.url), "utf8").replace(/\r\n/gu, "\n"),
    "utf8",
  );
  const logoHash = createHash("sha256").update(logoBytes).digest("hex");

  assert.equal(logoHash, "4680e0995f21908e852d7062a471abad46cbcece918151af74f73249553f31ae");
  assert.match(brandLogoAsset, /viewBox="170 335 915 524"/u);
  assert.match(brandLogoAsset, /#012765/iu);
  assert.match(brandLogoAsset, /#0658FE/iu);
  assert.doesNotMatch(brandLogoAsset, /<script|<image|data:/iu);
  assert.match(brandLogoComponent, /src="\/images\/paintswitch-logo\.svg"/u);
  assert.match(brandLogoComponent, /width=\{915\}/u);
  assert.match(brandLogoComponent, /height=\{524\}/u);

  for (const [name, value] of Object.entries({ header, footer, legalPage })) {
    assert.match(value, /<BrandLogo\b/u, `${name} must use the approved production logo`);
    assert.doesNotMatch(value, />\s*PaintSwitch\s*</u, `${name} still contains an interim text-only wordmark`);
  }

  assert.match(footer, /bg-\[#F5F1E8\]/u);
});

test("homepage implements the approved editorial color-transformation direction", () => {
  for (const color of ["#D1C4B8", "#C9BDAD", "#012765", "#0658FE", "#3D4E4E", "#F5F1E8"]) {
    assert.ok(
      globalStyles.toUpperCase().includes(color) || homePage.toUpperCase().includes(color),
      `missing approved color: ${color}`,
    );
  }

  assert.match(globalStyles, /--brand-navy:\s*#012765/iu);
  assert.match(globalStyles, /--brand-cobalt:\s*#0658fe/iu);
  assert.match(buttons, /bg-\[#012765\]/u);
  assert.match(buttons, /hover:bg-\[#0658FE\]/u);

  assert.match(hero, /Transformation[\s\S]*through[\s\S]*color\./u);
  assert.match(homePage, /Before-and-after stories show the power of expert color choices and quality craftsmanship\./u);
  assert.match(hero, /Illustrative color study/u);
  assert.match(hero, /Not a customer project/u);
  assert.match(hero, /paintswitch-color-study\.png/u);
  assert.doesNotMatch(`${hero}\n${homePage}`, /(?:our client|completed project|customer result)/iu);
});

test("city landing pages use the approved sequence, metadata limits, and canonical routes", () => {
  assert.deepEqual(
    cityLandingPages.map((page) => page.city),
    [
      "Alexandria",
      "Arlington",
      "Chevy Chase Village",
      "McLean",
      "Potomac",
      "Vienna",
      "Fairfax Station",
      "Bethesda",
      "Great Falls",
      "Oakton",
    ],
  );

  for (const page of cityLandingPages) {
    assert.ok(page.title.length < 60, `${page.city} title exceeds 59 characters`);
    assert.ok(page.description.length < 155, `${page.city} description exceeds 154 characters`);
    assert.match(
      page.title,
      new RegExp(`Painters in ${page.city}, ${page.stateAbbreviation} \\| PaintSwitch`, "u"),
    );
  }

  assert.match(alexandriaPage, /canonical: "https:\/\/paintswitch\.com\/alexandria-va"/u);
  assert.match(arlingtonPage, /canonical: "https:\/\/paintswitch\.com\/arlington-va"/u);
  assert.match(chevyChaseVillagePage, /canonical: "https:\/\/paintswitch\.com\/chevy-chase-village-md"/u);
  assert.match(mcLeanPage, /canonical: "https:\/\/paintswitch\.com\/mclean-va"/u);
  assert.match(potomacPage, /canonical: "https:\/\/paintswitch\.com\/potomac-md"/u);
  assert.match(viennaPage, /canonical: "https:\/\/paintswitch\.com\/vienna-va"/u);
  assert.match(fairfaxStationPage, /canonical: "https:\/\/paintswitch\.com\/fairfax-station-va"/u);
  assert.match(bethesdaPage, /canonical: "https:\/\/paintswitch\.com\/bethesda-md"/u);
  assert.match(greatFallsPage, /canonical: "https:\/\/paintswitch\.com\/great-falls-va"/u);
  assert.match(oaktonPage, /canonical: "https:\/\/paintswitch\.com\/oakton-va"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/alexandria-va"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/arlington-va"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/chevy-chase-village-md"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/mclean-va"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/potomac-md"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/vienna-va"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/fairfax-station-va"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/bethesda-md"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/great-falls-va"/u);
  assert.match(sitemap, /url: "https:\/\/paintswitch\.com\/oakton-va"/u);
});

test("city pages preserve the shared design system and working local navigation anchors", () => {
  for (const component of ["Header", "Footer", "PrimaryButton", "SecondaryButton", "QuoteRequestForm", "SectionHeading", "ServiceCard", "TrustBar"]) {
    assert.match(cityLandingPageComponent, new RegExp(`<${component}\\b`, "u"), `missing shared ${component}`);
  }

  for (const anchor of ["home", "services", "how-it-works", "about", "quote"]) {
    assert.match(cityLandingPageComponent, new RegExp(`id="${anchor}"`, "u"), `missing #${anchor}`);
  }

  assert.equal((cityLandingPageComponent.match(/<h1\b/gu) ?? []).length, 1);
  assert.doesNotMatch(cityLandingPageComponent, /HighLevelChatWidget/u);
  assert.doesNotMatch(
    `${alexandriaPage}\n${arlingtonPage}\n${chevyChaseVillagePage}\n${mcLeanPage}\n${potomacPage}\n${viennaPage}\n${fairfaxStationPage}\n${bethesdaPage}\n${greatFallsPage}\n${oaktonPage}`,
    /HighLevelChatWidget/u,
  );
});

test("city content uses only approved services and contains no unsupported marketing claims", () => {
  const approvedServices = ["Interior Painting", "Exterior Painting", "Cabinet Painting", "Commercial Painting"];

  for (const page of cityLandingPages) {
    assert.deepEqual(
      page.services.map((service) => service.title),
      approvedServices,
    );
    assert.match(page.heroSummary, /individual service-area and project review/u);
    assert.match(page.faqs[1].answer, /individual service-area review/u);
  }

  const publicCitySources = `${cityLandingPageComponent}\n${cityLandingPageData}\n${alexandriaPage}\n${arlingtonPage}\n${chevyChaseVillagePage}\n${mcLeanPage}\n${potomacPage}\n${viennaPage}\n${fairfaxStationPage}\n${bethesdaPage}\n${greatFallsPage}\n${oaktonPage}`;
  assert.doesNotMatch(publicCitySources, /top[- ]rated|state licen[cs]e|lead[- ]safe|\bEPA\b|\binsured\b|\binsurance\b|deck staining|power washing/iu);
  assert.doesNotMatch(publicCitySources, /\$\s*\d|\b(?:minimum project|deposit percentage|ceiling surcharge|repair allowance)\b/iu);
  assert.doesNotMatch(publicCitySources, /\bJen(?:\s+Contracting)?\b/iu);
});

test("city JSON-LD matches the visible service and FAQ data without unsupported fields", () => {
  for (const page of [
    alexandriaCityPage,
    arlingtonCityPage,
    chevyChaseVillageCityPage,
    mcLeanCityPage,
    potomacCityPage,
    viennaCityPage,
    fairfaxStationCityPage,
    bethesdaCityPage,
    greatFallsCityPage,
    oaktonCityPage,
  ]) {
    const jsonLd = buildCityJsonLd(page);
    const [service, faqPage] = jsonLd["@graph"];

    assert.equal(service["@type"], "Service");
    assert.equal(service.url, `https://paintswitch.com/${page.slug}`);
    assert.deepEqual(
      service.serviceType,
      page.services.map((entry) => entry.title),
    );

    assert.equal(faqPage["@type"], "FAQPage");
    assert.deepEqual(
      faqPage.mainEntity.map((question) => ({
        question: question.name,
        answer: question.acceptedAnswer.text,
      })),
      page.faqs,
    );

    const serialized = JSON.stringify(jsonLd);
    assert.doesNotMatch(serialized, /"(?:aggregateRating|areaServed|postalCode|streetAddress|price|license|insurance|offers|hasOfferCatalog)"\s*:/iu);
    assert.doesNotMatch(serialized, /\bEPA\b/iu);
  }

  assert.match(cityLandingPageComponent, /JSON\.stringify\(jsonLd\)\.replace\(\/<\/g, "\\\\u003c"\)/u);
});
