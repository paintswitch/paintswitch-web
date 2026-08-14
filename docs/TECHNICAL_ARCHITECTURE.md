# PaintSwitch technical architecture

Last repository inspection: 2026-08-14

Last external runtime verification: 2026-08-14

This document records only facts verified from the repository. It does not treat planned or proposed systems as implemented.

## Repository structure

```text
paintswitch-web/
├── .github/workflows/ci.yml
├── public/                 Starter SVG assets, the exact PaintSwitch logo SVG, and one local illustrative color-study PNG
├── src/
│   ├── app/
│   │   ├── api/leads/route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── buttons.tsx
│   │   ├── footer.tsx
│   │   ├── highlevel-chat-widget.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── how-it-works.tsx
│   │   ├── legal-page.tsx
│   │   ├── quote-request-form.tsx
│   │   ├── section-heading.tsx
│   │   ├── service-card.tsx
│   │   └── trust-bar.tsx
│   └── lib/
│       ├── ghl-client.ts
│       ├── lead-delivery.ts
│       ├── lead-intake.ts
│       ├── lead-rate-limit.ts
│       ├── upstash-config.ts
│       └── upstash-idempotency.ts
├── tests/                  Node intake, route, rate-limit, delivery, public-content, and chat-widget source-contract tests
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tsconfig.json
```

Generated `.next` output and installed `node_modules` are present in the inspected working directory but ignored by Git and are not canonical source.

## Framework and dependency versions

| Package | Manifest declaration | Lockfile-resolved version |
| --- | --- | --- |
| Next.js | `16.3.0` | `16.3.0` |
| React | `19.2.4` | `19.2.4` |
| React DOM | `19.2.4` | `19.2.4` |
| TypeScript | `^5` | `5.9.3` |
| Tailwind CSS | `^4` | `4.3.3` |
| Tailwind PostCSS plugin | `^4` | `4.3.3` |
| ESLint | `^9` | `9.39.5` |
| eslint-config-next | `16.3.0` | `16.3.0` |
| Node type definitions | `^20` | `20.19.43` |
| React type definitions | `^19` | `19.2.17` |
| React DOM type definitions | `^19` | `19.2.3` |

The repository does not declare a Node.js runtime version through an `engines` field or a checked-in runtime-version file.

Next.js `16.3.0` resolves PostCSS `8.5.23` and optional Sharp `0.35.3`. The bounded framework update was installed without a force fix or incompatible override. `npm audit --omit=dev --json` reports zero vulnerabilities. The application has no user-controlled CSS-processing path, direct Sharp call, photo upload, or user-image processing path. The current local redesign serves one repository-local PNG from `public/images/` through `next/image` using its public URL and explicit intrinsic dimensions; this static authored asset is not a customer upload path.

## Application model

- The application uses the Next.js App Router under `src/app`.
- `src/app/layout.tsx` provides the root HTML layout and static PaintSwitch metadata.
- `src/app/page.tsx` is a Server Component that composes the lead-generation page at `/` from reusable components. Commit `649f06d` mounts `HighLevelChatWidget` only on this homepage. `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` are static legal-content routes that share `src/components/legal-page.tsx`.
- `src/components/header.tsx` and `src/components/quote-request-form.tsx` are Client Components. The header uses a click handler to close its native HTML `<details>` mobile menu after navigation.
- Primary homepage actions use in-page anchors targeting `#quote`; legal and cross-page navigation use normal route links.
- `QuoteRequestForm` owns client-side submission state. It collects the seven approved beta fields, validates through the shared `lead-intake.ts` parser, exposes field-specific accessible errors and focuses the first invalid control, creates a browser UUID for an unchanged submission attempt, captures bounded `utm_source` and `utm_campaign` values, applies a 50-second `AbortController` timeout, and sends normalized JSON to `/api/leads`. It retains the submission ID for unchanged retries but clears it after a server `409` payload-conflict response. An explicit native `POST` action prevents PII from becoming a query string before hydration; the JSON-only route rejects that fallback encoding rather than accepting an unvalidated lead. The rendered form also includes the approved 18+ acknowledgment, project-specific contact notice, automated-SMS-off boundary, and links to `/privacy` and `/terms`.
- `src/app/api/leads/route.ts` implements the dynamic `/api/leads` POST boundary with a 55-second maximum duration. It requires an exact same-origin approved production host (`paintswitch.com` or `paintswitch-web.vercel.app`), a permitted local-development origin, or a Vercel preview same-origin request; verifies the exact JSON media type; validates content length; reads at most 16 KiB with a five-second deadline; parses through `lead-intake.ts`; and exposes only generic no-store/nosniff responses. It delegates accepted leads to `lead-delivery.ts`, returns `200` only for a completed/replayed delivery, `409` for submission-ID payload conflict, and retryable `503` responses for busy or unavailable delivery.
- `src/lib/lead-intake.ts` rejects unexpected keys, control characters, malformed UUIDs, invalid enum values, and malformed email local parts or DNS labels before any future CRM delivery is attempted.
- `next.config.ts` disables `X-Powered-By` and applies a static-compatible CSP plus frame, MIME-sniffing, referrer, permissions, and cross-domain-policy response headers. Commit `649f06d` evaluates `HIGHLEVEL_CHAT_WIDGET_ENABLED === "true"`; commit `85117a1` adds the exact `wss://services.leadconnectorhq.com` origin to the chat-enabled `connect-src`. When false, the prior self-only browser-resource policy remains. When true, `script-src` and `img-src` add the three exact HTTPS LeadConnector origins, while `connect-src` adds those origins plus the exact services WebSocket origin; no wildcard is used, and `frame-src` remains `'none'`. Production retains the minimal `'unsafe-inline'` script/style allowances required by Next.js hydration and built-in error-page output; development alone adds broad `ws:` and `wss:` schemes. The corrected exact enabled policy supported no-reload replies in Preview and the bounded 2026-08-10 Production response test. Broader latency/reliability and the two disabled-state paths remain unverified.
- No other authored dynamic route, API route, middleware, server action, or background job is present.

