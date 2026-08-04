# PaintSwitch technical architecture

Last repository inspection: 2026-08-04

Last external runtime verification: 2026-08-04

This document records only facts verified from the repository. It does not treat planned or proposed systems as implemented.

## Repository structure

```text
paintswitch-web/
├── .github/workflows/ci.yml
├── public/                 Five SVG assets
├── src/
│   ├── app/
│   │   ├── api/leads/route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── buttons.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── how-it-works.tsx
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
├── tests/                  Node intake, route, rate-limit, and mocked delivery tests
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
| Next.js | `16.2.12` | `16.2.12` |
| React | `19.2.4` | `19.2.4` |
| React DOM | `19.2.4` | `19.2.4` |
| TypeScript | `^5` | `5.9.3` |
| Tailwind CSS | `^4` | `4.3.3` |
| Tailwind PostCSS plugin | `^4` | `4.3.3` |
| ESLint | `^9` | `9.39.5` |
| eslint-config-next | `16.2.12` | `16.2.12` |
| Node type definitions | `^20` | `20.19.43` |
| React type definitions | `^19` | `19.2.17` |
| React DOM type definitions | `^19` | `19.2.3` |

The repository does not declare a Node.js runtime version through an `engines` field or a checked-in runtime-version file.

Next.js currently resolves its own PostCSS `8.4.31` and optional Sharp `0.34.5` dependencies. The application has no user-controlled CSS-processing path, `next/image` import, direct Sharp call, photo upload, or user-image processing path. Current audit findings and the scoped reachability assessment are recorded in `DEVELOPMENT_STATUS.md`; no incompatible override or force fix is present.

## Application model

- The application uses the Next.js App Router under `src/app`.
- `src/app/layout.tsx` provides the root HTML layout and static PaintSwitch metadata.
- `src/app/page.tsx` is a Server Component that composes the single authored page at `/` from reusable components.
- `src/components/header.tsx` and `src/components/quote-request-form.tsx` are Client Components. The header uses a click handler to close its native HTML `<details>` mobile menu after navigation.
- Navigation and calls to action use plain in-page anchor links. Primary actions target the `#quote` section.
- `QuoteRequestForm` owns client-side submission state. It collects the seven approved beta fields, validates through the shared `lead-intake.ts` parser, exposes field-specific accessible errors and focuses the first invalid control, creates a browser UUID for an unchanged submission attempt, captures bounded `utm_source` and `utm_campaign` values, applies a 50-second `AbortController` timeout, and sends normalized JSON to `/api/leads`. It retains the submission ID for unchanged retries but clears it after a server `409` payload-conflict response. An explicit native `POST` action prevents PII from becoming a query string before hydration; the JSON-only route rejects that fallback encoding rather than accepting an unvalidated lead.
- `src/app/api/leads/route.ts` implements the dynamic `/api/leads` POST boundary with a 55-second maximum duration. It requires an exact same-origin approved production host (`paintswitch.com` or `paintswitch-web.vercel.app`), a permitted local-development origin, or a Vercel preview same-origin request; verifies the exact JSON media type; validates content length; reads at most 16 KiB with a five-second deadline; parses through `lead-intake.ts`; and exposes only generic no-store/nosniff responses. It delegates accepted leads to `lead-delivery.ts`, returns `200` only for a completed/replayed delivery, `409` for submission-ID payload conflict, and retryable `503` responses for busy or unavailable delivery.
- `src/lib/lead-intake.ts` rejects unexpected keys, control characters, malformed UUIDs, invalid enum values, and malformed email local parts or DNS labels before any future CRM delivery is attempted.
- `next.config.ts` disables `X-Powered-By` and applies a static-compatible CSP plus frame, MIME-sniffing, referrer, permissions, and cross-domain-policy response headers. The current source has no external browser resource allowlist. Production retains the minimal `'unsafe-inline'` script/style allowances required by Next.js hydration and built-in error-page output; development alone adds `'unsafe-eval'` and WebSocket connections.
- No other authored dynamic route, API route, middleware, server action, or background job is present.

## Rendering and routes

- The repository source defines the `/` page plus the favicon resource.
- A production build run on 2026-08-02 reported static routes `/` and `/_not-found` plus dynamic route `/api/leads`. Generated output is not treated as lasting architecture documentation.
- No dynamic route parameters or runtime data-fetching code are present in the tracked source.

## Component organization

