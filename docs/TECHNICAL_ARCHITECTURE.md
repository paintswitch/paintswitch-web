# PaintSwitch technical architecture

Last repository inspection: 2026-07-31

This document records only facts verified from the repository. It does not treat planned or proposed systems as implemented.

## Repository structure

```text
paintswitch-web/
├── public/                 Five SVG assets
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── buttons.tsx
│       ├── footer.tsx
│       ├── header.tsx
│       ├── hero.tsx
│       ├── how-it-works.tsx
│       ├── section-heading.tsx
│       ├── service-card.tsx
│       └── trust-bar.tsx
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
| Next.js | `16.2.10` | `16.2.10` |
| React | `19.2.4` | `19.2.4` |
| React DOM | `19.2.4` | `19.2.4` |
| TypeScript | `^5` | `5.9.3` |
| Tailwind CSS | `^4` | `4.3.3` |
| Tailwind PostCSS plugin | `^4` | `4.3.3` |
| ESLint | `^9` | `9.39.5` |
| eslint-config-next | `16.2.10` | `16.2.10` |
| Node type definitions | `^20` | `20.19.43` |
| React type definitions | `^19` | `19.2.17` |
| React DOM type definitions | `^19` | `19.2.3` |

The repository does not declare a Node.js runtime version through an `engines` field or a checked-in runtime-version file.

## Application model

- The application uses the Next.js App Router under `src/app`.
- `src/app/layout.tsx` provides the root HTML layout and static PaintSwitch metadata.
- `src/app/page.tsx` composes the single authored page at `/` from reusable presentational components.
- No component contains a `use client` directive. The inspected components render without application-defined client state or effects.
- Mobile menu behavior uses the native HTML `<details>` element.
- Navigation and calls to action use plain anchor links, primarily to sections on the same page.
- No authored dynamic routes, API routes, route handlers, middleware, server actions, or background jobs are present.

## Rendering and routes

- The repository source defines the `/` page plus the favicon resource.
- Existing ignored build output contains manifests for `/`, `/favicon.ico`, and framework-generated global-error/not-found pages. Generated output is not treated as lasting architecture documentation.
- No dynamic route parameters or runtime data-fetching code are present in the tracked source.

## Component organization

- `Header` contains brand identity, primary navigation, a desktop call to action, and native mobile navigation.
- `Hero` contains the primary positioning copy and a CSS-built room illustration.
- `TrustBar` displays four static commitments.
- `ServiceCard` renders static service descriptions and text-symbol icons.
- `HowItWorks` displays four static process steps.
- `SectionHeading` provides shared section-heading presentation.
- `PrimaryButton` and `SecondaryButton` are styled anchor components, not form buttons.
- `Footer` contains static navigation, contact text, legal placeholders, and the current year.
- `page.tsx` contains the service list, benefits, page sections, placeholder reviews, service-area copy, and contact call to action.
- The current header brand mark is rendered from text and a styled “P”; no repository asset is verified as a final production logo following the owner-preferred paint-roller-with-paint-behind direction.

## Styling

- Tailwind CSS is loaded through `@import "tailwindcss"` in `src/app/globals.css`.
- PostCSS loads `@tailwindcss/postcss`.
- Most presentation uses Tailwind utility classes embedded in JSX.
- `globals.css` defines background and foreground variables, system font stacks, smooth scrolling, selection colors, and reduced-motion overrides.
- No external webfont import is present in the root layout.
- The project does not contain a separate design-token package or component library.

## TypeScript and module configuration

- TypeScript runs in strict mode with `noEmit` and bundler module resolution.
- JSX uses the `react-jsx` transform.
- The `@/*` path alias maps to `src/*`.
- JavaScript files are allowed by configuration, though the authored application source inspected is TypeScript/TSX.
- Next.js supplies its TypeScript plugin.

## Linting and build commands

- `npm run dev` runs `next dev`.
- `npm run build` runs `next build`.
- `npm run start` runs `next start`.
- `npm run lint` runs `eslint`.
- ESLint uses Next.js Core Web Vitals and TypeScript configurations.
- No test command, test framework, coverage configuration, or tracked automated test files are present.

## Data and integrations

The tracked repository contains no implementation of:

- a database or persistence layer;
- API endpoints or external API clients;
- authentication or customer accounts;
- quote storage or pricing services;
- file/photo upload;
- checkout, payments, or deposits;
- booking, scheduling, or calendar integration;
- chatbot or AI provider;
- CRM integration;
- analytics or conversion tracking;
- email, SMS, or automated follow-up;
- human-handoff tooling.

No provider for any of these capabilities can be inferred from the repository.

The absence of chatbot code is an implementation gap against a **Confirmed** customer-facing chatbot requirement; it does not establish or imply a provider, model, architecture, or interface.

GoHighLevel is a **Confirmed** business/platform selection, but the repository contains no verified GoHighLevel account configuration, dependency, client, API call, field mapping, workflow, credential reference, payment-processor setup, or enabled-module evidence. The platform decision must not be documented here as implemented architecture until repository or environment evidence verifies it.

## Deployment configuration

- The Git remote points to `paintswitch/paintswitch-web` on GitHub.
- The repository contains no tracked GitHub Actions workflows.
- The repository contains no tracked Vercel project configuration; `.vercel` is ignored.
- `next.config.ts` exports an otherwise empty `NextConfig` object.
- A historical deployment report is recorded in `DEVELOPMENT_STATUS.md`; it is not verified architecture evidence.

## Security and operational posture visible in the repository

- No application authentication, authorization, secrets-handling code, data-retention controls, rate limiting, or application logging is present.
- Environment files are ignored by Git.
- A historical dependency-install report identified untriaged vulnerabilities; see `DEVELOPMENT_STATUS.md`.
- No operational runbook, monitoring configuration, incident process, or backup configuration is present.

## Architecture boundaries

Business approval and future architecture are documented separately:

- **Confirmed** product behavior belongs in `PRODUCT_REQUIREMENTS.md` and `DECISION_LOG.md`.
- Confirmed end-state outcomes and the GoHighLevel platform selection do not establish implemented architecture or release phasing.
- **Proposed** integrations and workflows belong in `OPEN_QUESTIONS.md` until approved.
- Requirement-to-implementation coverage belongs in `REQUIREMENTS_TRACEABILITY.md`; launch sequencing belongs in `LAUNCH_CHECKLIST.md`.
- This file must be updated only after architecture is verifiably present in the repository.