## Rendering and routes

- The repository source defines `/`, `/privacy`, and `/terms` plus the favicon resource and dynamic `/api/leads` boundary.
- A production build run on 2026-08-04 reported static routes `/`, `/privacy`, `/terms`, and `/_not-found` plus dynamic route `/api/leads`. Generated output is verification evidence, not canonical source.
- No dynamic route parameters or runtime data-fetching code are present in the tracked source.

## Component organization

- `BrandLogo` renders `/images/paintswitch-logo.svg` through `next/image` with intrinsic 915×524 dimensions and an empty decorative alternative; each containing home link supplies the accessible `PaintSwitch home` name. The tracked SVG is byte-identical to the approved source (SHA-256 `4680e0995f21908e852d7062a471abad46cbcece918151af74f73249553f31ae`), path-only, and uses exact fills `#012765` and `#0658FE`.
- `Header` contains the shared production logo, a skip link, primary navigation, a desktop call to action, and client-enhanced native mobile navigation.
- `Hero` contains the transformation-through-color positioning, approved review-before-availability-or-pricing boundary, quote/service anchors, and a local static image served from `/images/paintswitch-color-study.png` through `next/image` at its verified 1586×992 intrinsic dimensions. The figure labels the asset as an “Illustrative color study” and “Not a customer project”; it is generated/local design imagery, not evidence of PaintSwitch work or a customer before/after story.
- `TrustBar` renders a four-item service index for Interior, Exterior, Cabinets, and Commercial.
- `ServiceCard` renders the four static service descriptions with editorial numbering rather than text-symbol icons.
- `HowItWorks` displays four static process steps.
- `SectionHeading` provides shared section-heading presentation.
- `PrimaryButton` and `SecondaryButton` are styled anchor components, not form buttons.
- `QuoteRequestForm` renders the beta intake fields, approved pre-submit disclosure, legal links, and client-side pending, success, and failure states. These states alone are not evidence of successful external delivery.
- `HighLevelChatWidget` is a committed Server Component that returns `null` unless `HIGHLEVEL_CHAT_WIDGET_ENABLED` equals the exact string `true`. When enabled, it emits one `next/script` loader using `strategy="lazyOnload"`, `https://widgets.leadconnectorhq.com/loader.js`, resources URL `https://widgets.leadconnectorhq.com/chat-widget/loader.js`, and public widget ID `6a75455fa70a87ea8ede056f`. It contains no secret, API client, transcript store, form field, booking, payment, or action logic.
- `LegalPage` provides the shared PaintSwitch production-logo header, configurable effective-date layout, return link, and footer for the two legal routes. Commit `649f06d` added Live Chat data, vendor, AI, no-sensitive-data, no-summary/export, and manual-retention disclosures. Squash-merged commit `0dd1c74f2a0d2b5260f36061b573986eb5b57126` sets the Privacy effective date to August 8, 2026 and identifies the chat as `Switch bot`, PaintSwitch's AI assistant; the Terms route retains the shared August 4 default.
- `Footer` contains the shared exact full-color logo on a soft-cream contrast backing, static navigation, working Privacy and Terms links, `hello@paintswitch.com`, the transformation-through-color line, the current year, and the factual DMV/Virginia-priority note.
- `page.tsx` contains the four approved service categories, an editorial transformation section and palette swatches, benefits, manual-review copy, service-area copy, and the branded quote-request section. The prior Drywall Repair card and placeholder reviews are absent.
- The stock `src/app/favicon.ico` remains separate from the approved full logo. No dedicated PaintSwitch app icon, social card/crop, reverse logo, one-color logo, or manifest is implemented.

## Styling

