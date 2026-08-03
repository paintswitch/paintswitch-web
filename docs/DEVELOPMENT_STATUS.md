# PaintSwitch development status

Last repository inspection: 2026-08-03

Last documentation-completeness audit: 2026-08-03

Last local application verification: 2026-08-03

Last external deployment verification: 2026-08-03

Last external GoHighLevel verification: 2026-08-03

Repository: `paintswitch/paintswitch-web`

This document separates facts verified directly from the current repository from reports that have not been reverified during this documentation update.

## Verified repository facts

### Repository and application

- The configured Git remote is `https://github.com/paintswitch/paintswitch-web.git`.
- The package name is `paintswitch-web`, version `0.1.0`, and the package is private.
- The repository contains a Next.js App Router application under `src/app`, written in TypeScript and React.
- Manifest versions are Next.js `16.2.12`, React `19.2.4`, React DOM `19.2.4`, TypeScript `^5`, Tailwind CSS `^4`, and ESLint `^9`.
- Lockfile-resolved development versions include TypeScript `5.9.3`, Tailwind CSS `4.3.3`, and ESLint `9.39.5`. See `TECHNICAL_ARCHITECTURE.md` for the complete verified dependency summary.
- The only implemented authored page route is `/`; the App Router also serves the favicon and framework-provided error/not-found behavior. One authored dynamic route, `/api/leads`, validates lead requests and invokes the delivery service. The beta application at commit `efb96b9` (`Build lead-generation beta`) is pushed on `codex/lead-generation-beta` and deployed to a Vercel Preview. Delivery remains fail-closed because `LEAD_DELIVERY_ENABLED` is configured as `false`; the newly provisioned Upstash connection has not yet been exercised by an enabled delivery.
- The repository has `dev`, `build`, `start`, `lint`, `test`, and `typecheck` scripts.

### Implemented user experience

