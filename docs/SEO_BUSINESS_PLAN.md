# PaintSwitch SEO-led business plan

Prepared 2026-09-06 from a review of the live repository (`main` + `claude/website-work-rpage3`) and the canonical docs. Everything labeled **Fixed today** is already committed on the working branch; everything labeled **Needs owner approval** touches visible copy or a Proposed item and is not implemented; everything labeled **Owner action** happens outside this repository.

## 1. Executive summary

PaintSwitch has the hard part done: a fast, static Next.js site with 36 routes, live lead delivery into GoHighLevel, attorney-approved legal pages, GA4 and Google Search Console in place, and a content footprint (10 city pages, 10 city guides, 4 service pages, 2 topical guides) that most one-crew painting companies never build. What it does not have yet is any off-site presence: no Google Business Profile, no directory citations, no social accounts, no reviews, no real project photos. For a local service business those off-site signals — GBP above all — decide whether the on-site work ranks.

The plan is therefore simple: keep the site technically clean (small fixes below), stop adding pages for now, and spend the next 90 days on the off-site work that turns the existing pages into rankings and the rankings into the first 10 leads.

## 2. Where we are (verified from the repo)

| Asset | Status |
| --- | --- |
| Site | Next.js 16.3, fully static, security headers, robots.txt, sitemap.xml, canonicals on every route (as of today) |
| Content | Homepage · 4 service pages · 10 city pages (VA/MD) · 10 city painting guides · 2 topical guides · service-areas + guides hubs · privacy/terms |
| Schema | `LocalBusiness` (homepage), `Service`+`FAQPage` (city + service pages), `Article`+`FAQPage` (guides) |
| Measurement | GA4 `G-LEKK2Q0XJ0` live; Google Search Console verified; Bing Webmaster Tools and Microsoft Clarity **not** set up (open item) |
| Lead capture | Quote form → `/api/leads` → GoHighLevel, enabled in Production since 2026-08-18; owner notification + 5-min escalation verified; phone `(571) 565-9491` in footer and schema |
| Chat | `Switch bot` (GoHighLevel Conversation AI), homepage only, Live Chat only |
| Off-site | Nothing: no GBP, Yelp, Angi, Nextdoor, Apple Maps, BBB, Instagram, Facebook, reviews, or backlinks |
| Promotion | Off. Paid ads not approved (Proposed) |
| Legal | Attorney review complete (D-067); Virginia DBA filing and Maryland MHIC question still open and knowingly accepted (D-065, D-068(E)) |

## 3. Goal and the arithmetic behind it

**Goal: 10 qualified quote requests within 90 days (by 2026-12-05).**

Service-business quote forms typically convert 2–5% of relevant visitors. At 3%, 10 leads needs roughly 330 relevant visits — about 25 a week. A brand-new domain will not get there from organic search alone inside 90 days; new domains usually need 3–6 months before city pages rank on page one. So the 90-day lead target is carried by three channels in this order:

1. **Google Business Profile** (Map Pack) — the fastest local-visibility channel there is; can produce calls within weeks of verification.
2. **Referral relationships** — the five real-estate agents already identified in D-068(C), plus every completed job's customer.
3. **Organic search** — the site's compounding channel; expect it to carry the *second* 10 leads more than the first.

Paid search is the optional accelerator if weeks 4–6 are quiet; copy is drafted in `CITATION_SOCIAL_COPY_DRAFTS.md` but launching it is a separate decision.

## 4. SEO review findings

### Fixed today (committed on `claude/website-work-rpage3`)

- **Maryland city pages said "Virginia."** `city-landing-page.tsx` hard-coded the state, so Bethesda, Potomac, and Chevy Chase Village rendered "Painting services in Bethesda, Virginia." Now uses each page's `stateName`. This was a live factual error on three ranking pages.
- **Homepage, Privacy, and Terms had no canonical URL.** Added. Every route now declares its canonical.
- **Ten city guides published** with `Article`+`FAQPage` schema, linked from `/guides` and the sitemap.
- **Ad, citation, and social copy drafted** with a GBP setup checklist.

### Approved and shipped under D-070 (2026-09-06)

1. **Homepage `<title>` and description carried no service or place keyword.** Was "Request a Painting Quote | PaintSwitch"; now "DMV Painters: Interior, Exterior & Cabinet | PaintSwitch" (owner asked for DMV framing rather than state names), with a description naming the four services and the DMV. Open Graph and Twitter titles follow.
2. **City pages did not link to their own guide.** Each city page now ends its neighborhoods section with "Read the [City] painting guide," so every guide has an in-content link from its city page, not just the hub and sitemap.
3. **Schema `areaServed` shipped; `sameAs` deferred.** `/service-areas` now carries a `LocalBusiness` block with `areaServed` for the ten cities it visibly lists (not on individual city pages, whose tests forbid it). `sameAs` is added as soon as the GBP and social profile URLs exist.

### Still open
1. **Real project photography.** The site's only image is a labeled illustrative color study. Real before/after photos are the biggest E-E-A-T and conversion gap on the site and are required for a credible GBP. **Owner decision (2026-09-06):** rather than asking each customer to approve photo use, PaintSwitch will carry a photo-use notice on proposals and work orders so customers know completed work may be photographed for marketing (no name, address, or identifying details published). Draft wording is in `CITATION_SOCIAL_COPY_DRAFTS.md`.
2. **Homepage CTA wording** ("Get My Price", "No phone call required") remains Proposed; leave as is unless the owner decides.

