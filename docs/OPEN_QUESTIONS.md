# PaintSwitch open questions

Last updated: 2026-08-05

This document records unresolved choices and working assumptions. An item is approved only when it is explicitly labeled **Confirmed** and supported by the decision log. Do not present **Proposed** or **TBD** pricing as live customer pricing.

## Launch geography

- **Confirmed:** PaintSwitch launches in the DMV, stated on 2026-07-11.
- **Confirmed:** Virginia is the public operating focus for the lead-generation beta, approved on 2026-08-04. This does not create a Virginia-only service boundary.
- **Confirmed:** Stop treating MHIC-specific work as a beta focus. This does not waive licensing or consumer-protection obligations for work actually accepted in Maryland.
- **TBD:** Which DMV cities, counties, and ZIP codes are eligible at launch?
- **TBD:** Are there travel zones, and how are they defined?
- **TBD:** Are any locations excluded even if they fall within the general DMV description?
- **Proposed:** Apply travel-zone adjustments to pricing. The existence, boundaries, and amounts of those adjustments are not approved.

## Standard-interior eligibility

- **Confirmed:** Residential interior painting is the operational V1 for firm instant pricing and checkout. The decision is confirmed; its exact earlier historical source date remains uncertain and it was reaffirmed on 2026-08-01.
- **TBD:** What conditions, beyond service type and room-size tier, define a qualifying standard residential interior?
- **TBD:** Which room types can receive instant firm pricing?
- **TBD:** How are stairwells, foyers, open-concept areas, connected spaces, and irregular rooms classified?
- **TBD:** Which ceiling heights require review rather than automated pricing?
- **TBD:** What repair types or repair severity require photo review or consultation?
- **TBD:** How do color changes, occupied/furniture level, doors, closets, trim, and crown affect eligibility?
- **TBD:** Can a multi-room project remain instant-eligible when one room requires review, or does the entire project move to review?

## Pricing and checkout working assumptions

Every item in this section is **Proposed** and must not be used as live customer pricing or policy:

- **Proposed:** Specific room prices.
- **Proposed:** A $795 minimum project.
- **Proposed:** A 10% deposit.
- **Proposed:** Package names.
- **Proposed:** Included-coat rules.
- **Proposed:** Repair allowances.
- **Proposed:** Ceiling multipliers.
- **Proposed:** Travel-zone adjustments.

Confirmed pricing exception:

- **Confirmed:** One flat $125 fuel/materials adjustment applies to every project under decision D-013 dated 2026-07-16. This does not approve a separate travel-zone adjustment or any other amount.

Additional unresolved questions:

- **TBD:** Approved price amounts for each room type, size tier, and selected surface.
- **TBD:** Approved formulas for doors, closets, trim/crown, repairs, color changes, and occupied/furniture conditions.
- **TBD:** Taxes, discounts, promotions, cancellation terms, rescheduling terms, refunds, and price-expiration rules.
- **TBD:** What “checkout” must collect and whether payment is required at checkout.
- **TBD:** Whether a price can change after checkout and, if so, under what disclosed conditions.

## Ceiling-height rules

- **Confirmed:** Ceiling height is a quote input.
- **Confirmed:** Exact ceiling-height tiers and surcharges are not approved.
- **TBD:** Tier boundaries, measurement method, review threshold, and pricing effect.
- **Proposed:** Use ceiling multipliers. No multiplier or threshold is approved.

## Photo review

- **Confirmed:** Complex interiors require photo review.
- **Confirmed:** Oversized rooms require dimensions and photo review.
- **Proposed:** Accept photo uploads during quoting.
- **TBD:** Required images, upload limits, alternate intake channel, reviewer role, review criteria, turnaround time, notifications, and approval record.
- **TBD:** Whether customers see a non-firm range before review. No range may be shown until its calculation and labeling are approved.

## Consultation

- **Confirmed:** Exterior, cabinet, and commercial projects require custom consultation.
- **TBD:** Consultation format, intake fields, service hours, ownership, response-time expectation, scheduling method, and follow-up policy.
- **TBD:** Whether any future subcategory of exterior, cabinet, or commercial work could qualify for automation. Current approval does not allow firm instant checkout for these categories.

## Guided quoting and communication