- `Header` contains text brand identity, a skip link, primary navigation, a desktop call to action, and client-enhanced native mobile navigation.
- `Hero` contains the primary positioning copy and a CSS-built room illustration.
- `TrustBar` displays four static commitments.
- `ServiceCard` renders static service descriptions and text-symbol icons.
- `HowItWorks` displays four static process steps.
- `SectionHeading` provides shared section-heading presentation.
- `PrimaryButton` and `SecondaryButton` are styled anchor components, not form buttons.
- `QuoteRequestForm` renders the beta intake fields and client-side pending, success, and failure states. These states are not evidence of successful delivery because the server route intentionally remains fail-closed until CRM delivery is safe and configured.
- `Footer` contains static navigation and the current year. Privacy and Terms documents or links are not implemented.
- `page.tsx` contains the four approved service categories, benefits, manual-review copy, service-area copy, and the branded quote-request section. The prior Drywall Repair card and placeholder reviews are absent.
- The current header brand mark is rendered from text; no repository asset is verified as a final production logo following the owner-preferred paint-roller-with-paint-behind direction.

## Styling

- Tailwind CSS is loaded through `@import "tailwindcss"` in `src/app/globals.css`.
- PostCSS loads `@tailwindcss/postcss`.
- Most presentation uses Tailwind utility classes embedded in JSX.
- `globals.css` defines background and foreground variables, system font stacks, smooth scrolling, selection colors, and reduced-motion overrides.
- No external webfont import is present in the root layout.
- The project does not contain a separate design-token package or component library.

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
- `npm test` runs fifty-one tests through Node's built-in test runner and TypeScript type stripping. Coverage spans intake validation, route behavior, mocked delivery state, Upstash configuration, 30-day technical-state TTL, atomic fixed-window limiting, client-identity derivation, and failure handling.
- `npm run typecheck` runs TypeScript with no emitted files.
- ESLint uses Next.js Core Web Vitals and TypeScript configurations.
- `.github/workflows/ci.yml` uses Node.js 24 and runs `npm ci`, tests, lint, type checking, and the production build for pull requests and pushes to `main`. The workflow is tracked in pushed commit `efb96b9` but has not yet run on GitHub; that non-PR branch push produced only two Vercel-related checks.
- No coverage configuration is present.
- Fifty-one automated tests, lint, TypeScript type checking, and the Next.js 16.2.12 production build passed on 2026-08-03. The build reported `/`, `/_not-found`, and `/api/leads`. Tests use in-memory fake Upstash and GoHighLevel responses to cover exact field mapping, completed replay, changed-payload conflict, concurrency, Redis failure, acquired-lock release when initial state retrieval fails, ambiguous-create reconciliation, explicit rejected-create recovery, failed `creating`-state write, ambiguous failure before any create, completion-write failure reconciliation, a new submission for an existing Contact, Marketplace and legacy Upstash configuration, invalid/partial Marketplace-pair fail-closed behavior, 30-day state TTL, atomic limiter behavior, namespace and client-identity handling, blocked-window non-extension, forged-forwarded-header rejection outside Vercel, other invalid configuration, and generic error sanitization. Earlier built-app HTTP and Chrome smoke evidence covers the page, fail-closed route, headers, validation, focus, value retention, CSP console, and 404 behavior. A separate controlled protected-Preview run exercised one successful real Upstash and GoHighLevel path; it is external runtime evidence, not automated-test coverage.

## Data and integrations

Pushed commit `efb96b9`, also available in a fail-closed Vercel Preview, contains:

- the client-side quote-request form and bounded browser-side UTM capture;
- the fail-closed `/api/leads` validation and delivery boundary;
- `ghl-client.ts`, which validates server-only configuration and uses native `fetch` for GoHighLevel Contact upsert, Opportunity search, and Opportunity create operations;
- `upstash-idempotency.ts`, which uses native `fetch` for a Redis REST state store, token-checked 60-second lock, atomic guarded writes/completion, and guarded release, including release of an acquired lock if the initial state read fails;
- `lead-delivery.ts`, which coordinates durable `contacting`, `contacted`, `creating`, `ambiguous`, `rejected`, and `completed` phases.

`lead-delivery.ts` prefers the Marketplace URL/token pair `UPSTASH_REDIS_REST_KV_REST_API_URL` and `UPSTASH_REDIS_REST_KV_REST_API_TOKEN`, supports the legacy `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` pair only when the Marketplace pair is absent, and fails closed for a partial or invalid Marketplace pair.

