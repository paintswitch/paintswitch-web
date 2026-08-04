# PaintSwitch master context

Last updated: 2026-08-04

This document is the governing summary of PaintSwitch's approved business and product direction. Current website copy is implementation evidence only and must not be treated as proof of approval.

## Brand

- **Confirmed:** PaintSwitch is a standalone consumer brand completely separate from Jen Contracting.
- **Confirmed:** Never use Jen Contracting branding, “powered by Jen,” a shared identity, or any customer-facing connection between PaintSwitch and Jen Contracting.
- **Confirmed:** PaintSwitch is positioned as mid-market, convenience-first, technology-first, and technology-driven mainstream.
- **Confirmed:** PaintSwitch does not inherit luxury positioning from Jen Contracting.

## Visual direction

- **Confirmed:** On 2026-07-18, the owner preferred the first HTML example's logo direction: a paint roller with paint behind it.
- **TBD:** Final production logo artwork, file, variants, typography, colors, responsive usage, and approval evidence. The visual preference does not prove that a specific current or future logo asset is final.

## Launch market

- **Confirmed:** The launch market is the DMV: Washington, DC, Maryland, and Virginia. Stated on 2026-07-11.
- **TBD:** Exact cities, counties, ZIP codes, travel zones, and service boundaries.

## Operating model

- **Confirmed:** PaintSwitch supplies the paint.
- **Confirmed:** Labor uses a hybrid model of employee and subcontractor crews.
- **TBD:** Paint brands, product lines, finish options, procurement rules, crew-assignment rules, warranty terms, and operating controls for the hybrid labor model.

## Launch operating platform

- **Confirmed:** On 2026-07-18, the owner selected GoHighLevel as PaintSwitch's launch backbone or operating engine.
- **Confirmed:** Intended GoHighLevel functions include CRM, SMS, email, AI chat, automations, calendar booking, pipelines, reviews, and payment workflows.
- **Confirmed:** On 2026-08-02, the owner approved a dedicated `PaintSwitch Lead Intake` pipeline with one `New Quote Request` stage and field names `Service Type`, `Project Description`, and `Contact Preference`.
- **Confirmed:** `Service Type` is an Opportunity single-select dropdown with Interior, Exterior, Cabinet, and Commercial; `Project Description` is an Opportunity multi-line field; and `Contact Preference` is a Contact single-select dropdown with Call, Text, and Email.
- **Confirmed:** Use `hello@paintswitch.com` as PaintSwitch's primary domain mailbox. On 2026-08-03, owner-supplied photographic evidence confirmed receipt at that mailbox of the separately sent test email with subject `New PaintSwitch website lead`. This proves the mailbox could receive that test; complete inbound/outbound and sender acceptance remain unconfirmed.
- **Confirmed:** Send owner lead notifications to `hello@paintswitch.com`. The owner resolved the temporary `hell@paintswitch.com` typo conflict on 2026-08-03. This confirms the destination, not workflow publication or operation.
- **Confirmed:** Use From name `PaintSwitch` and From email `hello@paintswitch.com` for the internal owner lead-notification email. Approved on 2026-08-03 under D-031. This confirms the internal sender choice, not authentication, deliverability, the actual inbox sender line, customer-facing sender scope, or workflow operation.
- **Confirmed:** Existing GoHighLevel sample/demo data must remain untouched. SMS and Voice AI must remain disabled until each is separately approved and operationally ready.
- **Verified implementation fact — 2026-08-03:** The approved GoHighLevel private integration, required beta permissions, Sensitive Vercel token for Production and Preview, location/pipeline/stage identifiers, and all seven approved custom-field identifiers were configured. The four D-026 Opportunity fields were created. Pushed commit `efb96b9` contains the secure GoHighLevel mapping and delivery client and is available in a fail-closed Vercel Preview.
- **Verified external evidence — 2026-08-04:** Owner-supplied screenshot evidence confirms that the corrected controlled test reached `hello@paintswitch.com`, displayed visible sender name `PaintSwitch`, used routing address `hello+paintswitch.com@mail.msgsndrroute.com`, contained the approved subject/body, and showed no Jen identity. This satisfies AC-044's visible no-Jen sender evidence, not branded-domain authentication or workflow-trigger operation. The exact workflow was then published under D-032 and remained Saved with its publish switch checked after reload.
- **TBD:** Production staff ownership beyond the confirmed owner role, backup lead ownership, sender authentication/deliverability, customer-facing sender scope, payment-processor configuration, remaining enabled modules, and release phasing. Account credentials and configured identifiers are implementation facts, not additional owner-approved product policy.

