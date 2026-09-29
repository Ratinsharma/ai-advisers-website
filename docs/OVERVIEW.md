# Version overview

The current combined AI Advisers marketing website. iMe training comes first, with three clear uses: EU AI Act literacy, multilingual onboarding and ongoing team training. Executive avatars, boardroom advisory, private AI and studio services remain discoverable.

Parchment surfaces, dark ink, terracotta accents and serif headings retain the Cabinet visual identity. The website is in English; the published iMe product capability is 32 languages.

## Page map

- `/`
- `/ime`
- `/live-trainer`
- `/eu-ai-act`
- `/onboarding`
- `/team-training`
- `/ime/executive`
- `/advisory`
- `/private-ai`
- `/studio`
- `/about`
- `/founder`
- `/contact`
- `/privacy`

## Source guide

| Location | Purpose |
|---|---|
| `src/routes` | TanStack routes and page copy |
| `src/components/site` | Shared marketing layout and navigation |
| `src/styles.css` | Typography, palette and responsive styling |
| `public` | Existing public images and media posters |
| `vite.config.ts` | TanStack/Vite build configuration |
| `bun.lock` | Reproducible dependency versions |

React, TypeScript, TanStack Start/Router, Tailwind CSS and Vite power the application. The inherited build produces server output; it must not be assumed to work as a plain static GitHub Pages upload. No deployment workflow is included.

## Version comparison

| Version | Leading idea | Source availability |
|---|---|---|
| Enterprise Light | Enterprise service presentation; pearl/gold | Complete app |
| Portrait First | Founder portrait transition | Notes only |
| Original Cabinet | Editorial executive-first manifesto; parchment/terracotta | Complete app |
| Cabinet iMe training | AI literacy, onboarding and team training first | Complete app, latest |
