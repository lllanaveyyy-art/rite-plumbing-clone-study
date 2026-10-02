# Rite Plumbing & Heating — NYC

A responsive Next.js website for residential and commercial plumbing in Manhattan, Brooklyn, and Queens.

[See the redesign previews and validation notes](docs/REDESIGN.md).

## Run locally

Requires Node.js 24 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Check the project

```bash
npm run check
```

This generates route types, runs ESLint and TypeScript, and creates a production build. The site uses Next.js 16.2, React 19, Tailwind CSS 4, Lucide icons, and self-hosted DM Sans through `next/font`.

For browser checks after the production build:

```bash
npx playwright install chromium
npm run test:ui
```

The browser checks cover responsive layouts, service URL compatibility, menus, FAQ interactions, form validation, the generated email draft, and the 404 page. They do not send emails or book appointments.

## Customer journeys

- **Book a service:** opens the existing Rite Plumbing Housecall Pro calendar.
- **Call:** uses the company’s existing phone number, including persistent mobile actions.
- **Email a request:** validates the form, prepares a draft, and lets the visitor review and send it through their email app. No backend delivery or submission is claimed.
- **Building documents:** links to the company’s existing document submission page.
- **Service information:** 14 service pages, with the existing legacy URL aliases preserved.

The homepage, service index, service detail pages, company page, contact page, advice archive, six articles, video page, and 404 page share one design system. The company photographs are retained from the original project. No customer testimonials, ratings, discounts, or guaranteed arrival times are invented.

## Deployment and metadata

The project retains its existing Vercel-compatible setup and standalone output. Deploy from the desired Git branch in Vercel.

Canonical URLs and the sitemap use `NEXT_PUBLIC_SITE_URL` when provided, otherwise the Vercel production/deployment hostname. Set `NEXT_PUBLIC_SITE_URL` to the final site origin if using another host or a custom domain. Local builds fall back to `http://localhost:3000`. Vercel preview builds are marked `noindex` and disallowed in `robots.txt`.

Each main page and service has a unique title and description. Legacy service pages point to their canonical `/services/` URL. The homepage includes structured business information without unsupported review ratings.

## Project layout

```text
src/app/                    Pages, metadata, sitemap, and robots.txt
src/components/rite-plumbing.tsx       Shared layout and page sections
src/components/rite-interactions.tsx   Navigation and email request form
src/lib/rite-content.ts      Company details, services, FAQs, and articles
src/lib/metadata.ts          Page metadata and configured origin
public/images/riteplumbing/  Original company photography
```

The codebase originated from JCodesMore’s AI Website Cloner Template. The original license and agent guidance are retained.