- **Confirmed:** Provide quick quotes and close qualifying sales online before anyone must call the customer, stated on 2026-07-11.
- **Confirmed:** PaintSwitch includes a customer-facing chatbot, approved on 2026-07-11.
- **Confirmed:** Use “Request a Quote” as the primary action for the lead-generation beta, approved on 2026-08-01.
- **Proposed:** Use the confirmed chatbot to guide the quote flow.
- **Proposed:** Use homepage calls to action such as “Get My Price” and “No phone call required.”
- **Proposed:** Provide automated follow-up and a context-preserving human handoff.
- **TBD:** Chatbot provider, model, architecture, exact interface, knowledge source, escalation criteria, conversation retention, disclosure language, and operating ownership. GoHighLevel has an intended AI-chat function, but that does not resolve these implementation choices.
- **Confirmed:** The chatbot is not required for the lead-generation beta and is deferred to a later approved release.
- **TBD:** Which post-beta release first requires the chatbot.
- **TBD:** Final approved homepage and funnel copy beyond the approved beta CTA and availability/pricing disclosure.

## Booking, customer operations, and integrations

- **Confirmed:** Online booking is part of the launch model.
- **Confirmed:** GoHighLevel is the selected launch backbone or operating engine, and CRM is an intended GoHighLevel function, approved on 2026-07-18.
- **Confirmed:** Other intended GoHighLevel functions are SMS, email, AI chat, automations, calendar booking, pipelines, reviews, and payment workflows.
- **Confirmed:** Use `PaintSwitch Lead Intake` with exactly one `New Quote Request` stage; retain the D-022 fields; add Opportunity fields `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name`; leave sample/demo data untouched; and keep SMS and Voice AI disabled until separately ready. The additional fields were approved on 2026-08-03 under D-026.
- **Confirmed:** Use the D-022 field objects, types, and option values, and use `hello@paintswitch.com` as the primary PaintSwitch domain mailbox.
- **Confirmed:** Send owner lead notifications to `hello@paintswitch.com` and use internal sender `PaintSwitch <hello@paintswitch.com>` under D-029 and D-031.
- **Confirmed:** Publish the exact `PaintSwitch Website Lead - Owner Notification` workflow under D-032 dated 2026-08-04. Publication persisted after reload. The original controlled tests and the 2026-08-05 retained-submission recovery each produced one successful internal-notification action; the owner confirmed receipt of the earlier Preview-triggered message at approximately 1:20 PM EDT. Application fail-closed/recovery behavior is now hosted-verified for one synthetic case. Notification-action failure recovery, conditional-backup operation, branded-domain authentication, and Production end-to-end operation remain unverified.
- **Confirmed:** Create a GoHighLevel private integration and store its token only as a secure server-side Vercel environment secret. Use free Upstash Redis for durable duplicate/idempotency protection. Approved on 2026-08-03 under D-024 and D-025.
- **Proposed:** Let customers select schedule availability directly.
- **Proposed:** Collect deposits.
- **Confirmed:** Record basic lead-source and campaign attribution for the lead-generation beta.
- **Proposed:** Track detailed conversion events beyond the approved beta attribution.
- **TBD:** Exact booking flow, availability rules, crew-capacity model, confirmation behavior, rescheduling, cancellation, and exception handling.
- **Verified external fact — 2026-08-05:** Application commit `beb6781` passed GitHub `Verify` and reached Vercel `Ready`. A protected Preview failed closed, retained one synthetic submission, and then recovered that same submission exactly once after delivery was enabled, creating one Contact, one Opportunity, and one successful internal-notification action. Preview was restored to disabled and the disabled verification created no duplicate. A hosted limiter check capped the counter at five and returned `429` for the next valid request.
- **TBD:** Production notification acceptance, notification-action failure handling, hosted concurrency, branded-domain authentication, payment-processor configuration, post-beta modules, Production ownership not already assigned, customer-facing sender identity, and release phasing.
- **TBD:** Any external payment processor, analytics tool, messaging service, scheduling provider, or other integration required beyond the confirmed GoHighLevel platform decision.

## End-state release phasing