### Minor / later

- Sitemap `lastModified` values are hand-maintained strings; fine at this size, but update them when pages change or drop the field.
- No `BreadcrumbList` schema; low value at this depth.
- City guides are ~350 words each — adequate to index, thin to rank. Expand each with one real local project story as jobs complete.
- Docs (`DEVELOPMENT_STATUS.md`) still say "no phone number"; the site publishes one. Treat the site as current.

## 5. Strategy pillars

**Technical (done, keep clean).** Static rendering, canonicals, sitemap, schema. Re-run lint/tests/build on every change; run a Search Console coverage check monthly.

**On-page.** Homepage title now targets the DMV and the four services (D-070). Keep the D-063 guardrails: no prices, no license/EPA/insured/top-rated claims, schema only for visible facts. One primary keyword per page (already true).

**Local (the priority).** GBP first, then Apple Maps, Bing Places, Yelp, Nextdoor, Angi, BBB — all with identical name, phone `(571) 565-9491`, website, and no street address (D-066). Identical NAP across every listing is a direct ranking input; a single mismatch dilutes it.

**Content.** Pause new pages. The site is ahead of its authority; more pages without links or citations do not rank. Resume with one guide per month once GBP is live, prioritizing pages Search Console shows impressions for.

**Authority.** Citations above; the five agent referral emails; a Nextdoor presence in Alexandria and Arlington first (D-062 order); one supplier or paint-store relationship for a local link. No paid links (D-068(C)).

**Conversion.** Answer the phone during posted GBP hours; respond to form leads inside the existing 5-minute escalation window; ask every completed customer for a Google review; the proposal/work-order photo notice (D-071) covers photo use.

**Measurement.** GA4 + Search Console (in place); add Bing Webmaster Tools (submit the sitemap; Bing feeds DuckDuckGo and Copilot) and Microsoft Clarity (free session recordings) — both are 15-minute tasks already on the open list.

## 6. 90-day roadmap

**Weeks 1–2 — Foundation (owner time: ~4 hours total)**
- Create and verify GBP (video verification; see checklist). Post the opening post.
- Set up Bing Webmaster Tools and Microsoft Clarity.
- Create Instagram and Facebook with the drafted bios; publish the first post on each.

**Weeks 3–6 — Citations and referrals (~1 hour/day within the D-023 limit)**
- Apple Maps, Bing Places, Yelp, Nextdoor (Alexandria, Arlington), Angi, BBB — one per session, copy from the drafts doc.
- Send the five agent referral emails; follow up once after 7 days.
- Publish one GBP post per week (12 guide pages = 12 ready-made posts).
- Add `sameAs` to the organization schema with the live profile URLs.
- Check Search Console for first impressions by city; note which city pages surface.

**Weeks 7–12 — Convert and compound**
- Ask every completed customer for a Google review and photo permission; add real photos to GBP and, with approval, to the matching service page.
- Expand the two city guides with the most impressions using a real project story.
- Decision point (week 8): if fewer than 4 leads, decide on a limited Alexandria/Arlington paid-search test using the drafted copy — a `DECISION_LOG.md` entry with budget and geography.
- Month-3 review: leads by source (GA4 UTM + GHL `Campaign Source`), GBP calls/direction requests, Search Console clicks by page.

## 7. KPIs

| Metric | Day 30 | Day 60 | Day 90 |
| --- | --- | --- | --- |
| GBP verified and complete | Yes | — | — |
| Citations live (of 7) | 3 | 6 | 7 |
| Google reviews | 0–1 | 2 | 4+ |
| Search Console impressions / week | 100 | 400 | 1,000 |
| Search Console clicks / week | 5 | 20 | 50 |
| Qualified quote requests (cumulative) | 1–2 | 4–5 | 10 |
| Lead response time (form → human contact) | < 5 min during hours | same | same |

## 8. Guardrails that shape every task above

- No Jen Contracting name, link, or "powered by" anywhere off-site or on-site (D-001, D-068(D)).
- No street address published; service-area listings only (D-066).
- No license number, EPA/Lead-Safe, insured, top-rated, guaranteed-coverage, or price claims (D-063, AGENTS.md).
- Maryland leads are marketed to but the MHIC question goes back to counsel before Maryland work is contracted (D-068(E)).
- Only Confirmed items get implemented; Proposed items (paid ads, CTA wording) need a decision-log entry first.
- Owner time is capped at roughly one hour per day (D-023); the roadmap is sized to that.

## 9. Decisions requested from the owner

1. ~~Homepage title/description~~ Approved and shipped (D-070) with DMV framing.
2. ~~City-page → city-guide link~~ Approved and shipped (D-070).
3. ~~`areaServed` schema~~ Shipped (D-070); send GBP/social URLs when live for `sameAs`.
4. ~~Photo-permission step~~ Decided (D-071): photo-use notice on proposals and work orders.
5. **Open:** set a week-8 rule for the paid-search decision (budget ceiling and geography), or decline paid in advance.
