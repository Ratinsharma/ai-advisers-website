# AI Advisers — Cabinet · iMe training edition

**Current review version** · Exported 29 September 2026

The current combined AI Advisers marketing website. iMe training comes first, with three clear uses: EU AI Act literacy, multilingual onboarding and ongoing team training. Executive avatars, boardroom advisory, private AI and studio services remain discoverable.

Parchment surfaces, dark ink, terracotta accents and serif headings retain the Cabinet visual identity. The website is in English; the published iMe product capability is 32 languages.

## What is included

- Complete application source and existing public media assets.
- Package manifest, frozen Bun lockfile and build/tooling configuration.
- Version overview, change notes and contribution instructions.
- Standalone enquiry tests and a public company-policy fixture for source comparison.
- A validation workflow template for TypeScript, lint, build and enquiry tests; no automatic deployment.

## Run locally

Use Bun 1.4.2, the runtime used for this export.

```sh
git clone https://github.com/Ratinsharma/ai-advisers-website.git
cd ai-advisers-website
bun install --frozen-lockfile
bun run dev --host 127.0.0.1 --port 5173
```

Open http://127.0.0.1:5173/. The development server is separate from the existing workspace preview on port 8083; localhost links work only on the machine running them.

```sh
bun run typecheck
bun run lint
bun run build
```

See [docs/OVERVIEW.md](docs/OVERVIEW.md) for the page map and implementation notes.

## Enquiries and review status

Company enquiries prepare a draft in the visitor’s own email app. Opening the draft does not send it. Product demonstrations link to the existing iMe form and its separate privacy notice. No learner application or learner portal is included.

The website is a review build, not a deployed compliance service. Regulatory, security and historical product claims need owner substantiation before a marketing release. Native 200% browser zoom, OS reduced-motion switching, successful email-client handoff, external form delivery and production hosting were not verified in the website review. The unchanged company policy names GitHub Pages; future hosting must be reconciled with that policy. Publishing this source does not deploy the website or change the live policies.

## Version family

- [Cabinet · iMe training edition](https://github.com/Ratinsharma/ai-advisers-website)
- [Original Cabinet edition](https://github.com/Ratinsharma/ai-advisers-cabinet-original)
- [Enterprise Light · v1](https://github.com/Ratinsharma/ai-advisers-enterprise-light)
- [Portrait First · v2 documentation archive](https://github.com/Ratinsharma/ai-advisers-portrait-first-archive)

## Rights and publication scope

Public repository visibility is not an open-source licence grant. No new licence is assigned in this export. Company marks, historical client logos, portraits and other media retain their respective rights. Historical client marks do not identify current iMe customers.

Private research, prospect lists, sales documents, internal audit reports, credentials, environment files, runtime logs, dependencies and generated deployment outputs are excluded.
