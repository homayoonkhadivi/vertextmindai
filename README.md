# VertexMind AI — vertexmindai.com.au

Marketing site for **VertexMind AI**, an Australian AI consultancy founded by Homayoon Khadivi
(Senior AI Engineer). Static Next.js site on GitHub Pages, with live ML demos hosted on
Streamlit Community Cloud.

## Stack

| Concern        | Choice                                                         |
| -------------- | -------------------------------------------------------------- |
| Framework      | Next.js 15 (App Router, static export), React 19, TypeScript   |
| Styling        | Tailwind CSS 3, mobile-first, `prefers-reduced-motion` aware   |
| Forms          | Formspree                                                      |
| SEO            | Per-page metadata, OG image, `sitemap.xml`, `robots.txt`, JSON-LD |
| Analytics      | Plausible (optional, cookie-free)                              |
| Testing        | Playwright end-to-end on desktop + mobile (Pixel 7) viewports  |
| CI/CD          | GitHub Actions → GitHub Pages, post-deploy smoke tests         |
| Demo uptime    | Headless-browser keep-alive for Streamlit apps                 |

## Getting started

```bash
nvm use            # Node 20 (see .nvmrc)
npm ci
npm run dev        # http://localhost:3000
```

### Scripts

| Script               | What it does                                                  |
| -------------------- | ------------------------------------------------------------- |
| `npm run dev`        | Local dev server with hot reload                              |
| `npm run build`      | Static export to `out/`                                       |
| `npm run preview`    | Serve the built `out/` exactly as production does             |
| `npm run typecheck`  | Strict TypeScript check                                       |
| `npm run test:e2e`   | Playwright tests against `out/` (run `build` first)           |
| `npm run images`     | Regenerate WebP images, OG image and touch icon               |
| `npm run keep-alive` | Wake the Streamlit demo apps from your machine                |

First-time Playwright setup on Linux/WSL: `npx playwright install --with-deps chromium`.

## Project layout

```
src/
  app/                 routes, root layout/metadata, sitemap, robots, manifest
    [slug]/            industry pages (statically generated from data/industries.ts)
  components/
    layout/            navigation, footer, parallax background, analytics, JSON-LD
    sections/          home page sections
    ui/                reusable UI (demo drawer, booking button)
  config/site.ts       brand, contact, social links, feature flags
  data/industries.ts   industry content, use cases and case studies
assets/images/         original photos (source of truth for `npm run images`)
public/                generated, optimised assets served as-is
scripts/               image pipeline and Streamlit keep-alive
e2e/                   Playwright tests
```

To add an industry page, add an entry to `src/data/industries.ts` and a background image
in `assets/images/`, then run `npm run images`. The route, sitemap entry and structured
data are generated from the data file.

## Configuration

Optional integrations are switched on with build-time environment variables (see
`.env.example`). Locally, put them in `.env.local`. In production, add them as GitHub
**repository variables** (Settings → Secrets and variables → Actions → Variables):

| Variable                       | Effect                                       |
| ------------------------------ | -------------------------------------------- |
| `NEXT_PUBLIC_BOOKING_URL`      | Shows "Book a call" buttons (Cal.com/Calendly) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Enables Plausible analytics                  |

## Keeping the Streamlit demos awake

Streamlit Community Cloud puts apps to sleep after a period with no browser sessions.
A plain `curl` gets HTTP 200 from the sleep page and does not count as activity, so
`.github/workflows/keep-alive.yml` runs `scripts/keep-alive.mjs` every 6 hours. The
script opens each app in headless Chromium, clicks **"Yes, get this app back up!"** when
it is shown, and waits for the app to render. The job fails, and uploads a screenshot,
if an app does not come up.

GitHub disables scheduled workflows in repositories with no activity for 60 days. If the
keep-alive stops, re-enable it from the Actions tab or push a commit.

## Deployment

Pushing to `main` runs: dependency audit and secret scan → type check → build →
end-to-end tests → deploy to GitHub Pages → smoke test of every route. Pull requests run
everything except deploy.