The platform selection, account/sub-account, pipeline/stage, private integration, Vercel server-only configuration, seven custom-field destinations, and Upstash database/variables are verified. Mapping and delivery code is pushed and Preview-deployed. `LEAD_DELIVERY_ENABLED` is `false`; the separate email test was received, but no website-triggered provider delivery or workflow owner notification has passed; and messaging, AI, and payment paths are not live.

## Marketed services

- **Confirmed:** PaintSwitch markets interior painting, exterior painting, cabinet painting, and commercial painting.
- **Confirmed:** Drywall Repair is not marketed as a standalone service in the lead-generation beta. The current website service card must be removed for beta.
- **TBD:** Whether Drywall Repair becomes a standalone marketed service after beta or remains supporting scope only.

## Approved sales model

- **Confirmed:** Residential interior painting is the operational V1 for instant firm pricing and checkout. The rule is confirmed; its exact earlier historical source date is uncertain and it was reaffirmed on 2026-08-01.
- **Confirmed:** Instant firm pricing and checkout apply only to qualifying standard residential interior painting.
- **Confirmed:** Complex interiors require photo review.
- **Confirmed:** Exterior, cabinet, and commercial painting may be marketed at launch but require custom consultation rather than firm instant checkout.
- **Confirmed:** The product goal is to provide quick quotes and close qualifying sales online before anyone needs to call the customer. Stated on 2026-07-11.
- **Confirmed:** Instant pricing and online booking are part of the approved launch model.
- **TBD:** The complete eligibility definition for a “qualifying standard residential interior” project.
- **TBD:** The exact workflow by which online booking satisfies scheduling needs.

## Approved pricing structure

- **Confirmed:** Pricing is calculated room by room.
- **Confirmed:** Room square footage equals length multiplied by width.
- **Confirmed:** Approved room-size tiers are:

  | Tier | Room square footage | Handling |
  | --- | ---: | --- |
  | Small | 120 sq ft or less | Eligible for standard-interior evaluation. |
  | Medium | 121–200 sq ft | Eligible for standard-interior evaluation. |
  | Large | 201–300 sq ft | Eligible for standard-interior evaluation. |
  | Oversized | More than 300 sq ft | Dimensions and photo review required. |

- **Confirmed:** Quote inputs include room type and size, walls, ceilings, baseboards/trim/crown, doors, closets, ceiling height, repairs, color changes, and occupied/furniture level.
- **Confirmed:** Apply one flat $125 fuel/materials adjustment to every project.
- **Confirmed:** Exact ceiling-height tiers and surcharges are not approved.
- **TBD:** Exact base prices, calculation amounts other than the confirmed flat $125 adjustment, project minimum, deposit percentage, packages, included-coat rules, repair allowances, ceiling adjustments, travel-zone adjustments, and cancellation policies.

The flat $125 fuel/materials adjustment is the only numeric pricing value currently confirmed in canonical documentation. No other numeric price or unapproved pricing policy may be treated as live customer pricing. See `OPEN_QUESTIONS.md`.

## Customer-facing chatbot

- **Confirmed:** PaintSwitch includes a customer-facing chatbot. Confirmed on 2026-07-11.
- **TBD:** Chatbot provider, model, architecture, and exact customer interface.
- **Proposed:** Use the chatbot to guide the quote flow, explain routing, collect approved inputs, and preserve context for human handoff.

The chatbot's existence is approved; its technical implementation and exact responsibilities are not approved beyond later confirmed requirements.

## Other product capabilities under consideration

- **Proposed:** Photo uploads during quoting. Complex interiors still require photo review; the intake mechanism is **TBD** until approved.
- **Proposed:** Customer scheduling mechanics, deposits, automated follow-up, detailed conversion behavior beyond approved beta source attribution, and human handoff. GoHighLevel and CRM integration are Confirmed, but their exact configuration and workflows remain TBD.
- **Proposed:** Homepage calls to action such as “Get My Price” and “No phone call required.”

These items may be explored or specified, but they may not be implemented as approved scope without explicit user approval.

## Confirmed end-state outcomes

