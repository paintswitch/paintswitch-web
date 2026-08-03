# PaintSwitch open questions

Last updated: 2026-08-03

This document records unresolved choices and working assumptions. An item is approved only when it is explicitly labeled **Confirmed** and supported by the decision log. Do not present **Proposed** or **TBD** pricing as live customer pricing.

## Launch geography

- **Confirmed:** PaintSwitch launches in the DMV, stated on 2026-07-11.
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
- **Confirmed:** Send owner lead notifications to `hello@paintswitch.com`. The owner clarified the exact address on 2026-08-03, resolving the temporary `hell@paintswitch.com` typo conflict. A draft workflow is saved, but the mailbox is unprovisioned and the workflow is unpublished and untested as described below.
- **Confirmed:** Create a GoHighLevel private integration and store its token only as a secure server-side Vercel environment secret. Use free Upstash Redis for durable duplicate/idempotency protection. Approved on 2026-08-03 under D-024 and D-025.
- **Proposed:** Let customers select schedule availability directly.
- **Proposed:** Collect deposits.
- **Confirmed:** Record basic lead-source and campaign attribution for the lead-generation beta.
- **Proposed:** Track detailed conversion events beyond the approved beta attribution.
- **TBD:** Exact booking flow, availability rules, crew-capacity model, confirmation behavior, rescheduling, cancellation, and exception handling.
- **Verified implementation fact — 2026-08-03:** The private integration, least-required beta permissions, Sensitive Vercel GHL configuration, location/pipeline/stage identifiers, seven custom-field identifiers, four additional Opportunity fields, native/source mappings, free Upstash database `paintswitch-lead-idempotency` in `iad1`, five Sensitive Upstash Production-and-Preview variables, and saved draft workflow `PaintSwitch Website Lead - Owner Notification` are configured. The draft triggers on Opportunity Created for `PaintSwitch Lead Intake` and contains an internal Email action to `hello@paintswitch.com`; it is unpublished and untested. Pushed commit `efb96b9` includes the REST clients, durable phases, reconciliation, and failure recovery and is available in a fail-closed Vercel Preview. Retention/TTL approval, enabled production delivery, mailbox readiness, operational owner notification, and real-provider end-to-end evidence remain pending.
- **TBD:** Notification-workflow publication/testing and failure handling, payment-processor configuration, post-beta enabled modules, production ownership not already assigned, customer-facing sender identity/authentication, and release phasing.
- **TBD:** Any external payment processor, analytics tool, messaging service, scheduling provider, or other integration required beyond the confirmed GoHighLevel platform decision.

## End-state release phasing

- **Confirmed:** The end state requires a professional standalone website, quote requests, AI lead qualification, working proposals and bookings, collectible payments, measurable marketing-driven traffic/leads, and operations capable of completing the first PaintSwitch projects, approved on 2026-07-18.
- **Confirmed:** A lead-generation beta precedes instant quote and self-service checkout. It includes quote-request capture, the product outcome that each accepted lead reaches GoHighLevel once, owner notification, on-page confirmation for every accepted lead, basic source attribution, and automatic SMS only for explicit optional opt-ins when SMS is enabled. Implementation evidence must be described accurately as at-most-one automatic Opportunity creation plus durable reconciliation; it is not a strict cross-provider exactly-once guarantee.
- **Confirmed:** Instant pricing, checkout, payments, customer-selected scheduling, the chatbot, photo-review automation, and automated proposals are deferred from the beta rather than rejected.
- **TBD:** The order, dependencies, success gates, and public-release dates after the lead-generation beta.
- **TBD:** Which intended GoHighLevel functions beyond beta CRM/pipeline delivery must be enabled and verified in each later release.

## Lead-generation beta implementation details