- Tailwind CSS is loaded through `@import "tailwindcss"` in `src/app/globals.css`.
- PostCSS loads `@tailwindcss/postcss`.
- Most presentation uses Tailwind utility classes embedded in JSX.
- `globals.css` defines local visual tokens for soft cream `#F5F1E8`, warm greige `#D1C4B8`, soft taupe `#C9BDAD`, brand navy `#012765`, brand cobalt `#0658FE`, warm charcoal `#3D4E4E`, ink, muted ink, and rules. It also defines system sans and Georgia/Times editorial-serif stacks, smooth scrolling, selection colors, and reduced-motion overrides. Component utilities use navy for readable text/primary surfaces and cobalt for hover/focus or decorative accents while preserving warm editorial surfaces.
- No external webfont import is present in the root layout.
- The project does not contain a separate design-token package or component library.
- D-060 supersedes D-058 only for the interim text wordmark and prior interactive-accent assignments. The repository now implements the exact approved production logo and blue interaction system while retaining D-058's Georgia/system typography, warm-neutral base, and labeled illustrative hero. No exact warm-gold value, derivative icon/social/reverse usage system, authentic customer-project imagery/claims, merge, Production deployment, or promoted traffic is inferred from the source.
- The 2026-08-11 D-060 local verification passed all 63 tests, lint, TypeScript checking, the Next.js `16.3.0` production build, and rendered desktop/mobile checks of the header, footer, legal shell, exact logo asset, blue interaction surfaces, and horizontal-overflow boundary. Hosted Preview and Production evidence remain separate.
- D-061 separately authorized publication. PR #6 head `17eba55e13f5400ce37ee713dee9757e8f89be82` passed GitHub `Verify`, Vercel, and Vercel Preview Comments and squash-merged to `main` as `19473d74a4e4a8890c9ea48e3f02bde9f0a86e13`. External 2026-08-14 checks show the apex, legal routes, homepage logo reference, quote-call-to-action source, and exact 154,690-byte SVG are served in Production. This is deployment/source evidence, not fresh visual, mobile, accessibility, widget-interaction, lead-delivery, console, or performance acceptance.
- The current D-059 implementation keeps response timing as static Terms content rather than application logic. `src/app/terms/page.tsx` uses non-guaranteed follow-up wording and contains no five-minute or 9:00 a.m. customer promise; the source contract prevents those exact timings from returning. The external GoHighLevel workflow retains its separate internal five-minute Alex branch and is not implemented in this repository.

## TypeScript and module configuration

- TypeScript runs in strict mode with `noEmit` and bundler module resolution.
- TypeScript permits explicit `.ts` import extensions so the no-dependency Node tests can directly exercise the same route and parser source used by the application.
- JSX uses the `react-jsx` transform.
- The `@/*` path alias maps to `src/*`.
- JavaScript files are allowed by configuration, though the authored application source inspected is TypeScript/TSX.
- Next.js supplies its TypeScript plugin.

## Linting and build commands

- `npm run dev` runs `next dev`.
- `npm run build` runs `next build`.
- `npm run start` runs `next start`.
- `npm run lint` runs `eslint`.
- **Current verification reconciliation:** The latest local application run is the 2026-08-11 D-060 run of 63 tests plus lint, type checking, and the Next.js `16.3.0` build. The following 62-test paragraph is retained as the historical 2026-08-10 D-058/D-059 checkpoint, not the current latest count.
- The latest verified `npm test` run executed sixty-two tests through Node's built-in test runner and TypeScript type stripping. The editorial-design source contract checks the approved palette values, transformation message, local color-study asset, explicit illustrative/not-customer-work labels, and absence of invented customer-result claims. On 2026-08-10, all sixty-two tests, lint, type checking, and a Next.js `16.3.0` production build passed locally. Responsive browser checks at 1440×1000 and 390×844 found no horizontal overflow and verified the local hero image, mobile navigation, empty-form validation/focus behavior, and both legal routes; page logs contained no warnings or errors. PR #6 initially exposed a Linux-only TypeScript resolution failure caused by importing the public PNG as a module while the generated `next-env.d.ts` file is ignored. Application commit `2ec63e1` corrected that repository boundary by using the public `/images/paintswitch-color-study.png` URL with explicit verified 1586×992 intrinsic dimensions. GitHub `Verify`, Vercel, and Vercel Preview Comments then all passed for that application commit. Ready protected Previews rendered the image, form, legal routes, and `Switch bot`; incomplete form submission produced the expected field-specific errors and summary alert, and browser diagnostics contained no PaintSwitch-origin error. Hosted keyboard smoke additionally verified skip-link focus transfer to `main-content` and keyboard-submit focus transfer to the first invalid input without sending a lead. Earlier commit `649f06d` added the bounded widget integration, and commit `85117a1` added the exact services WebSocket origin to the source contract.
- `npm run typecheck` runs TypeScript with no emitted files.
- ESLint uses Next.js Core Web Vitals and TypeScript configurations.
- `.github/workflows/ci.yml` uses Node.js 24 and runs `npm ci`, tests, lint, type checking, and the production build for pull requests and pushes to `main`. On 2026-08-08, fresh PR #2 `GitHub Verify`, `Vercel`, and `Vercel Preview Comments` checks all passed for application commit `85117a1`; PR #2 was then squash-merged to `main` as commit `7fb7359ccd5d1518d2dd4763e34350da9168d0cb`.
- No coverage configuration is present.
- Fifty-nine automated tests, lint, TypeScript type checking, and the Next.js 16.3.0 production build passed locally on 2026-08-05. The build reported `/`, `/privacy`, `/terms`, `/_not-found`, and `/api/leads`. Tests use in-memory fake Upstash and GoHighLevel responses to cover exact field mapping, completed replay, changed-payload conflict, concurrency, Redis failure, acquired-lock release when initial state retrieval fails, ambiguous-create reconciliation, explicit rejected-create recovery, failed `creating`-state write, ambiguous failure before any create, completion-write failure reconciliation, a new submission for an existing Contact, Marketplace and legacy Upstash configuration, invalid/partial Marketplace-pair fail-closed behavior, 30-day state TTL, atomic limiter behavior, namespace and client-identity handling, blocked-window non-extension, forged-forwarded-header rejection outside Vercel, other invalid configuration, generic error sanitization, the approved legal/form/footer content boundary, DMV intake with Virginia priority, and narrowed privacy-purpose/first-contact Terms content. Built-app HTTP and Chrome checks cover the homepage and legal routes, legal-link navigation, mobile overflow, security headers, no framework-identifying header, and styled 404 behavior. GitHub reran the complete `Verify` workflow successfully for application commit `e142b21` on 2026-08-05, and its Vercel Preview reached `Ready`. Separate controlled protected-Preview runs exercise real Upstash and GoHighLevel paths; they are external runtime evidence, not automated-test coverage.

