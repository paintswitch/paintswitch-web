# PaintSwitch master context

Last updated: 2026-08-05

This document is the governing summary of PaintSwitch's approved business and product direction. Current website copy is implementation evidence only and must not be treated as proof of approval.

## Brand

- **Confirmed:** PaintSwitch is a standalone consumer brand completely separate from Jen Contracting.
- **Confirmed:** Never use Jen Contracting branding, “powered by Jen,” a shared identity, or any customer-facing connection between PaintSwitch and Jen Contracting.
- **Confirmed:** For internal/legal structure, the owner selected PaintSwitch as a Virginia DBA of Jen Contracting on 2026-08-04. This does not alter the two customer-facing rules above, prove that a DBA filing is complete, or authorize any public Jen connection. Exact filing, registrant, address, tax/EIN, licensing, authorized-representative, required-disclosure, and A2P facts remain **TBD** or unverified.
- **Confirmed:** PaintSwitch is positioned as mid-market, convenience-first, technology-first, and technology-driven mainstream.
- **Confirmed:** PaintSwitch does not inherit luxury positioning from Jen Contracting.

## Visual direction

- **Confirmed:** On 2026-07-18, the owner preferred the first HTML example's logo direction: a paint roller with paint behind it.
- **TBD:** Final production logo artwork, file, variants, typography, colors, responsive usage, and approval evidence. The visual preference does not prove that a specific current or future logo asset is final.

## Launch market

- **Confirmed:** The launch market is the DMV: Washington, DC, Maryland, and Virginia. Stated on 2026-07-11.
- **Confirmed:** Virginia is the public operating focus for the lead-generation beta. Approved on 2026-08-04. This prioritization does not create a Virginia-only service boundary or supersede the confirmed DMV market.
- **Confirmed:** Stop treating MHIC-specific work as a beta focus. Approved on 2026-08-04. This is a project-priority decision, not a legal exemption or waiver of jurisdiction-specific obligations.
- **TBD:** Exact cities, counties, ZIP codes, travel zones, and service boundaries.

## Operating model

- **Confirmed:** PaintSwitch supplies the paint.
- **Confirmed:** Labor uses a hybrid model of employee and subcontractor crews.
- **TBD:** Paint brands, product lines, finish options, procurement rules, crew-assignment rules, warranty terms, and operating controls for the hybrid labor model.

## Launch operating platform

