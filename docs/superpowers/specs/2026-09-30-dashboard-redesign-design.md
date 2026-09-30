# Dashboard Redesign — Design

Date: 2026-09-30
Branch: `dashboard-redesign`
Reference: `Purple Elegant Gradient Modern UI Desktop Wallpaper.png` (a dark dashboard UI: floating rail, greeting + pill search, large main panel with pill tabs and widget cards, right column with profile card and thumbnail list).

## Goal

Re-layout the whole portfolio to feel like the reference dashboard: floating rail, greeting header, big rounded main panel with pill tabs and widget cards, and a right column (profile + latest list). Dark translucent cards, cream text, and the existing honey-yellow accent (`#FFC93C`) in place of the reference's purple. Content, copy and routes do not change.

## Decisions (agreed with the owner)

- **Scope:** the shell plus every page. Detail pages (`src/projects/*`, `src/blogs/*`) get the new frame and button styles only, with no layout rewrite.
- **Look:** dark, warm near-black-brown translucent cards, cream text, thin cream/yellow outlines, yellow for active states and buttons. No purple.
- **Widgets kept from the reference:** live analog clock, two ring gauges, outlined square tiles, photo tiles, list rows with a "⋮" menu, profile card with a "Profile" chip.
- **Not invented:** no social handle. The profile card shows name, role ("Computer Engineer · UI/UX Designer") and a short bio taken from existing About copy.

## 1. Look and tokens (`src/index.css`)

New tokens in `@theme`:

- `--color-panel` (about `rgb(28 20 16 / 0.78)`), `--color-card` (about `rgb(40 29 22 / 0.72)`), `--color-cream` (about `#f5ead6`), `--color-line` (about `rgb(245 234 214 / 0.35)`).
- `--color-accent` and `--color-ink` stay. Text on dark surfaces uses `text-cream`; ink is used only on yellow surfaces.

Utilities:

- `glass-panel` and `glass-card` are re-skinned dark, with the same blur and a `backdrop-filter` fallback of a near-opaque dark fill.
- New `pill` (filled dark-tinted pill), `pill-outline` (thin cream/yellow outline, used for the active tab) and `tile-outline` (outlined rounded square).
- `arrow-button` stays yellow.
- `white-button` and `transparent-button` stay as aliases restyled for the dark theme, so the older pages keep working.
- `text-glow` stays a no-op.
- `shell-bg` keeps the blurred photo and gets a dark gradient overlay for text contrast.
- The display font stays limited to a few large words; `.font-display` keeps `font-synthesis-weight: none`.

## 2. Shell (`src/components/shell/`)

`Shell` becomes a grid with these regions.

- **Rail:** floating frosted pill that overlaps the panel's left edge. The active item shows a yellow vertical indicator bar. A profile icon sits at the bottom (links to `/about`). Below `lg` it stays the sticky bottom bar. The Rail is after the content in the DOM and uses `lg:order-first`; the Blog item also matches `/blogs/`.
- **Header (`TopBar`):** left "Hello, I'm Precious Hope" (large), right the existing `SearchPill` restyled as an outlined pill.
- **Main panel:** the only `<main>`; page content renders here. On desktop the panel scrolls internally and the page does not; below `lg` the page scrolls.
- **Right column** (new `RightColumn` = `ProfileCard` + `LatestList`):
  - Shown on `/`, `/about`, `/projects`, `/blog`. Hidden on detail routes (`/projects/*`, `/blogs/*`), which then use the full panel width.
  - At `xl` and above it is a fixed-width column beside the panel. Below `xl` it renders under the panel.
  - `ProfileCard`: round photo, name, role, short bio, "Profile" chip.
  - `LatestList`: 3 rows (thumbnail, title, one-line description, "⋮" menu). Rows are the first 2 entries of the `projects` array plus the newest blog post by `date` (projects have no date, so array order is the featured order). The menu links to the item.
- Keep from the current shell: `overflow-x-clip` (never `overflow-x-hidden`) on the root, instant scroll reset on route change, and the `Escape`/`Enter` search behavior.

## 3. Pages

- **Home:** panel title "Featured" with pill tabs (All / Frontend / Design / Socials / Multimedia) that link into `/projects` with the category preselected. Widgets: a list card of recent work; a strip with the live analog clock (SVG, updates each second, decorative, `aria-hidden`) and two ring gauges for project and post counts; a row of `tile-outline` tiles using existing tool images (Figma, HTML, CSS, JS, React, Tailwind and similar); three photo tiles of the first three projects in the `projects` array. The "recent work" list card uses the same order.
- **Projects:** panel title, pill category filters, project rows or tiles in the dark card style. Reads the category from the URL so Home's tabs land correctly.
- **Blog:** panel title and blog rows in the same style.
- **About:** sections become dark cards; Skills and Contact stay at the bottom.
- **Detail pages:** new frame and button styles only. Any hard-coded light-theme text or backgrounds that lose contrast on the dark panel are fixed per page.
- Routing, `src/data/` shape and all copy are unchanged. New shared pieces go under `src/components/` (`ProfileCard`, `LatestList`, `AnalogClock`, `RingGauge`, `PillTabs`).

## 4. Responsive and accessibility

- Breakpoints: `lg` switches rail from bottom bar to side rail; `xl` puts the right column beside the panel.
- Text contrast on dark cards must stay readable; the panel background is opaque enough to hold contrast over the photo.
- Landmarks: one `<main>`, `<nav aria-label="Main">`, `<header>`. Decorative graphics (clock, gauges) are `aria-hidden`; gauge values are also given as text.
- Keyboard: tab order is header, content, right column, then nav; every pill, tile and "⋮" menu is focusable with a visible focus ring.

## 5. Verification

There is no test framework. For each step: `npm run build` (includes `tsc -b`) and `npm run lint`. At the end, check every listing page and a sample of detail pages in Chrome at 1440px, 1024px and 360px: rail position, sticky bottom bar, search, filters, right-column visibility, and contrast.

## 6. Order of work (one commit per step)

1. Tokens and utilities
2. Shell, Rail, TopBar, right column
3. Home
4. Projects, Blog, About
5. Detail-page contrast pass
6. Update `CLAUDE.md` (new shell and utilities) and final check

## Out of scope

Changing copy or routes, a CMS, dark/light toggle, new pages, and any purple recolor.