## Data and integrations

Main commit `7fb7359ccd5d1518d2dd4763e34350da9168d0cb`, the squash merge of PR #2, contains:

- the client-side quote-request form and bounded browser-side UTM capture;
- the fail-closed `/api/leads` validation and delivery boundary;
- `ghl-client.ts`, which validates server-only configuration and uses native `fetch` for GoHighLevel Contact upsert, Opportunity search, and Opportunity create operations;
- `upstash-idempotency.ts`, which uses native `fetch` for a Redis REST state store, token-checked 60-second lock, atomic guarded writes/completion, and guarded release, including release of an acquired lock if the initial state read fails;
- `lead-delivery.ts`, which coordinates durable `contacting`, `contacted`, `creating`, `ambiguous`, `rejected`, and `completed` phases.

`lead-delivery.ts` prefers the Marketplace URL/token pair `UPSTASH_REDIS_REST_KV_REST_API_URL` and `UPSTASH_REDIS_REST_KV_REST_API_TOKEN`, supports the legacy `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` pair only when the Marketplace pair is absent, and fails closed for a partial or invalid Marketplace pair.

The GHL client maps name, phone, and email to Contact fields, Contact Preference to its approved Contact custom field, and service, description, project location, submission ID, campaign source, and campaign name to the approved Opportunity fields. It uses the fixed LeadConnector API host and validates the token, location, pipeline, stage, and field-ID configuration before any request.

The state store retains a SHA-256 payload hash, delivery phase, provider record IDs, generic error category, and timestamp; it does not store the submitted name, phone, email, project description, or provider tokens. GHL responses are streamed with a 1,000,000-byte cap and five-second timeout. Upstash responses are streamed with a 64,000-byte cap and 2.5-second timeout.

Before creating an Opportunity, the coordinator searches the Contact's pipeline Opportunities for the Website Submission ID. Ambiguous create outcomes remain durable and are reconciled rather than blindly re-posted. An explicit non-retryable rejected create is reconciled once and may be retried after configuration correction. Delivery events report only a generic category and the validated submission UUID. These controls target at-most-one automatic Opportunity creation plus reconciliation; they cannot provide a strict transactionally guaranteed exactly-once result across Redis and GoHighLevel.

The external Upstash database and Vercel variables are provisioned. `src/lib/upstash-config.ts` provides one validated Marketplace-or-legacy REST configuration loader for delivery state and rate limiting. `src/lib/upstash-idempotency.ts` applies a 30-day TTL to every guarded technical delivery-state write and implements the atomic fixed-window counter. `src/lib/lead-rate-limit.ts` derives HMAC-pseudonymous namespaced client keys and fails closed. The repository still contains no owner-notification code; that action is external in GoHighLevel. Controlled protected-Preview runs exercised completed persistence/delivery, retained-submission recovery after a fail-closed response, and the hosted rate-limit threshold. The recovered submission produced exactly one Contact, one Opportunity, one workflow enrollment, and a `Success` notification action; the counter capped at five and one additional valid request returned `429` without duplicate provider delivery. This runtime evidence does not add tracked architecture or prove broader failure/concurrency behavior, Production operation, human-response timing, privacy/retention operating procedures, or launch acceptance.