- **Confirmed:** On 2026-07-18, the owner selected GoHighLevel as PaintSwitch's launch backbone or operating engine.
- **Confirmed:** Intended GoHighLevel functions include CRM, SMS, email, AI chat, automations, calendar booking, pipelines, reviews, and payment workflows.
- **Confirmed:** On 2026-08-02, the owner approved a dedicated `PaintSwitch Lead Intake` pipeline with one `New Quote Request` stage and field names `Service Type`, `Project Description`, and `Contact Preference`.
- **Proposed:** Add a second internal pipeline stage named `Contact Attempted` to support backup/escalation handling. The current Confirmed pipeline still has exactly one `New Quote Request` stage; do not add the proposed stage without explicit owner approval.
- **Confirmed:** `Service Type` is an Opportunity single-select dropdown with Interior, Exterior, Cabinet, and Commercial; `Project Description` is an Opportunity multi-line field; and `Contact Preference` is a Contact single-select dropdown with Call, Text, and Email.
- **Confirmed:** Use `hello@paintswitch.com` as PaintSwitch's primary domain mailbox. On 2026-08-03, owner-supplied photographic evidence confirmed receipt at that mailbox of the separately sent test email with subject `New PaintSwitch website lead`. This proves the mailbox could receive that test; complete inbound/outbound and sender acceptance remain unconfirmed.
- **Confirmed:** Send owner lead notifications to `hello@paintswitch.com`. The owner resolved the temporary `hell@paintswitch.com` typo conflict on 2026-08-03. This confirms the destination, not workflow publication or operation.
- **Confirmed:** Use From name `PaintSwitch` and From email `hello@paintswitch.com` for the internal owner lead-notification email. Approved on 2026-08-03 under D-031. This confirms the internal sender choice, not authentication, deliverability, the actual inbox sender line, customer-facing sender scope, or workflow operation.
- **Confirmed:** Existing GoHighLevel sample/demo data must remain untouched. Automated customer SMS is off for the beta; `Text` contact preference is not automated-SMS consent. Any later SMS activation and Voice AI each require separate approval and operational readiness.
- **Verified implementation fact — 2026-08-03:** The approved GoHighLevel private integration, required beta permissions, Sensitive Vercel token for Production and Preview, location/pipeline/stage identifiers, and all seven approved custom-field identifiers were configured. The four D-026 Opportunity fields were created. Pushed commit `efb96b9` contains the secure GoHighLevel mapping and delivery client and is available in a fail-closed Vercel Preview.
- **Verified external evidence — 2026-08-04:** Owner-supplied screenshot evidence confirms that the corrected controlled test reached `hello@paintswitch.com`, displayed visible sender name `PaintSwitch`, used routing address `hello+paintswitch.com@mail.msgsndrroute.com`, contained the approved subject/body, and showed no Jen identity. This satisfies AC-044's visible no-Jen sender evidence, not branded-domain authentication. The exact workflow was then published under D-032 and remained Saved with its publish switch checked after reload. A separate controlled manual Opportunity later produced exactly one completed workflow enrollment and a successful internal-notification action. The protected Preview website trigger did the same, and the owner confirmed that its internal message arrived at approximately 1:20 PM EDT.
- **Verified controlled Preview website-to-workflow-to-inbox success path — 2026-08-04:** Safeguarded commit `3bac3ba` was tested on a Vercel Preview protected by Require Log In / Standard Protection. `LEAD_DELIVERY_ENABLED` was temporarily set to `true` for Preview only while Production remained explicitly `false`. Enabled deployment `CrJA8ve4qzNHneVLwEtkr5N15gJu` (`paintswitch-pp6wvxmih-paint-switch.vercel.app`) was Ready at 1:18:57 PM EDT. One browser submission ran from 1:19:53 through 1:19:57 PM EDT, contained all seven `LB-005` fields, used `utm_source=controlled_preview_test` and `utm_campaign=website_e2e_2026_08_04`, and displayed the exact confirmation: “Your request was sent. A PaintSwitch team member will review the details and follow up.” Submission `a0c9e9cd-4e98-4f45-8c1f-16c9a31256ec` created Contact `w1tEl1ktbKestabbkBr3` and open Opportunity `11u1dIja7oMJXS4srkPu` in `PaintSwitch Lead Intake` / `New Quote Request`; all approved Contact and Opportunity mappings, including `Contact Preference = Email` and both campaign fields, were verified. Workflow execution `01KZ6WM16S7WTFPM40NTEA9381` enrolled once at 1:19:56 PM, reported the internal owner-notification action `Success` at 1:19:57 PM, and finished without any SMS or other customer action. The owner confirmed receipt of the resulting internal message at approximately 1:20 PM EDT. Upstash showed a `completed` technical state with the matching provider IDs, a 64-hex-character payload hash, completion phase, version, and updated timestamp, but none of the raw submitted name, email, phone, location, service, description, or preference fields; 2,591,535 seconds of TTL remained and the lock was absent. One Preview rate counter had count `1` and 101 seconds of remaining TTL. This verifies one protected Preview success path and receipt only; it does not verify the five-submission threshold, retries/concurrency, failure recovery, human-response timing, policy implementation, or production acceptance.
- **Verified restoration — 2026-08-04:** The Preview environment setting and latest branch Preview were restored to `false`, and fresh disabled deployment `6NrFmAef7vgP3dm9iuC11DBYEJ1d` (`paintswitch-7qbi2cue9-paint-switch.vercel.app`) was Ready at 1:26:34 PM EDT. Production was untouched and remained explicitly `false`. The enabled deployment's immutable unique URL remains access-protected.
- **Verified final-candidate external evidence — 2026-08-05:** Application commit `beb6781` passed GitHub Actions `Verify`, and its Vercel Preview reached `Ready`. With Preview delivery disabled, one unchanged synthetic submission failed closed. After Preview-only delivery was temporarily enabled and the candidate redeployed, the same retained submission recovered exactly once: one GoHighLevel Contact, one Opportunity, one workflow enrollment, and a `Success` internal-notification action were observed. The hosted rate counter capped at five, and one additional valid request returned `429` without creating a duplicate provider record or workflow enrollment. Preview `LEAD_DELIVERY_ENABLED` was then restored to `false`, and the disabled redeployment reached `Ready`; Production remained disabled. This verifies controlled Preview recovery and threshold behavior, not Production operation or launch acceptance.
- **Verified Alex mailbox access and basic operation — 2026-08-05:** A signed-in GoDaddy administration view verified that mailbox accounts for `hello@paintswitch.com` and `alex@paintswitch.com` exist under owner administration. Microsoft MFA for `alex@paintswitch.com` then succeeded, Outlook opened showing the Alex mailbox, and at 2:24 PM ET a controlled self-addressed operational message containing no customer data was sent and appeared unread in the Alex inbox. This verifies account existence, direct mailbox access, and basic same-mailbox send/receipt operation only. It does not verify external-domain delivery, GoHighLevel escalation routing, backup activation, human response, or workflow acceptance. D-048 now confirms backup/escalation-only routing, never every-lead routing; the exact signal, timing, acknowledgment, GoHighLevel configuration, routed receipt, activation, and response rehearsal remain **TBD** or unverified under D-046 and D-048.
- **Confirmed:** Use Vercel Pro for commercial beta hosting. The owner confirmed the plan on 2026-08-04. A signed-in Vercel dashboard check the same day verified the `Paint Switch` team labeled `Pro` and the `paintswitch-web` project within it. Billing administration, Production promotion, rollback, monitoring, and final deployment QA remain separate verification work.
- **TBD:** Production staff ownership beyond the confirmed owner role and conditional Alex direction, the exact escalation acknowledgment mechanism, sender authentication/deliverability, customer-facing sender scope, exact registration and A2P facts, payment-processor configuration, remaining enabled modules, and release phasing. Account credentials and configured identifiers are implementation facts, not additional owner-approved product policy.