The GHL client maps name, phone, and email to Contact fields, Contact Preference to its approved Contact custom field, and service, description, project location, submission ID, campaign source, and campaign name to the approved Opportunity fields. It uses the fixed LeadConnector API host and validates the token, location, pipeline, stage, and field-ID configuration before any request.

The state store retains a SHA-256 payload hash, delivery phase, provider record IDs, generic error category, and timestamp; it does not store the submitted name, phone, email, project description, or provider tokens. GHL responses are streamed with a 1,000,000-byte cap and five-second timeout. Upstash responses are streamed with a 64,000-byte cap and 2.5-second timeout.

Before creating an Opportunity, the coordinator searches the Contact's pipeline Opportunities for the Website Submission ID. Ambiguous create outcomes remain durable and are reconciled rather than blindly re-posted. An explicit non-retryable rejected create is reconciled once and may be retried after configuration correction. Delivery events report only a generic category and the validated submission UUID. These controls target at-most-one automatic Opportunity creation plus reconciliation; they cannot provide a strict transactionally guaranteed exactly-once result across Redis and GoHighLevel.

The external Upstash database and Vercel variables are provisioned. `src/lib/upstash-config.ts` provides one validated Marketplace-or-legacy REST configuration loader for delivery state and rate limiting. `src/lib/upstash-idempotency.ts` applies a 30-day TTL to every guarded technical delivery-state write and implements the atomic fixed-window counter. `src/lib/lead-rate-limit.ts` derives HMAC-pseudonymous namespaced client keys and fails closed. The repository still contains no owner-notification code; that action is external in GoHighLevel. A controlled protected-Preview run exercised one completed persistence/delivery path and one rate-counter increment, as recorded below. This runtime evidence does not add tracked architecture or prove threshold enforcement, failure recovery, concurrency, triggered-message inbox receipt, Production operation, or launch acceptance.

The absence of chatbot code is an implementation gap against a **Confirmed** customer-facing chatbot requirement; it does not establish or imply a provider, model, architecture, or interface.

GoHighLevel is a **Confirmed** business/platform selection. The pushed source references only server-side environment-variable names, never confidential values, and adds no provider package dependency. External private-integration, pipeline, field, and Vercel-variable verification is recorded in `DEVELOPMENT_STATUS.md`; external configuration is not tracked repository architecture.

Decision D-018 confirms a lead-generation beta that requires verified CRM delivery. The clients, mocked tests, provisioned Upstash connection, D-030 safeguards, corrected D-031 sender evidence, published D-032 workflow, one successful controlled manual trigger, and one controlled website-driven protected-Preview run are implementation evidence, not Production acceptance. The Preview environment setting and latest branch Preview have `LEAD_DELIVERY_ENABLED=false`, Production remains `false`, and the earlier immutable enabled Preview remains access-protected. Triggered-message inbox receipt, workflow failure/recovery, human response, threshold and concurrency behavior, and Production end-to-end evidence remain missing.

## Controlled external runtime evidence — not repository architecture

On 2026-08-04, commit `3bac3ba` was exercised through an access-protected Vercel Preview using Standard Protection with Require Log In. `LEAD_DELIVERY_ENABLED` was temporarily set to `true` for Preview only; Production was explicitly kept `false`. Enabled deployment `CrJA8ve4qzNHneVLwEtkr5N15gJu` at `paintswitch-pp6wvxmih-paint-switch.vercel.app` reached Ready at 1:18:57 PM EDT.

Exactly one synthetic browser submission ran from 1:19:53 PM through 1:19:57 PM EDT. The browser displayed the exact success copy, `Your request was sent. A PaintSwitch team member will review the details and follow up.` Submission `a0c9e9cd-4e98-4f45-8c1f-16c9a31256ec` created GoHighLevel Contact `w1tEl1ktbKestabbkBr3` and Opportunity `11u1dIja7oMJXS4srkPu`; all expected Contact/Opportunity mappings and both UTM attribution values were observed. The published owner-notification workflow enrolled exactly once at 1:19:56 PM. Execution `01KZ6WM16S7WTFPM40NTEA9381` reported the internal-notification event as `Success` at 1:19:57 PM and finished. No SMS or other customer-facing workflow action ran.