- **Confirmed:** The end state requires a professional standalone website, quote requests, AI lead qualification, working proposals and bookings, collectible payments, measurable marketing-driven traffic/leads, and operations capable of completing the first PaintSwitch projects, approved on 2026-07-18.
- **Confirmed:** A lead-generation beta precedes instant quote and self-service checkout. It includes quote-request capture, the product outcome that each accepted lead reaches GoHighLevel once, owner notification, on-page confirmation for every accepted lead, and basic source attribution. Automated customer SMS is off for the beta. Implementation evidence must be described accurately as at-most-one automatic Opportunity creation plus durable reconciliation; it is not a strict cross-provider exactly-once guarantee.
- **Confirmed:** Instant pricing, checkout, payments, customer-selected scheduling, the chatbot, photo-review automation, and automated proposals are deferred from the beta rather than rejected.
- **TBD:** The order, dependencies, success gates, and public-release dates after the lead-generation beta.
- **TBD:** Which intended GoHighLevel functions beyond beta CRM/pipeline delivery must be enabled and verified in each later release.

## Lead-generation beta implementation details

- **Confirmed:** Target the lead-generation beta for Saturday, 2026-08-08. This is a delivery goal and does not waive any confirmed safety, legal, privacy, consent, security, messaging, or acceptance requirement.
- **Confirmed:** Required owner participation must be limited to at most one hour per day during beta delivery.
- **Confirmed:** Beta lead fields are name, phone, email, project ZIP or address, service type, project description, and contact preference.
- **Confirmed:** Accept leads throughout the DMV for manual service-availability review, prioritize Virginia for public beta operation, and disclose that availability and pricing are confirmed after review. Exact cities, counties, ZIP codes, and service boundaries remain **TBD**.
- **Confirmed:** The PaintSwitch owner is the primary owner of every beta lead. Operate response from 8:00 AM through 8:00 PM Eastern daily, attempt human contact within five minutes during those hours, and contact after-hours leads by 9:00 AM Eastern the next day. Alex is conditional backup only after `alex@paintswitch.com` is created and receipt-tested.
- **Confirmed:** Route each accepted lead to the verified GoHighLevel CRM pipeline once as the product outcome, notify the owner at `hello@paintswitch.com`, show an immediate on-page confirmation, and retain basic source/campaign attribution. The current local implementation provides at-most-one automatic Opportunity create plus durable reconciliation rather than a strict cross-provider exactly-once guarantee. Automated customer SMS is off for the beta, and selecting `Text` is only a contact preference.
- **Confirmed:** Keep Vercel as the beta website host; custom-domain work does not block beta.
- **Confirmed:** Use `paintswitch.com` as the primary customer-facing domain and permanently redirect `www.paintswitch.com` to it.
- **Verified external fact — 2026-08-03:** Vercel shows the apex, `www`, and production domain with Valid Configuration; public checks returned apex `200` and `www` `308` to the apex.
- **Verified external fact — 2026-08-03:** A signed-in Paint Switch GoHighLevel sub-account, the dedicated `PaintSwitch Lead Intake` pipeline with one `New Quote Request` stage, all seven approved custom fields, the private integration, and the server-side identifier configuration exist. Existing sample/demo data remained untouched.
- **Confirmed:** Automated customer SMS is off for the beta, and Voice AI remains intentionally disabled until separately ready.
- **Confirmed:** Use a custom branded PaintSwitch quote-request form connected to GoHighLevel through a secure server-side integration. Do not expose GoHighLevel credentials or secrets to customer-delivered code.
- **Confirmed:** Create the GoHighLevel private integration, keep its token in a server-side Vercel secret, and use free Upstash Redis for durable submission idempotency.
- **Verified implementation fact — 2026-08-05:** Application commit `beb6781` passed GitHub `Verify` and reached Vercel `Ready`. In a protected Preview, the form failed closed, retained one synthetic submission, and recovered the same submission exactly once after delivery was enabled. That recovery created one Contact, one Opportunity, and one successful owner-notification action. Preview delivery was restored to disabled and the disabled verification created no duplicate. Hosted concurrency, notification-action failure recovery, Production promotion, and Production end-to-end acceptance remain incomplete.
- **Confirmed:** Remove placeholder reviews for the beta and do not restore reviews until verified, permissioned reviews exist.
- **Verified implementation fact — 2026-08-05:** The D-031 sender evidence and D-032 published state remain verified. The protected Preview now also verifies one retained-submission recovery with one Contact, one Opportunity, one successful internal-notification action, safe disabled restoration with no duplicate, and a hosted counter capped at five followed by `429`. Customer-facing Privacy and Terms pages, approved pre-submit disclosure, and the beta operations runbook are implemented locally. Pending work includes hosted concurrency, notification-action failure recovery, actual 30-day expiration, Production promotion, privacy/retention rehearsal, professional/legal review, human-response rehearsal, conditional-backup operation, and final operating acceptance.
- **Verified production contradiction — 2026-08-03:** The live prior `main` build still shows standalone Drywall Repair, three explicitly labeled placeholder testimonials, nonfunctional Privacy/Terms links, estimate/contact CTAs without a working form, and universal-consultation copy. The corrected candidate is available only in the Vercel Preview; live copy is not owner approval.
- **Confirmed:** Use Vercel Pro for commercial beta hosting. The owner confirmed activation on 2026-08-04, and a signed-in Vercel dashboard check verified the `Paint Switch` team labeled `Pro` with the `paintswitch-web` project inside it. Billing administration, Production promotion, rollback, monitoring, and final deployment QA remain open.
- **Confirmed:** The destination is `hello@paintswitch.com`, the internal sender is `PaintSwitch <hello@paintswitch.com>`, and the exact workflow is published. Corrected-sender receipt/no-Jen evidence, owner-visible receipt of the earlier protected-Preview notification, and one additional successful recovered notification action are verified. Notification-action failure recovery, branded-domain authentication, conditional-backup operation, and Production acceptance remain open.
- **Confirmed:** Alex is the conditional backup only after `alex@paintswitch.com` is created and a controlled receipt test passes. GoDaddy Products and email administration externally verify that both `alex@paintswitch.com` and `hello@paintswitch.com` mailbox accounts exist with administrative visibility. Alex receipt, access, controlled-notification receipt, exact routing behavior, GoHighLevel routing, and a response rehearsal remain incomplete.
- **Confirmed:** Automated customer SMS is off for the beta. `Text` contact preference is not automated-SMS consent. Before any later activation, use a separate optional opt-in that is unchecked by default; declining it must not block form submission. Exact later-release wording, opt-out behavior, sender/number, workflow conditions, failure handling, retention, A2P, and legal approval remain **TBD**. Provider or carrier validation is not legal approval.
- **Confirmed:** PaintSwitch is the owner-selected Virginia DBA of Jen Contracting for internal/legal structure, while D-001 prohibits any customer-facing Jen connection. This does not verify the DBA filing, formal registrant name/suffix, registration number, tax/EIN, registered address, licensing, authorized representative, required disclosure, or later A2P acceptance. If a legally required disclosure conflicts with D-001, obtain owner/legal direction before publishing.
- **Confirmed:** Apply a 30-day TTL to Upstash technical idempotency/delivery-state records. Current source and local tests apply the TTL to every guarded technical-state write. Protected Preview evidence includes a completed state with a near-30-day TTL/no residual lock and one retained-submission recovery that completed exactly once. This remains separate from the confirmed 12-month rule for unconverted CRM leads. Hosted concurrency and actual expiration remain unverified.
- **Confirmed:** Enforce no more than five beta lead submissions per client IP address per ten minutes. Current source uses an atomic fixed window that begins with the first valid request, counts only valid submissions, and does not increment or extend the window for blocked attempts. Client-IP buckets use HMAC pseudonyms and separate production, preview, and local namespaces; token rotation resets active pseudonymous buckets. Deployed source trusts only `x-vercel-forwarded-for`, localhost uses a shared bucket, and unavailable limiting fails closed. Local tests pass. On 2026-08-05, the hosted counter capped at five and the next valid request received `429`, directly verifying the configured Preview threshold.
- **Confirmed:** Website lead data may be used only for quote review/response, CRM, attribution, security, and duplicate prevention, and may not be sold or shared/used for targeted advertising. Retain unconverted CRM leads for 12 months after the last interaction, then delete or anonymize them unless an active project, verified security matter, dispute, or legal need applies. Accept reasonably verified access, correction, and deletion requests through `hello@paintswitch.com`.
- **Confirmed:** Quote submission authorizes project-specific contact only; it is not unrelated-marketing or automated-SMS consent. The website and quote service are for people age 18 or older. Beta Terms use Maryland governing law and include neither mandatory arbitration nor a class-action waiver.
- **TBD:** Professionally/legally verify and promote the locally implemented Privacy and Terms wording; define and rehearse the reasonable-verification procedure, deletion/anonymization workflow, exception evidence, and audit process; decide retention and deletion for active/completed projects, notification email, provider logs, analytics records, and other record classes outside unconverted CRM leads; and review the interaction among Maryland governing law, Virginia focus/DBA, and mandatory local protections.
- **Confirmed:** Replace the Jen Contracting-domain business email with `hello@paintswitch.com` before customer-facing PaintSwitch communication.
- **Historical/Needs verification:** The initial 2026-08-02 GoDaddy/Microsoft 365 creation attempt for standalone `hello@paintswitch.com` displayed “Sorry, we can't create this user.” GoDaddy administration now externally verifies that both PaintSwitch mailbox accounts exist, so the earlier cause and recovery path need investigation only if the problem recurs.
- **TBD:** Complete branded-domain authentication, credentials/recovery, notification-action failure handling, and Production end-to-end GoHighLevel workflow acceptance. The corrected controlled message satisfies no-Jen visible-sender evidence; protected Preview checks verify successful actions and one application fail-closed/recovery case. They do not prove notification-action failure recovery or Production operation.
- **TBD:** GoHighLevel Voice AI is available but is not approved for the beta. Whether to use AI phone intake, its release phase, human-first or AI-first routing, disclosure and consent, phone number, recording/transcription, intake script, operating hours, transfer rules, retention, cost, and fallback behavior remain unresolved.
- **Historical/Needs verification:** Payment setup and any external behavior not covered by the 2026-08-03 private-integration/configuration verification or the limited 2026-08-04 controlled Preview success-path evidence remain unverified. The configured token value remains confidential and must not enter documentation.
- **TBD:** Any anti-spam or abuse controls beyond D-030's confirmed five-submissions-per-client-IP-per-ten-minutes beta rate limit, including whether additional controls are needed. The approved rate limit itself is implementation work, not an open decision.
- **TBD:** Detailed source/event definitions, analytics provider, attribution window, and consent behavior beyond minimum beta attribution.