The platform selection, account/sub-account, pipeline/stage, private integration, Vercel server-only configuration, seven custom-field destinations, and Upstash database/variables are verified. Application commit `beb6781` passed GitHub `Verify` and is Preview-deployed. Protected Preview evidence verifies exact mappings, attribution, on-page confirmation, technical-state completion, owner-notification success and receipt, recovery of one retained submission without duplicate provider records, and the hosted five-request threshold with a blocked additional valid request returning `429`. The Preview environment setting and latest branch Preview are `false`, the disabled redeployment is `Ready`, and Production remains `false`. Customer-facing Privacy and Terms pages and pre-submit disclosures are implemented in the candidate. Broader failure/concurrency behavior, privacy/retention operating procedures, professional/legal review, human-response timing, and Production end-to-end acceptance remain unverified. Customer messaging, AI, and payment paths are not live.

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
- **Confirmed:** Each accepted submission goes to a verified GoHighLevel CRM pipeline, notifies the owner, presents an immediate on-page confirmation, and records basic source/campaign attribution. Automated customer SMS is off for the beta, and choosing `Text` as a contact preference is not automated-SMS consent.
- **Confirmed:** Lead response operates from 8:00 AM through 8:00 PM Eastern daily. The first human attempt is due within five minutes during those hours and by 9:00 AM Eastern the next day for after-hours leads.
- **Confirmed:** The PaintSwitch owner is the primary operational recipient. Alex is only a conditional backup after `alex@paintswitch.com` is created and a controlled backup notification is received through the owner-approved route. On 2026-08-05, account existence, Microsoft MFA, direct Outlook access, and one controlled self-addressed operational send/receipt were verified for the Alex mailbox. The self-addressed test verifies basic mailbox operation but does not satisfy the routing-activation gate: exact routing approval, GoHighLevel configuration, a routed notification test, workflow acceptance, and response rehearsal remain **TBD**, unverified, or pending as labeled.
- **Confirmed:** Under D-048 dated 2026-08-05, `hello@paintswitch.com` remains the immediate primary internal destination for every accepted beta lead. Alex must not receive every lead and may receive only backup/escalation internal alerts after D-046's activation conditions pass. Automated customer SMS remains off. The exact escalation triggers, timing, routing configuration, and acknowledgment mechanism remain **TBD** or unverified.
- **Confirmed:** Vercel remains the beta website host, and custom-domain work does not block beta.
- **Confirmed:** `paintswitch.com` is the primary customer-facing domain. `www.paintswitch.com` permanently redirects to `paintswitch.com`. Approved on 2026-08-02 under decision D-020.
- **Confirmed:** Beta messaging must disclose that service availability and pricing are confirmed after review. It must not display an instant price, collect a deposit or payment, enable checkout, or promise customer-selected scheduling.
- **Confirmed:** The beta CRM foundation uses `PaintSwitch Lead Intake` with one `New Quote Request` stage. Approved existing field names are `Service Type`, `Project Description`, and `Contact Preference`; add Opportunity fields named `Project Location`, `Website Submission ID`, `Campaign Source`, and `Campaign Name`. Sample/demo data remains untouched.
- **Proposed:** Add a second internal `Contact Attempted` stage as a possible aid for D-048 escalation handling. This is not approved or implemented; D-021's one-stage pipeline remains controlling until explicit owner approval.
- **Confirmed:** Create a GoHighLevel private integration and store its token only as a secure server-side Vercel environment secret. Use free Upstash Redis for durable server-side duplicate/idempotency protection. Approved on 2026-08-03 under D-024 and D-025.
- **Confirmed:** Apply a 30-day TTL to Upstash technical idempotency/delivery-state records and enforce a maximum of five beta lead submissions per client IP address per ten minutes. Approved on 2026-08-03 under D-030. This technical TTL remains separate from D-039's 12-month rule for unconverted CRM leads.
- **Verified external configuration — 2026-08-04:** `PaintSwitch Website Lead - Owner Notification` uses Opportunity Created filtered to `PaintSwitch Lead Intake`, recipient `hello@paintswitch.com`, From name `PaintSwitch`, From email `hello@paintswitch.com`, and the approved subject/body. After explicit owner approval, its publish switch was enabled, the global workflow was saved, and reload showed it still Saved and published. The corrected controlled email was received with no visible Jen identity. A separately approved isolated synthetic Contact and manual Opportunity verified exactly one Opportunity Created enrollment, a successful internal-notification action, and workflow completion. The later protected Preview-only website test verified one complete website-to-GoHighLevel-to-workflow execution with every approved field and attribution mapping, accurate on-page confirmation, and no SMS/customer action; the owner confirmed that the resulting internal message reached `hello@paintswitch.com` at approximately 1:20 PM EDT. The failure path was not tested.
- **Confirmed:** Automated customer SMS remains disabled for the beta under D-042. Voice AI remains outside the beta. A future SMS activation requires the separate optional opt-in and all remaining operational, registration, consent, and legal readiness.
- **Confirmed:** The three approved HighLevel fields use the object, type, and options defined in D-022. `hello@paintswitch.com` is the approved PaintSwitch mailbox address.
- **Confirmed:** `hello@paintswitch.com` is the owner-notification destination, and the internal sender is `PaintSwitch <hello@paintswitch.com>`, under D-029 and D-031. The corrected received test satisfies AC-044's no-Jen visible-sender evidence; branded-domain authentication remains unverified.
- **Confirmed:** Publish the exact `PaintSwitch Website Lead - Owner Notification` workflow under D-032 dated 2026-08-04. Publication, one controlled manual trigger, and one controlled Preview website trigger are externally verified; each produced exactly one completed enrollment and a successful internal-notification action, and the owner confirmed receipt of the Preview-triggered message. Failure handling, conditional-backup operation, authentication/deliverability, and production end-to-end notification remain unverified.
- **Confirmed:** Remove placeholder reviews for the beta. Do not publish reviews again until each review and its use are verified and permissioned.
- **Confirmed:** Every accepted submission receives on-page confirmation. For any later SMS activation, consent must be a separate optional control that is unchecked by default, and declining it must not block submission. `Text` contact preference is not automated-SMS consent, and automated customer SMS is off for the beta under D-042. This supersedes the earlier every-lead-SMS rule.
- **Confirmed:** Accept the documented low-reachability residual PostCSS/Sharp dependency risk for this beta while monitoring for a compatible upstream Next.js patch. Reassess if the reachable architecture changes; never apply a force fix, incompatible override, or automatic downgrade. Approved on 2026-08-03 under D-028.
- **Verified implementation fact — 2026-08-05:** The approved integration, mappings, durable safeguards, published owner-notification workflow, corrected received-message evidence, controlled manual and protected-Preview executions, working `/privacy` and `/terms` pages, approved form disclosures, Virginia-prioritized individual service-area review copy, and beta operations runbook exist in application commit `beb6781`. Under D-047, exact stable Next.js and `eslint-config-next` `16.3.0` are installed, the production audit reports zero vulnerabilities, and fifty-seven automated tests, lint, TypeScript type checking, and a production build reporting `/`, `/privacy`, `/terms`, `/_not-found`, and `/api/leads` pass locally. GitHub Actions `Verify` passed and the candidate Preview reached `Ready`. Hosted evidence verifies exact CRM and attribution mappings, on-page confirmation, owner-notification `Success` and receipt, one retained-submission recovery without duplicate provider records, and the five-request threshold with a blocked additional valid request returning `429`. Broader failure/concurrency behavior, human-response timing, privacy/retention rehearsal, professional/legal review, production promotion, and Production end-to-end evidence remain incomplete. Preview delivery was restored to `false`, the disabled redeployment reached `Ready`, and Production remains `false`.
- **Verified production contradiction — 2026-08-03:** The live prior `main` build still shows standalone Drywall Repair, three explicitly labeled placeholder testimonials, nonfunctional Privacy/Terms links, estimate/contact actions without a working form, and universal-consultation copy. The corrected candidate is available only in the Vercel Preview, and live copy is not approval evidence.
- **Confirmed beta policy package — 2026-08-04:** Use website lead data only for quote review/response, CRM, attribution, security, and duplicate prevention; do not sell it or share/use it for targeted advertising; retain unconverted CRM leads for 12 months after their last interaction before deletion or anonymization unless an active project, verified security matter, dispute, or legal need applies; accept reasonably verified access, correction, and deletion requests at `hello@paintswitch.com`; treat quote submission as authorization for project-specific contact only; restrict the website and quote service to people age 18 or older; and use Maryland governing law with no mandatory arbitration and no class-action waiver.
- **TBD:** Professionally/legally verify the implemented Privacy, Terms, contact, age, and SMS-off disclosures; rehearse the runbook's confirmed 12-month deletion/anonymization, privacy-request verification, exception-audit, and response-hour procedures; verify branded-domain authentication, broader hosted failure/concurrency behavior, and the Production website-to-CRM-to-notification path; decide and configure exact Alex escalation triggers, routing, timing, and acknowledgment mechanism, verify external-domain and GoHighLevel delivery, and complete the backup response rehearsal before activation; verify exact DBA filing/registrant/address/tax/authorized-representative/licensing and any later A2P facts; define retention for record classes outside unconverted CRM leads; decide any abuse controls beyond D-030's confirmed beta rate limit; define detailed events; and assign later-release sequencing. Provider or carrier approval is not legal approval.

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
- **Confirmed:** For beta response operations, make the first human attempt within five minutes during the 8:00 AM–8:00 PM Eastern daily operating window and by 9:00 AM Eastern the next day after hours.
- **TBD:** Conversion targets, quote-completion targets, booking targets, revenue goals, margin thresholds, customer-satisfaction measures, and operational-quality measures beyond the confirmed beta response target.