The owner confirmed the following outcomes on 2026-07-18:

- **Confirmed:** A professional standalone PaintSwitch website must be live.
- **Confirmed:** Customers must be able to request quotes.
- **Confirmed:** An AI assistant must qualify leads.
- **Confirmed:** Proposals and bookings must work.
- **Confirmed:** Payments must be collectible.
- **Confirmed:** Marketing must drive traffic and measurable leads.
- **Confirmed:** Operations must be capable of completing the first PaintSwitch projects.

- **Confirmed:** A lead-generation beta precedes instant pricing and self-service checkout under decision D-018 dated 2026-08-01.
- **TBD:** The order, dependencies, and release assignment of the remaining end-state outcomes after the lead-generation beta.

## Approved lead-generation beta

- **Confirmed:** The lead-generation beta is the first release milestone and may launch before instant pricing, checkout, payments, online scheduling, the customer-facing chatbot, photo-review automation, or automated proposals.
- **Confirmed:** Target the beta for launch on Saturday, 2026-08-08. This is a delivery goal, not permission to bypass any confirmed safety, legal, privacy, consent, security, messaging, or acceptance requirement.
- **Confirmed:** The beta markets interior, exterior, cabinet, and commercial painting. Drywall Repair is not a standalone marketed beta service.
- **Confirmed:** The primary customer action is “Request a Quote.”
- **Confirmed:** Use a custom branded PaintSwitch quote-request form and connect it securely to GoHighLevel through a server-side integration. Customer-delivered code must not expose GoHighLevel credentials or secrets.
- **Confirmed:** The beta accepts quote requests throughout the DMV and manually confirms service availability; this does not establish final cities, counties, ZIP codes, travel zones, or permanent service boundaries.
- **Confirmed:** Lead intake collects name, phone, email, project ZIP or address, service type, project description, and contact preference.
- **Confirmed:** The PaintSwitch owner is the primary owner of all beta leads.
- **Confirmed:** Each accepted submission goes to a verified GoHighLevel CRM pipeline, notifies the owner, presents an immediate on-page confirmation, and records basic source/campaign attribution. Automatic non-marketing SMS is sent only to customers who explicitly use the separate optional, unchecked SMS opt-in and only after SMS is legally and operationally enabled.
- **Confirmed:** Human outreach should occur immediately when possible.
- **Confirmed:** Vercel remains the beta website host, and custom-domain work does not block beta.
- **Confirmed:** `paintswitch.com` is the primary customer-facing domain. `www.paintswitch.com` permanently redirects to `paintswitch.com`. Approved on 2026-08-02 under decision D-020.
- **Confirmed:** Beta messaging must disclose that service availability and pricing are confirmed after review. It must not display an instant price, collect a deposit or payment, enable checkout, or promise customer-selected scheduling.
- **Confirmed:** The beta CRM foundation uses `PaintSwitch Lead Intake` with one `New Quote Request` stage. Approved existing field names are `Service Type`, `Project Description`, and `Contact Preference`; add Opportunity fields named `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name`. Sample/demo data remains untouched.
- **Confirmed:** Create a GoHighLevel private integration and store its token only as a secure server-side Vercel environment secret. Use free Upstash Redis for durable server-side duplicate/idempotency protection. Approved on 2026-08-03 under D-024 and D-025.
- **Confirmed:** Apply a 30-day TTL to Upstash technical idempotency/delivery-state records and enforce a maximum of five beta lead submissions per client IP address per ten minutes. Approved on 2026-08-03 under D-030. This does not approve broader CRM/business/customer-data retention or deletion rules.
- **Verified external configuration — 2026-08-04:** `PaintSwitch Website Lead - Owner Notification` uses Opportunity Created filtered to `PaintSwitch Lead Intake`, recipient `hello@paintswitch.com`, From name `PaintSwitch`, From email `hello@paintswitch.com`, and the approved subject/body. After explicit owner approval, its publish switch was enabled, the global workflow was saved, and reload showed it still Saved and published. The corrected controlled email was received with no visible Jen identity. No actual Opportunity Created event, failure path, or website-to-CRM-to-notification path was tested.
- **Confirmed:** SMS and Voice AI remain disabled during foundation setup. Voice AI remains outside the beta. The beta may launch with SMS disabled if A2P registration is pending.
- **Confirmed:** The three approved HighLevel fields use the object, type, and options defined in D-022. `hello@paintswitch.com` is the approved PaintSwitch mailbox address.
- **Confirmed:** `hello@paintswitch.com` is the owner-notification destination, and the internal sender is `PaintSwitch <hello@paintswitch.com>`, under D-029 and D-031. The corrected received test satisfies AC-044's no-Jen visible-sender evidence; branded-domain authentication remains unverified.
- **Confirmed:** Publish the exact `PaintSwitch Website Lead - Owner Notification` workflow under D-032 dated 2026-08-04. Publication is externally verified, but trigger operation, failure handling, staff ownership, authentication/deliverability, and end-to-end notification remain unverified.
- **Confirmed:** Remove placeholder reviews for the beta. Do not publish reviews again until each review and its use are verified and permissioned.
- **Confirmed:** Every accepted submission receives on-page confirmation. SMS consent is a separate optional control that is unchecked by default; `Text` contact preference is not consent. Only explicit opt-ins may receive the automatic non-marketing SMS, and declining SMS must not block submission. If A2P remains pending, the beta may launch with SMS disabled. Approved on 2026-08-03 under D-027; this supersedes the earlier every-lead-SMS rule.
- **Confirmed:** Accept the documented low-reachability residual PostCSS/Sharp dependency risk for this beta while monitoring for a compatible upstream Next.js patch. Reassess if the reachable architecture changes; never apply a force fix, incompatible override, or automatic downgrade. Approved on 2026-08-03 under D-028.
- **Verified implementation fact — 2026-08-04:** The approved integration, mappings, durable safeguards, published owner-notification workflow, and corrected received-message evidence exist as described under D-024 through D-032. Fifty-one automated tests, lint, TypeScript type checking, and the production build pass locally. The earlier candidate remains only in Preview, the safeguards are not hosted-verified, and `LEAD_DELIVERY_ENABLED` is `false`. Workflow-trigger operation, failure handling, real-provider delivery, production promotion, and production end-to-end evidence remain incomplete.
- **Verified production contradiction — 2026-08-03:** The live prior `main` build still shows standalone Drywall Repair, three explicitly labeled placeholder testimonials, nonfunctional Privacy/Terms links, estimate/contact actions without a working form, and universal-consultation copy. The corrected candidate is available only in the Vercel Preview, and live copy is not approval evidence.
- **TBD:** Verify branded-domain authentication, actual Opportunity Created trigger operation, failure handling, and the website-to-CRM-to-notification path; name a backup lead owner; set a measurable human-response target and operating hours; approve exact SMS and consent wording and opt-out behavior; complete customer-facing sender-identity/A2P and legal review; define broader CRM/business/customer-data retention and deletion policy; decide any abuse controls beyond D-030's confirmed beta rate limit; define detailed events; approve a commercially compliant Vercel plan; and assign later-release sequencing. Vercel currently shows Hobby, whose current guidance restricts commercial use; no plan purchase or change is approved. Provider or carrier approval is not legal approval.