The matching Upstash completed state contained a version, payload hash, provider IDs, completion phase, and updated timestamp, but none of the raw submitted name, email, phone, location, service, description, or preference fields. Its observed remaining TTL was 2,591,535 seconds, and the delivery lock was absent after completion. One Preview rate counter had value `1` with 101 seconds remaining. This proves a single hosted state/counter path; it does not establish a broader privacy classification or test the five-submission threshold, blocked response, concurrency, failure/retry behavior, or Production behavior.

After the test, the Preview environment setting and latest branch Preview were restored to `false`. Fresh disabled deployment `6NrFmAef7vgP3dm9iuC11DBYEJ1d` at `paintswitch-7qbi2cue9-paint-switch.vercel.app` reached Ready at 1:26:34 PM EDT, and Production remained `false`. The immutable enabled deployment URL remains access-protected. Triggered-message inbox receipt was not observed because the Outlook session was signed out; therefore the test verifies the website-to-Upstash-to-GoHighLevel-to-workflow-action path, not inbox delivery or complete launch operation.

## Deployment configuration

- The Git remote points to `paintswitch/paintswitch-web` on GitHub.
- The repository contains one GitHub Actions verification workflow; no successful remote run is yet recorded.
- The repository contains no tracked Vercel project configuration; `.vercel` is ignored.
- `next.config.ts` disables `X-Powered-By` and configures the verified static-page security-header baseline.
- Pushing `codex/lead-generation-beta` automatically creates Vercel Previews. Commit `3bac3ba` produced the protected enabled and disabled deployments recorded above. Production promotion/release and rollback remain unverified, and the apex still serves the prior `main` build.
- The external database `paintswitch-lead-idempotency` is connected to Vercel with five Sensitive Production-and-Preview variables. No value is recorded in the repository or documentation.

## Security and operational posture visible in the repository

- No application authentication or authorization is present. D-030's 30-day technical-record TTL and five-valid-submissions-per-client-IP-per-600-seconds rate limit are implemented and locally tested. Broader CRM/business/customer-data retention and deletion rules remain TBD.
- Server-only configuration validation, fixed provider hosts, provider timeouts, streamed response caps, generic public errors, durable state logic, and reconciliation exist locally. Confidential values are not present in source.
- The browser generates and reuses a UUID when an unchanged failed submission is retried and clears it after a `409` conflict. The server hashes the full normalized payload to detect submission-ID reuse with changed content.
- The 60-second lock and durable phases support at-most-one automatic create plus reconciliation. Every guarded technical-state write carries the 30-day expiry. One completed hosted state with a near-30-day remaining TTL and absent completed lock was observed in the controlled protected-Preview run. Failure/retry, concurrency, and Production behavior remain unverified, and no cross-provider exactly-once guarantee is claimed.
- The atomic limiter runs after schema validation and before GoHighLevel delivery. Its fixed 600-second window begins with the first valid request. Requests that fail origin, content, body, or schema validation do not consume quota; blocked attempts do not increment or extend the window. The sixth valid request returns `429` with the remaining `Retry-After`; unavailable limiting returns `503`. Deployed environments trust only a canonical single-IP `x-vercel-forwarded-for`; localhost uses one shared development identity. HMAC keys prevent raw-IP storage but use the Upstash token as the secret, so token rotation resets active pseudonymous buckets.
- Sanitized delivery reporting emits only a generic event category and validated submission UUID. No monitoring destination, alerting workflow, operator dashboard, or full observability path is present.
- Server validation, strict request-shape and email checking, a 16 KiB bounded stream, a five-second body-read deadline, exact same-origin production/local/preview checks, generic errors, and security response headers remain in place.
- Environment files are ignored by Git.
- The historical dependency report has been re-audited and partially remediated. Three transitive production package findings remain under the scoped exposure assessment in `DEVELOPMENT_STATUS.md`; owner risk disposition and upstream monitoring remain required.
- No operational runbook, monitoring configuration, incident process, or backup configuration is present.

## Architecture boundaries

Business approval and future architecture are documented separately:

- **Confirmed** product behavior belongs in `PRODUCT_REQUIREMENTS.md` and `DECISION_LOG.md`.
- Confirmed end-state outcomes and the GoHighLevel platform selection do not establish implemented architecture or release phasing.
- **Proposed** integrations and workflows belong in `OPEN_QUESTIONS.md` until approved.
- Requirement-to-implementation coverage belongs in `REQUIREMENTS_TRACEABILITY.md`; launch sequencing belongs in `LAUNCH_CHECKLIST.md`.
- This file must be updated only after architecture is verifiably present in the repository.