- **Confirmed:** Target the lead-generation beta for Saturday, 2026-08-08. This is a delivery goal and does not waive any confirmed safety, legal, privacy, consent, security, messaging, or acceptance requirement.
- **Confirmed:** Required owner participation must be limited to at most one hour per day during beta delivery.
- **Confirmed:** Beta lead fields are name, phone, email, project ZIP or address, service type, project description, and contact preference.
- **Confirmed:** Accept leads throughout the DMV for manual service-availability review and disclose that availability and pricing are confirmed after review.
- **Confirmed:** The PaintSwitch owner is the primary owner of every beta lead and should perform human outreach immediately when possible.
- **Confirmed:** Route each accepted lead to the verified GoHighLevel CRM pipeline once as the product outcome, notify the owner at `hello@paintswitch.com`, show an immediate on-page confirmation, and retain basic source/campaign attribution. The current local implementation provides at-most-one automatic Opportunity create plus durable reconciliation rather than a strict cross-provider exactly-once guarantee. Send automatic non-marketing SMS only to explicit opt-ins when SMS is legally and operationally enabled.
- **Confirmed:** Keep Vercel as the beta website host; custom-domain work does not block beta.
- **Confirmed:** Use `paintswitch.com` as the primary customer-facing domain and permanently redirect `www.paintswitch.com` to it.
- **Verified external fact — 2026-08-03:** Vercel shows the apex, `www`, and production domain with Valid Configuration; public checks returned apex `200` and `www` `308` to the apex.
- **Verified external fact — 2026-08-03:** A signed-in Paint Switch GoHighLevel sub-account, the dedicated `PaintSwitch Lead Intake` pipeline with one `New Quote Request` stage, all seven approved custom fields, the private integration, and the server-side identifier configuration exist. Existing sample/demo data remained untouched.
- **Confirmed:** SMS and Voice AI remain intentionally disabled until separately ready.
- **Confirmed:** Use a custom branded PaintSwitch quote-request form connected to GoHighLevel through a secure server-side integration. Do not expose GoHighLevel credentials or secrets to customer-delivered code.
- **Confirmed:** Create the GoHighLevel private integration, keep its token in a server-side Vercel secret, and use free Upstash Redis for durable submission idempotency.
- **Verified implementation fact — 2026-08-03:** The GHL and Upstash configuration, pushed implementation, Ready Preview, forty-one local tests, and saved draft owner-notification workflow exist. The draft is unpublished and no test email has been sent because `hello@paintswitch.com` is not provisioned. Retention/TTL approval, enabled production delivery, operational owner notification, production promotion, and real-provider acceptance evidence remain incomplete.
- **Confirmed:** Remove placeholder reviews for the beta and do not restore reviews until verified, permissioned reviews exist.
- **Verified implementation fact — 2026-08-03:** Native name/phone/email and approved Opportunity-field mappings, private-integration/token creation, Vercel GHL configuration, provisioned Upstash database/variables, durable state/locking, provider-failure reconciliation, explicit rejected-create recovery, sanitized submission-ID error reporting, and forty-one local tests exist. Vercel automatically deployed a Ready Preview, and a hosted valid submission failed closed while delivery was disabled. Pending work is retention/TTL approval, enabled delivery, notification, production promotion, production-safe provider testing, and final operating acceptance within D-024 through D-026.
- **Verified production contradiction — 2026-08-03:** The live prior `main` build still shows standalone Drywall Repair, three explicitly labeled placeholder testimonials, nonfunctional Privacy/Terms links, estimate/contact CTAs without a working form, and universal-consultation copy. The corrected candidate is available only in the Vercel Preview; live copy is not owner approval.
- **TBD:** Approve a commercially compliant Vercel plan before commercial lead generation. Vercel currently shows Hobby, whose current official guidance restricts that plan to personal, non-commercial use. No purchase or plan change is approved.
- **Confirmed:** The owner clarified on 2026-08-03 that the notification destination is `hello@paintswitch.com`; `hell@paintswitch.com` was a typo and must not be used. This resolves only the destination. The workflow draft is prepared, but mailbox provisioning/testing, workflow publication/testing, and failure handling remain open.
- **TBD:** Backup lead owner, measurable human-response target, and operating hours.
- **TBD:** Final SMS wording, consent and opt-out language, sender/number, workflow conditions, delivery-failure handling, retention, and legal approval.
- **TBD:** Verify the A2P sender's exact legal business name and structure, whether PaintSwitch is the legal entity or a registered DBA/trade name, tax/EIN and registration information, registered street address, and authorized representative's name, title, mobile number, and email. These facts must remain consistent across registration, website, policies, and GoHighLevel and must not be inferred from another brand.
- **Confirmed:** D-027 resolves LB-024: use a separate optional SMS opt-in that is unchecked by default; `Text` preference is not consent; every accepted lead receives on-page confirmation; only explicit opt-ins receive automatic non-marketing SMS when enabled; and an unchecked control never blocks form submission. Exact wording and legal approval remain TBD. Provider or carrier validation is not legal approval. Official guidance: [HighLevel custom web form consent requirements](https://help.gohighlevel.com/support/solutions/articles/155000007237) and [CTIA Messaging Principles and Best Practices](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf).
- **Confirmed:** External A2P registration or approval remains a schedule risk, but the beta may launch with SMS disabled while A2P is pending. This does not waive any other applicable launch gate.
- **TBD:** Final consent language, privacy/terms text, retention/deletion rules, and legal approval for the overall lead flow.
- **Confirmed:** Replace the Jen Contracting-domain business email with `hello@paintswitch.com` before customer-facing PaintSwitch communication.
- **TBD:** The owner accepted the Microsoft Customer Agreement on 2026-08-02 and the GoDaddy Email & Office form was prepared for `hello@paintswitch.com` as a standalone organization using `Do not share`. After private password entry, the owner reported that GoDaddy displayed “Sorry, we can't create this user” and chose to pause. Diagnose the account entitlement/domain association or Microsoft 365 organization issue before retrying. Provisioning, credentials/recovery verification, sender authentication, GoHighLevel configuration, and inbound/outbound testing remain incomplete.
- **TBD:** GoHighLevel Voice AI is available but is not approved for the beta. Whether to use AI phone intake, its release phase, human-first or AI-first routing, disclosure and consent, phone number, recording/transcription, intake script, operating hours, transfer rules, retention, cost, and fallback behavior remain unresolved.
- **Historical/Needs verification:** Payment setup and any external behavior not covered by the 2026-08-03 private-integration, Vercel-secret, identifier, and field verification remain unverified. The configured token value remains confidential and must not enter documentation.
- **TBD:** Anti-spam and abuse controls.
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
- **TBD:** Required licensing, insurance, subcontractor compliance, privacy, legal, and consumer-protection review.

## Product success and governance

- **Confirmed:** Target the lead-generation beta for Saturday, 2026-08-08; the target remains conditional on all applicable launch gates.
- **TBD:** Actual public-release timing if a required gate other than pending A2P/SMS activation is not ready by the target date; later release milestones also remain TBD.
- **TBD:** Quote completion, conversion, booking, revenue, margin, response-time, quality, and customer-satisfaction targets.
- **TBD:** Documentation owner, product owner, pricing approver, operational approver, and recurring review cadence.
- **Confirmed:** Launch stand-ups should last 10 minutes, not 30 minutes, approved on 2026-07-18.
- **Confirmed:** Owner-required beta work must not exceed one hour on any day, approved on 2026-08-02.
- **TBD:** Stand-up frequency, participants, facilitator, schedule, agenda, and escalation format.
- **Confirmed:** The owner accepted the documented low-reachability residual dependency risk for this beta on 2026-08-03 while requiring monitoring for a compatible upstream Next.js patch. Reassess if architecture changes increase reachability. Do not use `npm audit fix --force`, an incompatible dependency override, or a Next.js downgrade automatically.