Main commit `7fb7359ccd5d1518d2dd4763e34350da9168d0cb` contains the bounded browser-side chatbot integration described above, including the exact services WebSocket origin required by the hosted transport. Its data path is a public third-party script loaded directly by the homepage browser from the fixed LeadConnector widget origin, with subsequent resources/connections limited in source to the three exact HTTPS LeadConnector origins and, for `connect-src` only, `wss://services.leadconnectorhq.com`. The repository contains no PaintSwitch chatbot API route, model client, server-side chatbot credential, conversation database, transcript persistence, summary/export workflow, automatic human-handoff state transfer, Contact/Opportunity creation from chat, booking, payment, or chatbot action. Exact provider-internal processing remains a provider fact rather than repository architecture. Preview verifies a bounded no-reload reply and one manual synthetic conversation deletion rehearsal. The 2026-08-10 Production test additionally verifies three no-reload safeguarded replies after the `Switch bot` rename and a second exact synthetic conversation deletion. Exact two-second timing, 10-reply cap, sleep behavior, broader reliability, mobile/accessibility, provider-enforced retention/anonymization, and both shutdown paths remain unverified.

GoHighLevel is a **Confirmed** business/platform selection. The pushed source references only server-side environment-variable names, never confidential values, and adds no provider package dependency. External private-integration, pipeline, field, and Vercel-variable verification is recorded in `DEVELOPMENT_STATUS.md`; external configuration is not tracked repository architecture.

Decision D-018 confirms the lead-generation beta scope; D-059 now makes the safeguarded chatbot part of the intended full-design launch after acceptance. The clients, mocked tests, provisioned Upstash connection, D-030 safeguards, corrected D-031 sender evidence, published D-032 workflow, controlled manual and website-driven Preview runs, retained-submission recovery, hosted rate-limit threshold, owner-confirmed receipt, bounded chatbot Preview and Production responses, and two manual synthetic chat-deletion exercises are implementation evidence, not complete Production acceptance. `LEAD_DELIVERY_ENABLED` was not changed during Production deployment and remains at its previously verified disabled state. The external bot remains Auto Pilot, Live Chat-only, and bounded by D-052/D-053/D-059. Ads and active promotion remain off. Preview and the 2026-08-10 Production test displayed safeguarded replies without reload. Exact two-second delay, 10-reply-cap, manual/workflow-sleep runtime behavior, broader reliability, mobile/accessibility behavior, provider-enforced retention/anonymization, both shutdown paths, and final promoted-traffic go/no-go remain missing.

## Controlled external runtime evidence — not repository architecture

On 2026-08-06, the signed-in HighLevel account reported the Starter subscription activated and AI Employee Unlimited enabled under the owner-approved commercial terms in D-050. The Prompt Based bot started from scratch was then named `PaintSwitch AI Assistant`. The owner approved `OpenAI GPT 4.1`, the D-052 safety-first prompt, and the D-053 exact Live Chat owner-test settings. The bot was initially Off with Live Chat as its only channel; on 2026-08-07 it was changed to Auto Pilot solely for controlled owner testing. The saved settings use 10 replies, a two-second delay, images/voice responses off, manual/workflow sleep, and direct form/mailbox handoff without automatic context transfer. Conversation Summary and transcript workflow export remained off in the prior inspection. Four controlled provider-panel tests passed the exact bounded scenarios observed.

On 2026-08-08, after D-054, the signed-in provider configuration was changed so the bot name and live widget title are `Switch bot`; the widget introduction and first-reply instructions explicitly identify Switch bot as PaintSwitch's AI assistant. A fresh live homepage session displayed the `Switch bot` heading and AI-disclosing introduction. PR #4 then squash-merged the matching repository Privacy copy/date as `0dd1c74f2a0d2b5260f36061b573986eb5b57126`; Vercel Production deployment `paintswitch-pidsb5zpf-paint-switch.vercel.app` reached `Ready`, and the live Privacy route showed the new identity and August 8 effective date. The provider portion remains external runtime configuration rather than repository architecture, and no Production reply was sent during verification.

### Chatbot hosted Preview owner-test evidence â€” 2026-08-07 through 2026-08-08

Commit `649f06d` was pushed on `codex/lead-generation-beta`, and its PR #2 checks passed. Preview `https://paintswitch-9vzqs7zmi-paint-switch.vercel.app` loaded the widget only on the homepage. The visible title and intro disclosed that the visitor was interacting with AI. No pre-chat contact form or visible attachment/voice control appeared. Provider markup still contained a hidden `display:none` file input, so this evidence does not claim that provider-internal attachment code is absent.

Historical debugging evidence from commit `649f06d` is preserved: two synthetic messages passed the observed safeguards and appeared in the widget after page reload. A service-question response named interior, exterior, cabinet, and commercial painting and directed the visitor to `Request a Quote`. A pricing/booking request was refused and directed to the form and human follow-up. A third synthetic message asked whether ZIP `22102` could be confirmed. HighLevel generated a response refusing to guarantee ZIP availability and routing to `Request a Quote`/human review, but the browser widget did not display it within a 30-second no-reload observation. Browser logs contained only unrelated Chrome-extension warnings and no site/widget error.

