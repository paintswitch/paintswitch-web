# PaintSwitch master context

Last updated: 2026-08-01

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
- **TBD:** Account configuration, credentials, workflows, APIs, field mappings, payment-processor configuration, exact enabled modules, owners, and release phasing.

The platform selection and intended function categories are approved. They do not prove that any GoHighLevel account, module, workflow, integration, or payment path is configured or live.

## Marketed services

- **Confirmed:** PaintSwitch markets interior painting, exterior painting, cabinet painting, and commercial painting.
- **TBD:** Whether drywall repair is marketed as a standalone service. The current website displays a Drywall Repair service card, while repair needs are also a confirmed quote input. This code/documentation difference requires user direction before changing customer-facing work.

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
- **Proposed:** Customer scheduling mechanics, deposits, automated follow-up, conversion tracking, and human handoff. GoHighLevel and CRM integration are Confirmed, but their exact configuration and workflows remain TBD.
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

- **TBD:** The order, dependencies, beta scope, and public-release phasing of these outcomes. Confirmation of the end state does not imply that every outcome blocks an earlier lead-generation beta.

## Launch governance

- **Confirmed:** Launch stand-ups should be 10 minutes, not 30 minutes. Approved on 2026-07-18.
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