- A responsive, single-page PaintSwitch marketing frontend is implemented locally.
- It includes a sticky header, desktop and `<details>` mobile navigation, a skip link, hero, trust bar, four approved service cards, beta-accurate process steps, brand-benefit section, DMV manual-review disclosure, branded quote-request form, and footer.
- Interior, exterior, cabinet, and commercial are the only service categories shown. Standalone Drywall Repair and the placeholder review section have been removed.
- Primary actions use “Request a Quote” and navigate to the branded form. Metadata and page copy identify the four categories and state that service availability and pricing are confirmed after review.
- The form frontend collects name, phone, email, project ZIP code or address, service type, project description, and contact preference. It uses the same parser as the server before sending, shows field-specific accessible errors, focuses the first invalid control, applies length limits, provides submitting/success/failure presentation, retains a per-attempt UUID across an unchanged retry, clears that UUID after a server `409` submission-ID conflict, applies a 50-second browser timeout, and captures bounded `utm_source` / `utm_campaign` values. Its explicit native `POST` fallback prevents customer details from falling into a URL query if JavaScript is unavailable, although the JSON-only endpoint intentionally rejects that non-JavaScript encoding.
- The form does not display an instant price, collect payment, enable checkout, or promise customer-selected scheduling.
- The frontend was inspected in the local in-app browser at 1440 × 900 and 390 × 844 viewports on 2026-08-03. Both checks found no horizontal overflow. The mobile menu opened, navigated, and closed correctly; the form's intentional delivery-failure state retained all entered values and displayed accurate failure copy. This is responsive and interaction evidence, not cross-browser, screen-reader, production, or end-to-end delivery acceptance.
- PaintSwitch-specific imagery on the page is drawn with HTML and CSS; the `public` directory contains `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, and `window.svg`.

### Missing, placeholder, or not connected

- The service area has no city, county, ZIP, address-eligibility, or travel-zone logic. The form collects one combined project-location value and the local delivery client maps it to the approved `Project Location` Opportunity field; no native address normalization or service-eligibility decision is implemented.
- `/api/leads` provides a fail-closed server boundary with strict key/type/value validation, practical local-part and DNS-label email validation, a 16 KiB bounded streaming body read, a five-second body-read deadline, exact JSON media-type checking, exact same-origin production-host checks for `paintswitch.com` and `paintswitch-web.vercel.app`, local-development and Vercel-preview handling, generic no-store/nosniff responses, and a 55-second function maximum. It maps delivery conflict to `409` and busy/unavailable states to generic retryable `503` responses. With delivery disabled or configuration incomplete, a valid request remains unavailable and cannot truthfully reach the success state end to end.
- The private integration exists, and its confidential token, location ID, pipeline ID, stage ID, and seven custom-field IDs are configured server-side in Vercel. The token is Sensitive and available to Production and Preview; no value is tracked or documented. `LEAD_DELIVERY_ENABLED` is `false`.
- Commit `efb96b9` contains a native-fetch GoHighLevel client for Contact upsert, Opportunity reconciliation search, and Opportunity creation. It maps Contact Preference plus all six approved Opportunity values without exposing provider credentials to browser code.
- Commit `efb96b9` also contains an Upstash REST state client and delivery coordinator. It uses a token-checked 60-second lock, a SHA-256 payload hash, durable `contacting`, `contacted`, `creating`, `ambiguous`, `rejected`, and `completed` phases, streamed provider-response caps, ambiguous-result reconciliation, and explicit rejected-create recovery after configuration correction. It records sanitized delivery events with the non-PII submission UUID rather than lead details or credentials.
- These safeguards support at-most-one automatic Opportunity creation plus reconciliation; they do not establish a strict exactly-once guarantee across independent providers. The owner accepted the Upstash marketplace terms, and the database and Vercel secrets now exist. Retention/TTL approval, enabled delivery, and real-provider testing remain required before the delivery path can be accepted.
- Browser-side source/campaign capture and local mappings to `Campaign Source` and `Campaign Name` exist, but consent behavior, real CRM persistence, and production evidence do not.
- Privacy and Terms documents, communication consent, SMS disclosure/opt-out language, anti-spam and rate controls, data-retention/deletion rules, and legal approval are absent. The repository also provides no verified legal-entity/DBA, registered-address, tax/EIN, or authorized-representative facts for A2P sender registration. Server-side lead-shape and request validation is implemented, but this is not delivery, consent, abuse-control, or legal-approval evidence.
- The form has recoverable client-side failure copy, and the local server classifies conflict, busy, and unavailable outcomes and retains durable reconciliation states. Sanitized submission-ID error reporting exists, but no operational monitoring/alert destination, published and tested notification workflow, or approved alternate customer contact path exists.
- No instant quote flow, room input flow, room-size calculation, eligibility engine, price engine, checkout, booking, scheduling, deposit, or payment behavior is implemented.
- The confirmed flat $125 fuel/materials adjustment is not implemented because no pricing engine or project-price workflow exists.
- No photo upload or review workflow is implemented.
- No chatbot or conversational UI is implemented.
- No custom consultation intake workflow is implemented.
- No automated follow-up, live CRM delivery, production-persisted conversion attribution, analytics integration, or human-handoff workflow is implemented.
- The pushed Preview candidate contains GoHighLevel/Upstash clients and server-side environment-variable references but no added provider dependency. Its provisioned Upstash runtime has not been exercised by enabled delivery, and it has not passed a real-provider test.
- No proposal-generation workflow or operational first-project readiness evidence is present.
- No verified marketing traffic or measurable-lead workflow is implemented.
- The current rendered brand mark is not verified as a final production logo using the owner-preferred paint-roller-with-paint-behind direction.
- One fail-closed API route is present. The pushed Preview candidate has external API clients, durable-state logic, and a provisioned Upstash connection but no authentication, approved retention/TTL, working notification, or live third-party delivery.
- Forty-one automated tests pass locally: twelve lead-intake tests, thirteen route tests, and sixteen mocked delivery tests. Coverage includes strict boundaries, streams, hostile input, exact origin checks, field mapping, replay, payload conflict, concurrency, Redis failure, acquired-lock release after initial-state failure, ambiguous-create reconciliation, explicit rejected-create recovery, failed creating-state write, ambiguous failure before any create, completion-write failure reconciliation, same-contact/new-submission behavior, Marketplace and legacy Upstash configuration, partial/invalid Marketplace-pair fail-closed behavior, invalid configuration, and error sanitization. Lint, TypeScript type checking, and the production build also pass. The tracked GitHub Actions workflow has no GitHub-run evidence yet: it runs on pull requests and pushes to `main`, not the verified non-PR branch push. The `2 / 2` checks shown for commit `efb96b9` are Vercel's completed-deployment and Preview Comments checks, not application verification CI.
- `next.config.ts` now disables the framework-identifying response header and sets a static-page security baseline: Content Security Policy, frame denial, content-type sniffing protection, a strict referrer policy, a restricted permissions policy, and cross-domain-policy denial. The policy preserves static rendering and permits only the inline script/style behavior required by the current Next.js output; no external script, image, font, frame, or API origin is allowlisted.
- No tracked Vercel project configuration or other deployment configuration is present. `.vercel` is ignored.

### Current documentation/code conflicts and implementation gaps

- The pushed Preview frontend aligns with the approved four-service taxonomy, “Request a Quote” action, manual-review disclosure, beta exclusions, and placeholder-review removal. This is hosted Preview evidence, not production acceptance.
- Decision D-023 requires both a custom branded PaintSwitch form and a secure server-side GoHighLevel connection. The frontend, server boundary, private integration, server-only Vercel configuration, GHL client/mappings, durable state design, mocked tests, pushed branch, Preview deployment, Upstash database, and Sensitive Upstash variables exist. Retention/TTL approval, enabled production delivery, notification, and real-provider acceptance evidence do not.
- The required immediate on-page confirmation is represented in frontend state, but it cannot be accepted until the server path reports verified successful delivery. D-027 resolves the former SMS conflict: the opt-in must be separate, optional, and unchecked; `Text` preference is not consent; only explicit opt-ins receive automatic SMS when enabled; and beta may launch with SMS disabled while A2P is pending. The approved opt-in and SMS behavior are not implemented.
- Project location and attribution are locally mapped to the four D-026 Opportunity fields. The owner-notification destination is confirmed as `hello@paintswitch.com`, and a draft workflow is prepared; native address normalization, owner-user assignment, backup ownership, mailbox activation, notification-workflow publication/testing and failure handling, SMS content and consent, A2P readiness and legal sender-identity facts, legal documents, anti-spam controls, and retention/deletion policy remain unresolved. Provider or carrier guidance and registration evidence would not constitute final legal approval.
- A customer-facing chatbot is **Confirmed**, but the repository has no chatbot implementation. Provider, model, architecture, exact interface, and release phasing remain **TBD**.
- GoHighLevel and its intended CRM/SMS/email/AI-chat/automation/calendar/pipeline/reviews/payment-workflow functions are **Confirmed**. The signed-in sub-account, dedicated pipeline/stage, all seven approved custom fields, private integration, required permissions, Vercel server-only GHL configuration, Upstash database, Sensitive Upstash variables, and saved draft owner-notification workflow are externally verified. Mapping/delivery code is pushed and Preview-deployed. The destination `hello@paintswitch.com` is confirmed, but retention/TTL approval, enabled production delivery, staff owner, mailbox provisioning, workflow publication/testing, sender, phone number, and AI agent remain absent or unresolved as labeled.
- The lead-generation beta is now the confirmed first release; the seven end-state outcomes are not all implemented and post-beta sequencing remains **TBD**.
- Website copy remains implementation content and is not evidence that any unrecorded policy is approved.

## Historical reports

### Current local application verification — 2026-08-03

- **Verified:** Forty-one automated tests—twelve intake, thirteen route, and sixteen mocked delivery tests—plus lint, TypeScript type checking, and the Next.js production build passed after the current application changes.
- **Verified:** The production build used Next.js `16.2.12` and reported static routes `/` and `/_not-found` plus dynamic route `/api/leads`.
- **Verified:** A built-app HTTP smoke test returned `200` for `/` and the intentional fail-closed `503` for a structurally valid `/api/leads` request; it did not claim delivery.
- **Verified:** The frontend was inspected locally at 1440 × 900 and 390 × 844 with no horizontal overflow. The native mobile menu opened, navigated to Services, and closed. A valid local form attempt reached the intentional unavailable response, displayed accurate failure copy, and preserved all entered values.
- **Verified:** Regression tests prove that an exact same-origin request from `https://paintswitch-web.vercel.app` reaches the intentional fail-closed `503` rather than being rejected as cross-origin, while a mismatched origin remains rejected. Direct API submissions using malformed or hostile email forms are rejected.
- **Verified:** A built production server returned `200` for `/`, the intentional `503 LEAD_DELIVERY_UNAVAILABLE` for a valid local `/api/leads` request, the configured CSP/frame/nosniff/referrer/permissions headers, and no `X-Powered-By` value.
- **Verified:** Built-site Chrome QA proved that invalid phone input receives a field-specific error and Phone focus, empty submission focuses Name and exposes all seven field errors, the skip link focuses `MAIN#main-content`, a valid unavailable submission retains all seven values, and the 404 page renders with the security headers. No CSP violation appeared during these flows.
- **Boundary:** The parser/route/browser checks verify local request handling and fail-closed behavior. The delivery tests verify mapping and failure/recovery contracts against in-memory fake Upstash and GoHighLevel responses. Provisioning the real Upstash database does not verify its runtime behavior. The evidence does not verify real Upstash/GoHighLevel delivery, owner notification, approved consent behavior, optional SMS, production deployment, or any end-to-end lead journey.