Commit `85117a1` adds the exact `wss://services.leadconnectorhq.com` origin to the chat-enabled `connect-src` and was pushed on `codex/lead-generation-beta`. Fresh PR #2 `GitHub Verify`, `Vercel`, and `Vercel Preview Comments` checks all passed, and Preview `https://paintswitch-44fjlzkoy-paint-switch.vercel.app` reached `Ready`. In a fresh Preview subdomain and session, the homepage chat responded to `What painting services do you offer?` within a 20-second no-reload observation. The displayed reply disclosed AI, named interior, exterior, cabinet, and commercial painting, and directed the visitor to `Request a Quote`. The observation produced zero site/widget console logs. This is one real-time display pass; it does not establish exact two-second timing or broader reliability.

The exact synthetic conversation `Guest Visitor Svdtu`, containing no email, phone, or customer data, was permanently deleted through HighLevel's `Delete Conversation` > `Delete Forever` dialog. The inbox afterward showed no unread conversations. This verifies one manual synthetic deletion rehearsal only. It does not establish provider-enforced retention, anonymization, backup deletion, or the ongoing operating procedure. Mobile/accessibility behavior, both kill-switch shutdown tests, Production reply behavior and latency, exact delay/cap/sleep runtime behavior, and promoted traffic remain unverified.

### Production homepage widget evidence â€” 2026-08-08

PR #2 was squash-merged to `main` as commit `7fb7359ccd5d1518d2dd4763e34350da9168d0cb`. Vercel Production deployment `paintswitch-ghh6fv5dl-paint-switch.vercel.app` reached `Ready`, and `https://paintswitch.com` loaded the merged homepage. Before D-054, the page displayed the chat prompt and opened a widget then titled `PaintSwitch AI Assistant` with an AI-disclosing intro. Provider markup contained a hidden file input, but it was not visible. The live chat launcher count was zero on `/privacy` and `/terms` and one after returning to `/`, verifying the homepage-only mount. Those route checks produced zero non-extension site/widget console logs. No Production chat message was sent, so this verifies widget presence and opening only, not a Production AI reply or latency.

### Production safeguarded-response and cleanup evidence — 2026-08-10

A fresh no-user-data synthetic conversation on `https://paintswitch.com` verified the provider-managed `Switch bot` title and three generated response boundaries after D-054/D-059. The first reply explicitly identified Switch bot as PaintSwitch's AI assistant, listed interior, exterior, cabinet, and commercial painting, stated that PaintSwitch supplies the paint, and directed the visitor to `Request a Quote`. The second refused a firm price and booking. The third refused to promise an exact human response time and directed the visitor to the form or `hello@paintswitch.com`. All responses displayed without reload; observed final-response times were approximately 8 to 17 seconds. The exact synthetic conversation was permanently deleted and its test text was absent from the inbox afterward. The associated synthetic Contact was then deleted after exact identity and creation-time verification; GoHighLevel states deleted contacts are restorable for 60 days. This evidence describes provider runtime, not repository architecture. It does not verify the configured two-second delay, 10-reply cap, manual/workflow sleep, mobile/accessibility, both shutdown paths, provider-enforced retention/anonymization, or broad reliability.

A HEAD request to `https://paintswitch.com` returned `200`. The live CSP contained the three exact HTTPS LeadConnector origins plus exact `wss://services.leadconnectorhq.com` in `connect-src`, retained `frame-src 'none'`, and did not expose `X-Powered-By`. The response identified Vercel and included HSTS, Permissions Policy, Referrer Policy, `X-Content-Type-Options`, and `X-Frame-Options` headers. `LEAD_DELIVERY_ENABLED` was not changed and remains at its previously verified disabled state; ads and active promotion remain off.

On 2026-08-04, commit `3bac3ba` was exercised through an access-protected Vercel Preview using Standard Protection with Require Log In. `LEAD_DELIVERY_ENABLED` was temporarily set to `true` for Preview only; Production was explicitly kept `false`. Enabled deployment `CrJA8ve4qzNHneVLwEtkr5N15gJu` at `paintswitch-pp6wvxmih-paint-switch.vercel.app` reached Ready at 1:18:57 PM EDT.

Exactly one synthetic browser submission ran from 1:19:53 PM through 1:19:57 PM EDT. The browser displayed the exact success copy, `Your request was sent. A PaintSwitch team member will review the details and follow up.` Submission `a0c9e9cd-4e98-4f45-8c1f-16c9a31256ec` created GoHighLevel Contact `w1tEl1ktbKestabbkBr3` and Opportunity `11u1dIja7oMJXS4srkPu`; all expected Contact/Opportunity mappings and both UTM attribution values were observed. The published owner-notification workflow enrolled exactly once at 1:19:56 PM. Execution `01KZ6WM16S7WTFPM40NTEA9381` reported the internal-notification event as `Success` at 1:19:57 PM and finished. No SMS or other customer-facing workflow action ran.

