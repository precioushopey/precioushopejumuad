# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

Personal portfolio site for Precious Hope Jumuad (React 19 + TypeScript + Vite 6 + Tailwind CSS v4), deployed on Vercel.

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: `tsc -b && vite build` (type-check is part of the build)
- `npm run lint`: ESLint (flat config in `eslint.config.js`)
- `npm run preview`: serve the production build
- `npm run thumbs`: rebuild the WebP thumbnails
- `npm run icons`: rebuild the favicon set from `logo.png`
- There is no test framework configured.

## Project skills

Workflows live in `.claude/skills/`. Load the matching one before the work:

- `adding-project-or-post`: a new or changed project page or blog post (three places, data rules, Coming Soon flag)
- `writing-case-studies`: case study pages, `SimpleCaseStudy`, and the `CaseStudy.tsx` blocks
- `adding-site-images`: images, thumbnails, favicons, and what must never be published
- `editing-site-layout`: Shell, Rail, right column, Home, About, Projects, Blog, window styling
- `contact-form-api`: the contact form, `/api/contact`, contact links and the CV link

## Architecture

- **Routing is fully manual, in `src/App.tsx`.** Every project and blog post has its own hand-registered `<Route>` and import (`/projects/<slug>`, `/blogs/<slug>`).
- `vercel.json` rewrites all paths to `/` for client-side routing and keeps `/api/*` out of that rewrite.
- Project, blog and About pages are `React.lazy` routes. Lazy pages show `PageSkeleton` inside Shell's Suspense.
- **All routes are nested under the `Shell` layout route** (`src/components/shell/`). Shell provides the background, `TopBar`, the main `glass-panel` (the only `<main>`), the icon `Rail`, and a right column on some pages.
- Pages render only their own content. Never add a navbar or background to a page.
- Never put `overflow-x-hidden` on the Shell root (it breaks the sticky mobile rail). Use `overflow-x-clip`.
- **Each project and blog post is a standalone page component** in `src/projects/` or `src/blogs/`, with its content written inline in the JSX. There is no CMS or markdown pipeline.
- **Listing data lives in `src/data/`.** The `projects` and `blogPosts` arrays feed the listing pages, Home's Projects count and the top-bar search (`src/lib/search.ts`).
- Adding a project or post touches three places: the page file, a `<Route>` in `App.tsx`, and an entry in the matching `src/data/` array.
- **Pages are JSX only.** Everything in `src/pages/` renders. Page data lives in `src/data/`, logic in `src/hooks/` (`use-*.ts`), pure helpers in `src/lib/`. Hooks sit at the top of the component, called unconditionally.
- Home always shows Philippine time (`Asia/Manila`, `src/lib/manilaTime.ts`), never the visitor's timezone.
- The site is themed as a desktop OS: windows, title bars, widgets and notes (`WindowBar`, `DocumentWindow`, `FolderGroup`).

## Styling

- Tailwind v4 via `@tailwindcss/vite`, with no `tailwind.config`.
- Design tokens live in the `@theme` block in `src/index.css`: `font-display`, `bg-panel`, `bg-card`, `text-cream`, `border-line`, `bg-accent`/`text-accent` (honey yellow `#FFC93C`), `text-ink` (only on yellow or white surfaces), plus the `animate-fade-in*` animations.
- Custom utilities: `glass-panel`, `glass-card`, `pill`, `pill-outline` (use one, not both), `white-button`, `transparent-button`.
- The site is dark-themed.
- **Spacing:** gaps, padding, margins and `space-x/y` use only 0, 0.5, 1, 1.5, 2 and multiples of 3 (`gap-3`, `px-6`, `p-9`, ...). Never 4, 5, 8 or 10.
- Widths, heights, `size-` and offsets (`top-`, `left-`, `inset-`) still use multiples of 4 (`h-12`, ...).
- Raw CSS padding and margins follow the same rules, apart from pixel-exact alignment (the desktop rail indicator).
- **Breakpoints:** `lg` is redefined to 768px in `@theme` (`--breakpoint-lg: 48rem`), so `lg:`/`max-lg:` mean "tablet and up" / "phone". Hard-coded media queries in `src/index.css` use 768px to match. `xl` is still 1280px.
- **Text size:** never smaller than `text-xs` (12px), and no custom pixel sizes below it. Write sizes as Tailwind steps, never bracketed pixel values, and never spell such a class out in docs: Tailwind scans every file here and turns it into real CSS.
- The one exception is the "PH Time" label under the analog clock on Home, which uses a 10px custom size in `src/pages/home.tsx`.
- **Fonts:** Poppins is the UI font. The display font (Unbounded, `font-display`) is used only for the name in the top-bar greeting, and `.font-display` disables synthesized bold. Fonts load from Google Fonts in `index.html`. Fallback fonts with matching metrics (`Poppins Fallback`, `Unbounded Fallback` in `index.css`) stop text jumping on load.
- A global `:focus-visible` rule draws a yellow outline. A base rule gives every link, button, summary, select and label the pointer cursor (`cursor-help` on tooltip gauges still wins).
- **Icons:** Lucide via `react-icons/lu` (`Lu*` names). Don't import from other `react-icons` sets. Lucide has no filled variants, so active states use colour and a heavier `strokeWidth`.

## Assets

- Images are served from `public/assets/images/`, referenced by absolute path (`/assets/images/<group>/...`). See `adding-site-images` before adding, compressing or thumbnailing any.
- Anything in `public/` is reachable by URL even when no page links to it.
- OJT Connect portal screenshots are not shown (intellectual property): don't add them back without the user's say-so.
- The iBRGY capstone manuscript is private: don't link or copy it.

## SEO

- The head of every page is set in the browser by `useSeo` (called in `Shell`) from `src/lib/seo.ts`, using `src/data/site.json`, `src/data/seo.ts`, `src/data/seo.json` and each project or post's own data. Unknown addresses and `/profile` get `noindex`.
- `scripts/generate-seo.mjs` (`prebuild`) rewrites `public/sitemap.xml` and `public/llms.txt`. `scripts/prerender-meta.mjs` (`postbuild`) writes per-route `dist/<route>/index.html` for crawlers.
- So keep `title:`, `description:`, `image:`, `tags:`, `url:`/`to:` and `date:` in the data arrays as plain string literals.
- The OG and meta tags are in `index.html`. Full checklist: `docs/seo.md`.

## Security

- `vercel.json` sends a strict Content-Security-Policy: `script-src` is `self` only, so no inline scripts or handlers. Add any new outside domain for styles, fonts, images, frames or connections there.
- Secrets live only in Vercel environment variables (names in `.env.example`). `.env*` is gitignored.
- Run `npm audit` now and then. Full checklist: `docs/security.md`.
- `@vercel/analytics` is mounted in `App`. The privacy policy is `/privacy` (`src/data/legal.ts`; update `PRIVACY_UPDATED` when it changes).