## Visual identity

- **Confirmed:** The owner preferred the first HTML example's logo direction—a paint roller with paint behind it—on 2026-07-18.
- **TBD:** Final logo artwork, file, variants, colors, typography, usage rules, and production approval evidence.

## Service and operating policy

- **Confirmed:** Drywall Repair is not a standalone marketed service in the lead-generation beta. Remove the current service card and do not route it as a beta service.
- **TBD:** Whether Drywall Repair becomes a standalone marketed service in a later release or remains supporting scope only.
- **TBD:** Paint manufacturers, product grades, finishes, color-selection rules, and material allowances.
- **TBD:** Employee-versus-subcontractor crew assignment rules and what, if anything, is disclosed to customers.
- **TBD:** Preparation standards, cleanup standards, quality-control steps, warranties, change orders, damage handling, and customer support policies.
- **TBD:** Required Virginia and other jurisdiction-specific licensing, insurance, subcontractor compliance, legal, privacy-implementation, and consumer-protection review. MHIC work is no longer a beta focus, but that priority decision is not a legal exemption.

## Product success and governance

- **Confirmed:** Target the lead-generation beta for Saturday, 2026-08-08; the target remains conditional on all applicable launch gates.
- **TBD:** Actual public-release timing if a required gate other than pending A2P/SMS activation is not ready by the target date; later release milestones also remain TBD.
- **Confirmed:** Beta response operations run 8:00 AM–8:00 PM Eastern daily, with a first human attempt within five minutes during those hours and by 9:00 AM Eastern the next day after hours.
- **TBD:** Quote completion, conversion, booking, revenue, margin, quality, customer-satisfaction, and response-performance targets beyond the confirmed beta response rule.
- **TBD:** Documentation owner, product owner, pricing approver, operational approver, and recurring review cadence.
- **Confirmed:** Launch stand-ups should last 10 minutes, not 30 minutes, approved on 2026-07-18.
- **Confirmed:** Owner-required beta work must not exceed one hour on any day, approved on 2026-08-02.
- **TBD:** Stand-up frequency, participants, facilitator, schedule, agenda, and escalation format.
- **Historical/Needs verification:** The owner accepted the documented low-reachability residual dependency risk for this beta on 2026-08-03 while requiring monitoring for a compatible upstream Next.js patch. D-047 supersedes that risk as an active launch issue.
- **Confirmed:** Under D-047, exact stable Next.js and `eslint-config-next` `16.3.0` are installed, the full local regression passes, and the production audit reports zero vulnerabilities. Continue to prohibit `npm audit fix --force`, Preview/Canary substitutions, incompatible dependency overrides, or automatic downgrades.