The owner confirmed that the resulting internal message reached `hello@paintswitch.com` at approximately 1:20 PM EDT. This verifies receipt only for this exact controlled Preview trigger; at that time it did not establish sender authentication, failure behavior, operational response, or Production delivery. Later provider-account configuration is tracked in the operational documents, not treated as repository architecture here.

The matching Upstash completed state contained a version, payload hash, provider IDs, completion phase, and updated timestamp, but none of the raw submitted name, email, phone, location, service, description, or preference fields. Its observed remaining TTL was 2,591,535 seconds, and the delivery lock was absent after completion. One Preview rate counter had value `1` with 101 seconds remaining. This proves a single hosted state/counter path; it does not establish a broader privacy classification or test the five-submission threshold, blocked response, concurrency, failure/retry behavior, or Production behavior.

After the test, the Preview environment setting and latest branch Preview were restored to `false`. Fresh disabled deployment `6NrFmAef7vgP3dm9iuC11DBYEJ1d` at `paintswitch-7qbi2cue9-paint-switch.vercel.app` reached Ready at 1:26:34 PM EDT, and Production remained `false`. The immutable enabled deployment URL remains access-protected. The test verifies one website-to-Upstash-to-GoHighLevel-to-workflow-to-inbox success path, not failure handling, Production delivery, human-response timing, or complete launch operation.

### Final-candidate protected-Preview evidence — 2026-08-05

Application commit `beb6781` passed GitHub Actions `Verify`, and its Vercel Preview reached `Ready`. The candidate was first exercised with `LEAD_DELIVERY_ENABLED=false`; one unchanged synthetic submission failed closed while the browser retained its submission identity. Preview delivery was then temporarily enabled and the candidate redeployed. Retrying that same retained submission recovered exactly once: GoHighLevel contained one Contact, one Opportunity, one workflow enrollment, and one internal-notification action with status `Success`. No duplicate provider record or workflow enrollment was observed.

In a delivery-disabled threshold check, the hosted fixed-window counter reached its cap of five counted valid attempts. Those attempts returned the expected delivery-disabled `503`; one additional valid attempt returned `429` and did not create another Contact, Opportunity, or workflow enrollment. This verifies the deployed threshold and blocked-request no-delivery boundary for the controlled Preview client; it does not establish behavior across concurrent clients or Production.

After the rehearsal, Preview `LEAD_DELIVERY_ENABLED` was restored to `false`, and the disabled redeployment reached `Ready`. Production remained disabled. This section intentionally omits synthetic personal data and opaque Redis keys.

A signed-in GoDaddy administration view also verified that mailbox accounts for `hello@paintswitch.com` and `alex@paintswitch.com` exist and are under owner administration. Later on 2026-08-05, Microsoft MFA for `alex@paintswitch.com` succeeded, Outlook opened showing that mailbox, and a controlled self-addressed operational message containing no customer data was sent at 2:24 PM ET and appeared unread in the Alex inbox. Separate external operational evidence then verified the Saved/published two-stage GoHighLevel branch and both synthetic outcomes: an Opportunity still in `New Quote Request` after five minutes produced the Alex action, while one moved to `Contact Attempted` did not. The owner's mobile Outlook screenshot and GoHighLevel Email Analytics verify routed Alex receipt at 4:23 PM. Transition ownership and acknowledgment, failure/retry behavior, human response, and complete operational-backup readiness remain unverified. These are external account-state and runtime facts, not tracked repository architecture.

## Deployment configuration

- The Git remote points to `paintswitch/paintswitch-web` on GitHub.
- The repository contains one GitHub Actions verification workflow. Fresh PR #2 `GitHub Verify`, `Vercel`, and `Vercel Preview Comments` checks all passed for application commit `85117a1` on 2026-08-08; PR #2 was then squash-merged as main commit `7fb7359ccd5d1518d2dd4763e34350da9168d0cb`.
- The repository contains no tracked Vercel project configuration; `.vercel` is ignored.
- `next.config.ts` disables `X-Powered-By` and configures the security-header baseline. Main commit `7fb7359ccd5d1518d2dd4763e34350da9168d0cb` conditionally adds the three exact HTTPS LeadConnector origins and the exact services WebSocket origin only when the chat environment flag is true; the WebSocket origin is limited to `connect-src`. The live Production CSP and security-header baseline were observed at the apex, and the Production widget opened without a non-extension site/widget console log. The 2026-08-10 bounded Production test displayed three safeguarded replies without reload; broad latency/reliability remains unverified.
- Pushing `codex/lead-generation-beta` created the verified Preview for application commit `85117a1`; PR #2 then squash-merged to main commit `7fb7359ccd5d1518d2dd4763e34350da9168d0cb`. Production deployment `paintswitch-ghh6fv5dl-paint-switch.vercel.app` reached `Ready`, and the apex loaded the merged homepage and opened its AI-disclosed widget. The protected lead-delivery operational tests recorded above were performed on earlier application commit `beb6781`; both its tested enabled state and restored disabled redeployment reached `Ready`. Lead delivery remains disabled, ads and promotion remain off, and rollback plus remaining Production acceptance work remain unverified.
- D-061 authorized publishing the approved full design for owner review. PR #6 head `17eba55` passed all three hosted checks, squash-merged to `main` as `19473d74a4e4a8890c9ea48e3f02bde9f0a86e13`, and the public apex, legal routes, and exact logo asset returned `200` on 2026-08-14. The live CSP retained the exact chat-enabled LeadConnector HTTPS/WSS origins. Browser panels were unavailable for fresh visual/widget QA; lead delivery remains disabled; and paid promotion, rollback rehearsal, monitoring, and broader Production acceptance remain open.
- The external database `paintswitch-lead-idempotency` is connected to Vercel with five Sensitive Production-and-Preview variables. No value is recorded in the repository or documentation.

