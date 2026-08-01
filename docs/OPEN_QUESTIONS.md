# PaintSwitch open questions

Last updated: 2026-08-01

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
- **Proposed:** Use the confirmed chatbot to guide the quote flow.
- **Proposed:** Use homepage calls to action such as “Get My Price” and “No phone call required.”
- **Proposed:** Provide automated follow-up and a context-preserving human handoff.
- **TBD:** Chatbot provider, model, architecture, exact interface, knowledge source, escalation criteria, conversation retention, disclosure language, and operating ownership. GoHighLevel has an intended AI-chat function, but that does not resolve these implementation choices.
- **TBD:** Which approved release first requires the chatbot.
- **TBD:** Final approved homepage and funnel copy.

## Booking, customer operations, and integrations

- **Confirmed:** Online booking is part of the launch model.
- **Confirmed:** GoHighLevel is the selected launch backbone or operating engine, and CRM is an intended GoHighLevel function, approved on 2026-07-18.
- **Confirmed:** Other intended GoHighLevel functions are SMS, email, AI chat, automations, calendar booking, pipelines, reviews, and payment workflows.
- **Proposed:** Let customers select schedule availability directly.
- **Proposed:** Collect deposits.
- **Proposed:** Track conversion events.
- **TBD:** Exact booking flow, availability rules, crew-capacity model, confirmation behavior, rescheduling, cancellation, and exception handling.
- **TBD:** GoHighLevel account configuration, credentials, workflows, APIs, field mappings, payment-processor configuration, exact enabled modules, operating owner, and release phasing.
- **TBD:** Any external payment processor, analytics tool, messaging service, scheduling provider, or other integration required beyond the confirmed GoHighLevel platform decision.

## End-state release phasing

- **Confirmed:** The end state requires a professional standalone website, quote requests, AI lead qualification, working proposals and bookings, collectible payments, measurable marketing-driven traffic/leads, and operations capable of completing the first PaintSwitch projects, approved on 2026-07-18.
- **TBD:** Which outcomes belong to the lead-generation beta, instant-quote release, self-service checkout release, or later release.
- **TBD:** The order, dependencies, success gates, and public-release dates for the confirmed outcomes.
- **TBD:** Which intended GoHighLevel functions must be enabled and verified in each release.

## Visual identity

- **Confirmed:** The owner preferred the first HTML example's logo direction—a paint roller with paint behind it—on 2026-07-18.
- **TBD:** Final logo artwork, file, variants, colors, typography, usage rules, and production approval evidence.

## Service and operating policy

- **TBD:** Whether drywall repair is a standalone marketed service or only supporting scope within painting projects. The current site displays it as a service card, but this is not approval.
- **TBD:** Paint manufacturers, product grades, finishes, color-selection rules, and material allowances.
- **TBD:** Employee-versus-subcontractor crew assignment rules and what, if anything, is disclosed to customers.
- **TBD:** Preparation standards, cleanup standards, quality-control steps, warranties, change orders, damage handling, and customer support policies.
- **TBD:** Required licensing, insurance, subcontractor compliance, privacy, legal, and consumer-protection review.

## Product success and governance

- **TBD:** Launch date and release milestones.
- **TBD:** Quote completion, conversion, booking, revenue, margin, response-time, quality, and customer-satisfaction targets.
- **TBD:** Documentation owner, product owner, pricing approver, operational approver, and recurring review cadence.
- **Confirmed:** Launch stand-ups should last 10 minutes, not 30 minutes, approved on 2026-07-18.
- **TBD:** Stand-up frequency, participants, facilitator, schedule, agenda, and escalation format.
