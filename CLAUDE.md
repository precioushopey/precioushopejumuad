# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Precious Hope Jumuad (React 19 + TypeScript + Vite 6 + Tailwind CSS v4), deployed on Vercel.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (type-check is part of the build)
- `npm run lint` — ESLint (flat config in `eslint.config.js`)
- `npm run preview` — serve the production build

There is no test framework configured.

## Architecture

- **Routing is fully manual, in `src/App.tsx`.** Every project and blog post has its own hand-registered `<Route>` and import (`/projects/<slug>`, `/blogs/<slug>`). Blog components are imported as `Blog1`, `Blog2`, ... `Blog16` (numbering has gaps, and doesn't follow date order). `vercel.json` rewrites all paths to `/` so client-side routing works on deploy.
- **All routes are nested under the `Shell` layout route** (`src/components/shell/`). `Shell` provides the fixed blurred, darkened background, the `TopBar` (greeting + `SearchPill`), the main `glass-panel` (the only `<main>`; on desktop only it scrolls), the floating icon `Rail` (on desktop a tall frosted side rail with square right corners, absolutely positioned inside the content row, 28rem tall, tucked under the panel's left edge; below `lg` a sticky bottom bar; last in the DOM for tab order), and a right column (`ProfileCard` + `LatestList`) shown only on `/`, `/about`, `/projects`, `/blog` (beside the panel at `xl`, at the bottom of the panel below). Below `lg` the page scrolls normally. Pages render only their own content and must not add their own navbar or background. Don't put `overflow-x-hidden` on the `Shell` root: it turns the root into a scroll container and breaks the sticky mobile rail (use `overflow-x-clip`).
- **Each project/blog is a standalone page component** in `src/projects/` or `src/blogs/`, with its content (copy, image paths, tags, design-step data) written inline in the JSX. There is no CMS or markdown pipeline.
- **Listing data lives in `src/data/`.** The `projects` array (`category` filter: frontend/design/socials/multimedia) and the `blogPosts` array feed the listing pages, the home-page counts, and the top-bar search (`src/lib/search.ts`). Adding a project or post means touching three places: the new page file, a `<Route>` in `App.tsx`, and an entry in the matching `src/data/` array.
- **Home is a widget dashboard** (`src/pages/home.tsx`): Featured pill tabs, recent-work list, clock + ring gauges, tool tiles, photo tiles. Skills and Contact render at the bottom of the About page. Project category filters live in the URL (`/projects?category=<c>`); `categories` is exported from `src/data/projects.ts`.
- **Styling:** Tailwind v4 via `@tailwindcss/vite` with no `tailwind.config`. The site is dark-themed. Design tokens live in the `@theme` block in `src/index.css`: `font-display`, `bg-panel`, `bg-card`, `text-cream`, `border-line`, `bg-accent`/`text-accent` honey yellow `#FFC93C`, `text-ink` (only on yellow/white surfaces), plus the `animate-fade-in*` animations. Custom utilities: `glass-panel`, `glass-card`, `pill`, `pill-outline` (use one, not both), `tile-outline`, `arrow-button`, `white-button`, `transparent-button`. Poppins is the UI font; the display font is used only for large accent words, and `.font-display` disables synthesized bold. A global `:focus-visible` rule draws a yellow outline. `text-glow` is a legacy no-op still referenced by old pages. Fonts load from Google Fonts in `index.html`.
- **Icons:** Lucide, via `react-icons/lu` (`Lu*` names). Don't import from other `react-icons` sets. Lucide has no filled variants, so the active rail item is shown with a yellow colour and a heavier stroke (`strokeWidth`) instead.
- **Assets:** images are served from `public/assets/images/` and referenced by absolute path (`/assets/images/...`). The OG/meta tags are in `index.html`. `@vercel/analytics` is mounted in `App`.