## Security and operational posture visible in the repository

- No application authentication or authorization is present. D-030's 30-day technical-record TTL and five-valid-submissions-per-client-IP-per-600-seconds rate limit are implemented and locally tested. D-039 confirms a 12-month retention rule for unconverted CRM leads, but the repository snapshot audited here contains no implementation of that CRM deletion/anonymization process; retention for other record classes remains TBD.
- Server-only configuration validation, fixed provider hosts, provider timeouts, streamed response caps, generic public errors, durable state logic, and reconciliation exist locally. Confidential values are not present in source.
- The browser generates and reuses a UUID when an unchanged failed submission is retried and clears it after a `409` conflict. The server hashes the full normalized payload to detect submission-ID reuse with changed content.
- The 60-second lock and durable phases support at-most-one automatic create plus reconciliation. Every guarded technical-state write carries the 30-day expiry. Hosted evidence includes a completed state with expiry and absent completed lock plus one unchanged synthetic submission that first failed closed and then recovered exactly once after Preview delivery was enabled. Exactly one Contact, one Opportunity, one workflow enrollment, and one `Success` notification action were observed. Broader failure modes, concurrency, and Production behavior remain unverified, and no cross-provider exactly-once guarantee is claimed.
- The atomic limiter runs after schema validation and before GoHighLevel delivery. Its fixed 600-second window begins with the first valid request. Requests that fail origin, content, body, or schema validation do not consume quota; blocked attempts do not increment or extend the window. Hosted Preview evidence on 2026-08-05 verified a counter capped at five and one additional valid request returning `429` without provider duplication. Unavailable limiting returns `503`. Deployed environments trust only a canonical single-IP `x-vercel-forwarded-for`; localhost uses one shared development identity. HMAC keys prevent raw-IP storage but use the Upstash token as the secret, so token rotation resets active pseudonymous buckets.
- Sanitized delivery reporting emits only a generic event category and validated submission UUID. No monitoring destination, alerting workflow, operator dashboard, or full observability path is present.
- Server validation, strict request-shape and email checking, a 16 KiB bounded stream, a five-second body-read deadline, exact same-origin production/local/preview checks, generic errors, and security response headers remain in place.
- Environment files are ignored by Git.
- The chat widget ID is public configuration in source. No HighLevel chatbot credential or model secret is present. The enabled environment flag and the provider bot's Auto Pilot state were exercised together in Preview and Production, proving the activation side of the two-control boundary and bounded no-reload replies. Neither shutdown path has been tested, and exact delay/cap/sleep runtime behavior plus broader reliability remain unverified. Production showed no visible attachment control, but provider markup retained a hidden file input; provider-internal attachment code is therefore not claimed absent.
- After the owner-approved D-047 upgrade to exact stable `next@16.3.0` and `eslint-config-next@16.3.0`, `npm audit --omit=dev --json` reports zero vulnerabilities. The dependency regression suite and local production smoke pass; no Preview/Canary package, React change, or force fix was used. Fresh PR #2 Preview/CI checks pass for commit `85117a1`, and the squash-merged Production deployment reached `Ready`; remaining Production acceptance work stays separate.
- `BETA_OPERATIONS_RUNBOOK.md` documents manual lead-response, delivery-failure, privacy-request, unconverted-lead-retention, conditional-backup, release, and rollback procedures. No repository-tracked monitoring/alert configuration, automated incident process, automated CRM-retention job, or active backup-routing configuration exists.

## Architecture boundaries

Business approval and future architecture are documented separately:

- **Confirmed** product behavior belongs in `PRODUCT_REQUIREMENTS.md` and `DECISION_LOG.md`.
- Confirmed end-state outcomes and the GoHighLevel platform selection do not establish implemented architecture or release phasing.
- **Proposed** integrations and workflows belong in `OPEN_QUESTIONS.md` until approved.
- Requirement-to-implementation coverage belongs in `REQUIREMENTS_TRACEABILITY.md`; launch sequencing belongs in `LAUNCH_CHECKLIST.md`.
- This file must be updated only after architecture is verifiably present in the repository.
