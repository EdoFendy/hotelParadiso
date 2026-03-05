# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server (Next.js)
npm run dev:turbo    # Development with Turbopack (faster HMR)
npm run dev:reset    # Clean .next cache then start dev
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run clean        # Remove .next and tsconfig.tsbuildinfo
```

Note: `next.config.mjs` has `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`, so builds will not fail on type or lint errors.

## Architecture

**Framework**: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS
**UI**: shadcn/ui (Radix UI primitives) — components in `components/ui/`
**Fonts**: Lexend Deca (body), Montserrat (headings) via Google Fonts
**Animations**: Framer Motion + custom scroll animations (`components/scroll-animations.tsx`, `components/ScrollAnimationsClient.tsx`)

### Key Directories

- `app/` — App Router pages. The main homepage is a single-page layout in `app/page.tsx`. Additional SEO-targeted pages exist for specific search terms:
  - `app/hotel-castelbuono/`, `app/hotel-cefalu/`, `app/camere-castelbuono/`, `app/alloggio-castelbuono/`
- `app/api/booking/` — Three API routes: `availability` (GET), `create` (POST), `confirm` (POST)
- `components/` — Section-based components assembled in `app/page.tsx` (hero, about, rooms, reviews, gallery, FAQ, booking form, location, contact, footer, etc.)
- `lib/` — Core utilities:
  - `booking.ts` — All booking logic: iCal parsing/caching, availability checking, seasonal tariff calculation, file-based reservation persistence
  - `seo-schema.ts` — JSON-LD structured data (Hotel, LocalBusiness, FAQPage schemas)
  - `seo-utils.ts` — SEO helpers
  - `cookie-consent.ts` — Cookie banner logic
  - `sumup.ts` — SumUp payment integration
  - `utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `contexts/language-context.tsx` — IT/EN i18n via React context. All UI strings come from `t("key")` — translations are defined inline in this file (no external i18n library).

### Booking System

The booking system (`lib/booking.ts`) uses:
- **iCal feeds** from Booking.com (configured via env vars `BOOKING_ICAL_SINGLE`, `BOOKING_ICAL_DOUBLE`, `BOOKING_ICAL_TRIPLE`, `BOOKING_ICAL_QUAD`) with 30-minute in-memory cache
- **File-based storage** at `data/reservations.json` (auto-created at runtime, not committed)
- **Seasonal tariff bands** (A/B/C) with a 10% direct booking discount applied on top
- **Room counts** configured via env vars: `ROOMS_COUNT_SINGLE`, `ROOMS_COUNT_DOUBLE`, `ROOMS_COUNT_TRIPLE`, `ROOMS_COUNT_QUAD`

### SEO Structure

- `app/layout.tsx` — Global metadata, OG tags, geo meta tags, favicon config
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` — Auto-generated SEO files
- Each page exports its own `metadata` object for page-specific SEO
- JSON-LD injected via `<script type="application/ld+json">` in `app/page.tsx` using `generateCompleteHomeSchema()` from `lib/seo-schema.ts`
- `components/local-seo-section.tsx` — Visually hidden section with keyword-rich content for local SEO