### Earlier local verification report — 2026-07-30

- **Status:** Historical/Needs verification
- Lint and the production build were reported as passing on Codyx on 2026-07-30.
- The reported build used Next.js `16.2.10` and listed static routes `/` and `/_not-found`.
- This earlier report is preserved as history. A newer frontend-only verification passed on 2026-08-02, but final-candidate checks must run again after the lead-delivery path and remaining launch changes are complete.

### Dependency-install report — 2026-07-30

- **Status:** Historical/Needs verification
- `npm ci` reportedly identified 12 high-severity vulnerabilities.
- That historical count is superseded for current planning by the verified 2026-08-02 review below; it remains preserved as history.
- Do not recommend or run `npm audit fix --force` automatically. Review the advisories, affected dependency paths, available compatible updates, and application impact before proposing remediation.

### Current dependency-security review — 2026-08-02

- **Verified:** A current audit initially reported three high-severity production package entries under Next.js `16.2.10`, including direct Next.js advisories plus transitive PostCSS and Sharp findings.
- **Verified remediation:** Next.js and `eslint-config-next` were updated to the signed patch release `16.2.12`. The direct Next.js advisories cleared; the latest verification has forty-one passing tests plus passing lint, type checking, and production build. Earlier same-day built-route smoke checks remain recorded separately.
- **Verified remediation:** Development-only `brace-expansion` findings were resolved by compatible transitive patch updates to `1.1.18` and `5.0.9`; no force fix was run.
- **Residual audit result:** The current full and production audits report three high-severity vulnerable package entries: Next.js is flagged through its bundled PostCSS `8.4.31` and optional Sharp `0.34.5` dependencies. The audit does not offer a compatible current Next.js update; its displayed alternative is an invalid major downgrade for this application and was not applied.
- **Exposure assessment:** The PostCSS advisories require attacker-controlled CSS processing, while the Sharp advisory requires untrusted image decoding. Repository inspection found no user CSS input, runtime CSS-processing endpoint, `next/image` import, Sharp call, photo upload, or user-image processing path in the beta. This reduces current reachability but is not proof of zero risk.
- **Confirmed owner disposition — 2026-08-03:** The owner accepted the scoped low-reachability residual risk for this beta with monitoring for a compatible upstream Next.js patch. This removes the advisory disposition as a beta blocker for the current architecture, not as proof of zero risk. Reassess if user-controlled CSS or image processing, uploads, `next/image`, direct Sharp use, or another exposure-changing path is introduced. Do not run `npm audit fix --force`, force incompatible PostCSS/Sharp versions, or downgrade Next.js automatically.
- Primary references: [Next.js 16.2.12 signed release](https://github.com/vercel/next.js/releases/tag/v16.2.12), [PostCSS arbitrary-file-read advisory](https://github.com/advisories/GHSA-6g55-p6wh-862q), [PostCSS path-traversal advisory](https://github.com/advisories/GHSA-r28c-9q8g-f849), and [Sharp/libvips advisory](https://github.com/advisories/GHSA-f88m-g3jw-g9cj).

### Deployment report and current verification

- **Historical/Needs verification — 2026-07-24:** A deployment was reported at [https://paintswitch-web.vercel.app](https://paintswitch-web.vercel.app), together with GitHub-to-Vercel automatic deployment.
- **Verified — 2026-08-01:** A read-only HTTP health check returned `200 OK` from Vercel for the reported URL.
- **Verified — 2026-08-02:** The signed-in Vercel project `paint-switch/paintswitch-web` was inspected. It is linked to `https://github.com/paintswitch/paintswitch-web`, and the displayed production source was branch `main` at commit `dc0c8a6`.
- **Verified — 2026-08-03:** Vercel showed `paintswitch.com`, `www.paintswitch.com`, and the Vercel production domain with Valid Configuration. The apex is assigned to Production, and `www` is configured as a `308` redirect to the apex. Public HTTPS checks returned `200` for `https://paintswitch.com` and `308` from `https://www.paintswitch.com` to `https://paintswitch.com/`.
- **Verified branch-to-Preview deployment — 2026-08-03:** Commit `efb96b9` (`Build lead-generation beta`) was pushed on `codex/lead-generation-beta`. Vercel automatically created the Ready Preview at [https://paintswitch-m6o5sbszy-paint-switch.vercel.app](https://paintswitch-m6o5sbszy-paint-switch.vercel.app) in 21 seconds. The public GitHub commit page showed `2 / 2` Vercel-related checks: `Vercel — Deployment has completed` and `Vercel Preview Comments`. These checks prove successful Preview automation, not the repository's application-verification workflow or production release.
- **Verified hosted Preview behavior — 2026-08-03:** The Preview DOM, title, and branded form structure were inspected. A structurally valid hosted submission returned the generic fail-closed error because `LEAD_DELIVERY_ENABLED=false`; no GoHighLevel delivery was attempted. This verifies deployed fail-closed behavior, not real-provider or end-to-end acceptance.
- **Verified production contradiction — 2026-08-03:** The apex still serves the prior `main` build, not commit `efb96b9`. It contains standalone Drywall Repair, three explicitly labeled placeholder testimonials, nonfunctional `#` Privacy/Terms links, estimate/contact CTAs that do not reach a working form, and universal-consultation copy. These are implementation conflicts, not approved policy. The corrected candidate is available only as a Preview.
- **Verified hosting-plan blocker — 2026-08-03:** Vercel shows the project/team on Hobby. Current official Vercel Hobby guidance restricts that plan to personal, non-commercial use, while PaintSwitch intends to generate commercial leads. The owner must choose and approve a compliant plan before commercial launch; no purchase or plan change is approved.
- **Verified — 2026-08-02:** GoDaddy DNS for `paintswitch.com` uses an apex `A` record pointing to Vercel's displayed value `216.198.79.1`. The existing `www` CNAME points to `paintswitch.com`; nameservers and unrelated DNS records were left unchanged.
- **Partially verified — 2026-08-03:** Sensitive GHL configuration and five Sensitive Upstash variables are present in Vercel for Production and Preview, and `LEAD_DELIVERY_ENABLED` is present as `false`. GitHub-branch-to-Vercel-Preview automatic deployment is verified for commit `efb96b9`; production promotion/release behavior, other environment settings, rollback procedure, monitoring, alerting, and production-change rehearsal remain unverified.
- The repository itself does not contain tracked Vercel configuration proving the external deployment connection.

### GoHighLevel and server-configuration verification — 2026-08-03

- **Verified:** A signed-in GoHighLevel agency account and a Paint Switch sub-account exist and were accessible.
- **Verified:** The sub-account contains a `Marketing Pipeline`, example opportunities, contacts, tasks, and revenue values that appear to be HighLevel sample/demo content. They are not evidence of a production PaintSwitch lead workflow or business activity.
- **Verified:** GoHighLevel **My Staff** showed no location users, so no production lead owner can yet be assigned or notified through a verified location-user record.
- **Verified:** The approved `PaintSwitch Lead Intake` pipeline was created with exactly one `New Quote Request` stage. The saved pipeline list showed one stage.
- **Verified:** `Service Type` was created as an Opportunity single-select dropdown with Interior, Exterior, Cabinet, and Commercial in the `Opportunity Details` folder.
- **Verified:** `Project Description` was created as an Opportunity multi-line field in the `Opportunity Details` folder.
- **Verified:** `Contact Preference` was created as a Contact single-select dropdown with Call, Text, and Email in the `General Info` folder.
- **Verified:** `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name` were created as the four D-026 Opportunity fields. Their identifiers and the three D-022 field identifiers are configured in the Vercel server-side field mapping.
- **Verified:** The phone system has no phone number, and A2P messaging registration has not been started. No verified A2P legal-business/DBA, registered-address, tax/EIN, or authorized-representative details are recorded. Customer SMS acknowledgment is therefore not launch-ready.
- **Verified:** Email services use HighLevel's shared sending domain with no dedicated PaintSwitch sending domain verified.
- **Verified standalone/legal blocker:** The Business Profile has a blank Legal Business Name, retains a Jen Contracting-domain business email, and has incomplete authorized-representative fields. The owner approved `hello@paintswitch.com` as the replacement mailbox, but it must not be entered or used until provisioning and testing complete. Legal identity and representative facts must not be inferred from the other brand.
- **Verified:** Voice AI and Conversation AI modules are available, but no agent was found. Voice AI phone intake is not approved for the lead-generation beta and remains disabled.
- **Verified:** The original `Marketing Pipeline` and visible sample/demo data were left untouched while the dedicated pipeline was added.
- **Verified:** The `PaintSwitch Website Lead Intake` private integration exists with the required beta permissions for contact writes, Opportunity reads/writes, and custom-field reads. Its token is stored as a Sensitive Vercel environment variable for Production and Preview. Location, pipeline, and stage identifiers are also configured; no confidential value is recorded in documentation.
- **Verified:** The owner explicitly accepted the Upstash marketplace terms. The free database `paintswitch-lead-idempotency` was created in Washington, D.C. (`iad1`) with eviction disabled and a displayed allowance of 500,000 commands per month. It is connected to the Vercel project `paintswitch-web` through five Sensitive Production-and-Preview variables: `UPSTASH_REDIS_REST_KV_REST_API_URL`, `UPSTASH_REDIS_REST_KV_REST_API_TOKEN`, `UPSTASH_REDIS_REST_KV_REST_API_READ_ONLY_TOKEN`, `UPSTASH_REDIS_REST_REDIS_URL`, and `UPSTASH_REDIS_REST_KV_URL`. No value is recorded in documentation.
- **Verified:** `LEAD_DELIVERY_ENABLED` remains `false`. Consequently, the hosted Preview submission did not attempt Upstash or GoHighLevel delivery, and no real website-to-Upstash-to-GoHighLevel delivery has occurred. Retention/TTL approval remains required before enabled delivery.
- **Verified — 2026-08-03:** Saved **Draft** workflow `PaintSwitch Website Lead - Owner Notification` now exists. It triggers on Opportunity Created only when the pipeline is `PaintSwitch Lead Intake`. Its internal Email action is named `Email Owner - hello@paintswitch.com`, uses custom recipient `hello@paintswitch.com`, subject `New PaintSwitch website lead`, and instructs the owner to open GoHighLevel, review the opportunity, and contact the lead as soon as possible while stating that the alert does not confirm pricing, service availability, scheduling, or booking. From-name and From-email defaults remain blank. The workflow is unpublished, no test email has been sent, and no delivery/failure behavior is verified. No SMS workflow is active; SMS remains disabled.
- **Confirmed — 2026-08-03:** The owner clarified that owner lead notifications must go to `hello@paintswitch.com`; the earlier `hell@paintswitch.com` text was a typo. This resolves the destination only. The mailbox remains unprovisioned and untested, and the saved draft workflow does not make notification operational.
- **Verified / Needs production-safe recheck:** Contact Deduplication appeared configured with Allow Duplicate Contact off and priority Email then Phone. Opportunities settings did not expose an Allow Duplicate Opportunity setting. Contact UI evidence must be reverified during the production-safe test and does not prove duplicate-Opportunity behavior.
- **Verified — 2026-08-02:** The signed-in GoDaddy Email & Office dashboard showed two unused Email Essentials accounts. The owner accepted the Microsoft Customer Agreement. The full account-creation flow was explicitly scoped to `paintswitch.com`, with username `hello`, display name `PaintSwitch Team`, standalone organization selection `Do not share`, administrator permission required for the first PaintSwitch-domain account, and the existing owner notification address retained. The mailbox is not created, provisioned, sender-configured, or send/receive tested.
- **Owner-reported / Needs verification — 2026-08-02:** After private password entry, GoDaddy displayed “Sorry, we can't create this user.” The owner chose to pause email setup and return to it later. The exact cause, entitlement/domain association, Microsoft 365 organization state, and recovery path remain unverified.

## Current development assessment

- The repository is at an in-progress lead-generation beta implementation stage, not an operational lead-delivery, quoting, or booking product stage.
- Decision D-018 confirms a lead-generation beta before instant quote and checkout. Its four-service frontend, branded intake, manual-review messaging, placeholder-review removal, validation boundary, secure GHL client/mappings, and durable delivery coordinator are pushed at commit `efb96b9` and deployed to a Ready Vercel Preview. The real CRM delivery/operating path is not active, and production still serves the prior `main` build.
- Decision D-023 targets the beta for Saturday, 2026-08-08 and limits required owner participation to at most one hour per day. The target is a goal, not launch-readiness evidence and not permission to bypass any safety, legal, privacy, consent, security, messaging, or acceptance gate.
- Decision D-023 also confirms a custom branded PaintSwitch quote-request form, a secure server-side GoHighLevel connection, and removal of placeholder reviews. The form, review removal, private integration, Sensitive Vercel GHL and Upstash configuration, all seven field destinations, and server-side connection code are verified in the Ready Preview. Retention/TTL approval, enabled delivery, notification, production release, and production acceptance remain absent.
- The prior **49%** directional readiness snapshot is retired because it predates the private-integration, field, secret, delivery implementation, Preview deployment, and Upstash provisioning. A new percentage must be deliberately rescored at the next launch review; Preview deployment, provisioned vendors, mocked tests, and an unpublished workflow draft must not be counted as live production or real-provider capability. The owner-notification destination and draft are resolved/prepared. Current blockers remain retention/TTL approval, mailbox provisioning, notification-workflow publication and testing, Privacy/Terms and consent, anti-spam/rate policy, retention/deletion policy, standalone legal/customer-messaging identity, production promotion, provider end-to-end QA, and final launch QA.
- The approved quote, routing, checkout, and booking model is documented but not implemented.
- The flat $125 fuel/materials adjustment is **Confirmed**, but critical base pricing, eligibility, checkout, and policy decisions remain **TBD**, so a safe firm-pricing implementation is still blocked on product decisions.
- A customer-facing chatbot is **Confirmed** but not implemented. Its provider, model, architecture, exact interface, and release phasing remain **TBD**.
- GoHighLevel and CRM integration are **Confirmed**. The account/sub-account, dedicated pipeline/stage, seven fields, private integration/permissions, Sensitive Vercel token, configured identifiers, pushed server implementation/mappings, Upstash database/configuration, and fail-closed Preview behavior are verified. My Staff still has no verified location user. The destination `hello@paintswitch.com` is confirmed; retention/TTL approval, enabled production delivery, mailbox and notification-workflow activation/testing, sender activation, payment configuration, and release phasing remain unimplemented or **TBD** as labeled.
- The PaintSwitch owner is the confirmed primary beta lead owner. The frontend form and on-page result states exist in the pushed Preview, but no working notification, CRM delivery, SMS sender/workflow, consent implementation, backup owner, measurable human-response target, operating hours, or rehearsal evidence exists.
- The pushed Preview implementation has a token-checked 60-second lock, release of an acquired lock after initial-state failure, durable phases, at-most-one automatic Opportunity creation, ambiguous-result reconciliation, explicit rejected-create recovery, streamed response caps, and sanitized submission-ID reporting. Forty-one tests pass locally, including sixteen mocked delivery tests with state-write and completion-write fault injection and Marketplace/legacy Upstash configuration coverage. The hosted valid submission correctly failed closed while delivery was disabled, so no provider call occurred. This is not a strict cross-provider exactly-once guarantee and is not provider acceptance. Retention/TTL approval, enabled production deployment, and real-provider tests remain blockers.
- External A2P registration or approval remains a schedule risk. No phone number, A2P registration, or verified legal sender-identity packet exists. D-027 permits beta launch with SMS disabled while A2P is pending; exact legal wording/approval and other applicable beta gates remain required. Provider/carrier readiness does not replace final legal review.
- Vercel is the confirmed beta host. Domain health, the `www` redirect, branch-to-Preview automation, and the Ready Preview for commit `efb96b9` are verified, but the live apex still serves the conflicting prior `main` build. Production promotion and rollback remain unverified, and the owner has not approved a commercially compliant plan to replace the currently displayed Hobby plan. The GoHighLevel account and sub-account are verified, but production beta operation is incomplete.
- Collectible payments, working proposals/bookings, measurable marketing leads, and first-project operational readiness are Confirmed end-state outcomes but are not implemented or verified.
- Proposed payment details, analytics behavior, detailed chatbot behavior, customer-scheduling mechanics, human handoff, and photo-upload capabilities require approval before implementation.

## Next status updates

Update this document when:

- a product journey becomes connected end to end;
- a placeholder becomes production-ready;
- lint, build, tests, dependencies, or deployment are reverified;
- a material security or dependency risk is triaged;
- a release changes what is implemented, missing, or operational;
- a canonical business decision exposes or resolves a code/documentation conflict.