## Launch governance

- **Confirmed:** Launch stand-ups should be 10 minutes, not 30 minutes. Approved on 2026-07-18.
- **Confirmed:** Required owner participation for the beta delivery effort must be limited to at most one hour per day. Approved on 2026-08-02.
- **TBD:** Stand-up frequency, participants, facilitator, scheduling, and decision/escalation format.

## Governing product principles

- **Confirmed:** The standard-interior path should minimize customer effort and avoid requiring a call before a qualifying sale closes.
- **Confirmed:** Unsupported project types must leave the instant firm-pricing path.
- **Confirmed:** Price construction is room-based, not a single undifferentiated whole-project amount.
- **Confirmed:** Every project price includes one flat $125 fuel/materials adjustment.
- **Confirmed:** PaintSwitch owns the customer-facing brand independently from Jen Contracting.
- **Confirmed:** The product includes a customer-facing chatbot.
- **Confirmed:** GoHighLevel is the selected launch operating engine and CRM integration is part of its intended function set.
- **Proposed:** Use guided automation to reduce uncertainty while preserving a clear human-review path for exceptions.

## Success measures

- **Confirmed:** A central product outcome is closing qualifying standard-interior sales online before a call is necessary.
- **TBD:** Conversion targets, quote-completion targets, booking targets, response-time targets, revenue goals, margin thresholds, customer-satisfaction measures, and operational-quality measures.
