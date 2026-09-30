# Dashboard Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-layout the whole portfolio as a dark dashboard (floating rail, greeting header, big rounded panel with pill tabs and widget cards, profile + latest right column) using the honey-yellow accent instead of purple.

**Architecture:** `Shell` becomes a grid: `TopBar` (greeting + search) over a row of `[main panel | right column]`, with the `Rail` as the last DOM child (bottom bar on mobile, floating side rail overlapping the panel on `lg`). Dark look comes from new `@theme` tokens and re-skinned `glass-*` utilities in `src/index.css`, so old pages inherit it. New small components (`ProfileCard`, `LatestList`, `AnalogClock`, `RingGauge`, `PillTabs`) are shared by Home and the right column.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4 (`@theme` + `@utility`, no config file), react-router-dom, react-icons.

**Spec:** `docs/superpowers/specs/2026-09-30-dashboard-redesign-design.md`

## Global Constraints

- Accent stays `#FFC93C` (`--color-accent`); no purple anywhere.
- All copy, routes and the `src/data/` shapes stay as they are. Do not invent a social handle.
- Exactly one `<main>` (in `Shell`); pages render `<div>`/`<section>`, never `<main>`.
- Never put `overflow-x-hidden` on the `Shell` root (use `overflow-x-clip`); the mobile rail must stay sticky.
- `.font-display` keeps `font-synthesis-weight: none`; the display font is used only for large accent words.
- Keep `white-button`, `transparent-button`, `text-glow` (no-op), `arrow-button`, `card-hover` defined; old pages use them.
- Keep search behavior: Escape closes the list, Enter navigates only while the list is showing.
- Keep instant scroll reset on route change (`behavior: "instant"`).
- Decorative graphics (clock, gauges) are `aria-hidden` or labelled with text; every interactive element is keyboard-focusable with a visible focus ring.
- Work happens on branch `dashboard-redesign`. Git needs `-c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad` (dubious-ownership check); do not change global git config.
- Every commit message ends with the line `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.
- There is no test framework. "Tests" in this plan are `npm run build` (includes `tsc -b`), `npm run lint`, and the browser checks written in each task.

## Review Focus

1. `/projects?category=bogus` (or any unknown value) must fall back to "All", not show an empty page. Pinned in Task 4.
2. An unknown route (NotFound) and every detail route must show no right column, no highlighted rail icon (except Projects/Blog for their detail pages), and must not crash. Pinned in Task 2.
3. At 360px there is no horizontal scroll, and the sticky bottom bar stays visible above the stacked right column at the end of the page. Pinned in Task 2.
4. The search dropdown must be readable on the dark theme and keep its keyboard behavior (Escape hides, Enter only with list visible). Pinned in Task 2.
5. The analog clock must clear its interval on unmount (React StrictMode double-mounts in dev) and never show a wrong hand angle at hour/minute wrap (e.g. 12:59:59 to 1:00:00). Pinned in Task 3.
6. A category with zero projects must show an empty-state message, not a blank grid. Pinned in Task 4.

---

## File Structure

- Modify `src/index.css` — tokens, dark `glass-panel`/`glass-card`, new `pill`, `pill-outline`, `tile-outline`, dark `transparent-button`, border color, background overlay.
- Modify `src/components/shell/Shell.tsx` — grid layout, right-column visibility.
- Modify `src/components/shell/Rail.tsx` — floating rail, indicator bar, profile avatar.
- Modify `src/components/shell/TopBar.tsx` — greeting + search.
- Modify `src/components/shell/SearchPill.tsx` — dark restyle.
- Create `src/components/shell/RightColumn.tsx` — `ProfileCard` + `LatestList` stack.
- Create `src/components/ProfileCard.tsx`, `src/components/LatestList.tsx`.
- Create `src/data/latest.ts` — `latestItems()`.
- Create `src/components/AnalogClock.tsx`, `src/components/RingGauge.tsx`, `src/components/PillTabs.tsx`.
- Modify `src/data/projects.ts` — export `categories` and `Category`.
- Modify `src/pages/home.tsx` (rewrite), `src/pages/projects.tsx` (rewrite), `src/pages/blog.tsx`, `src/pages/about.tsx`.
- Modify 12 files in `src/blogs/`, `src/components/ContactSection.tsx`, `src/components/SkillsSection.tsx`, `src/projects/subay.tsx` — contrast pass.
- Modify `CLAUDE.md`.

---

### Task 1: Dark tokens and utilities

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/shell/Shell.tsx:17` (add `text-cream` to the root so the site is readable at this commit)

**Interfaces:**
- Produces: theme colors `cream`, `panel`, `card`, `line` (so `text-cream`, `bg-cream/10`, `border-line`, `bg-line` exist); utilities `glass-panel`, `glass-card` (dark), `pill`, `pill-outline`, `tile-outline`.

- [ ] **Step 1: Add tokens to `@theme`**

In `src/index.css`, directly under `--color-ink: #1f1a17;` add:

```css
  --color-cream: #f5ead6;
  --color-panel: rgb(28 20 16 / 0.8);
  --color-card: rgb(40 29 22 / 0.78);
  --color-line: rgb(245 234 214 / 0.35);
```

- [ ] **Step 2: Make borders visible on dark**

In the `@layer base` `:root` block replace `--border-color: rgb(31 26 23 / 0.12);` with:

```css
    --border-color: rgb(245 234 214 / 0.2);
```

- [ ] **Step 3: Darken the background**

Replace the `background:` line of `@utility shell-bg` with:

```css
  background:
    linear-gradient(rgb(14 9 6 / 0.55), rgb(14 9 6 / 0.72)),
    center / cover no-repeat url("/assets/images/background.jpg");
```

- [ ] **Step 4: Re-skin `glass-panel` and `glass-card`**

Replace the whole `@utility glass-panel { … }` and `@utility glass-card { … }` blocks with:

```css
/* The big main panel. Falls back to a near-opaque dark fill without backdrop-filter. */
@utility glass-panel {
  border-radius: 2.5rem;
  background: var(--color-panel);
  border: 1px solid rgb(245 234 214 / 0.14);
  box-shadow: 0 24px 70px rgb(0 0 0 / 0.35);
  -webkit-backdrop-filter: blur(24px) saturate(1.1);
  backdrop-filter: blur(24px) saturate(1.1);

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    background: rgb(28 20 16 / 0.96);
  }
}

/* Cards inside the panel and the right column. */
@utility glass-card {
  border-radius: 2rem;
  background: var(--color-card);
  border: 1px solid rgb(245 234 214 / 0.12);
  box-shadow: 0 10px 28px rgb(0 0 0 / 0.25);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    background: rgb(40 29 22 / 0.96);
  }
}
```

- [ ] **Step 5: Add pill and tile utilities, dark `transparent-button`**

After `@utility arrow-button { … }` add:

```css
/* Filled pill (inactive tab). */
@utility pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid transparent;
  background: rgb(245 234 214 / 0.1);
  color: var(--color-cream);
  padding: 0.4rem 1.4rem;
  font-size: 0.875rem;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgb(245 234 214 / 0.2);
  }
}

/* Outlined pill (active tab). Self-contained: use instead of `pill`, not with it. */
@utility pill-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1.5px solid var(--color-accent);
  background: rgb(255 201 60 / 0.14);
  color: var(--color-accent);
  padding: 0.4rem 1.4rem;
  font-size: 0.875rem;
}

/* Outlined rounded square (tool tiles). No background so callers can add one. */
@utility tile-outline {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--color-line);
  border-radius: 1.25rem;
}
```

Replace `@utility transparent-button { … }` with:

```css
@utility transparent-button {
  @apply inline-flex items-center justify-center px-6 py-1.5 text-xs sm:text-base rounded-full bg-cream/10 border-[var(--color-line)] text-cream backdrop-blur-sm font-medium transition-all duration-300 hover:bg-cream/20 hover:scale-105 active:scale-95 cursor-pointer;
}
```

- [ ] **Step 6: Cream text on the shell root**

In `src/components/shell/Shell.tsx` change the root div class from
`"relative min-h-dvh overflow-x-clip lg:h-dvh lg:overflow-hidden"` to
`"relative min-h-dvh overflow-x-clip text-cream lg:h-dvh lg:overflow-hidden"`.

- [ ] **Step 7: Verify**

Run: `npm run build && npm run lint`
Expected: both succeed with no errors.

- [ ] **Step 8: Commit**

```bash
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad add src/index.css src/components/shell/Shell.tsx
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad commit -m "Add dark dashboard tokens and utilities

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Shell, rail, top bar, search, right column

**Files:**
- Create: `src/data/latest.ts`, `src/components/ProfileCard.tsx`, `src/components/LatestList.tsx`, `src/components/shell/RightColumn.tsx`
- Modify: `src/components/shell/Shell.tsx`, `src/components/shell/Rail.tsx`, `src/components/shell/TopBar.tsx`, `src/components/shell/SearchPill.tsx`

**Interfaces:**
- Consumes: Task 1 tokens/utilities (`glass-panel`, `glass-card`, `text-cream`, `border-line`, `white-button`).
- Produces: `latestItems(): LatestItem[]` from `src/data/latest.ts`, where `LatestItem = { title: string; description: string; image: string; to: string }`; `<ProfileCard />`, `<LatestList />`, `<RightColumn />` (no props).

- [ ] **Step 1: Create `src/data/latest.ts`**

```ts
import { projects } from "./projects";
import { blogPosts } from "./blogPosts";

export type LatestItem = {
  title: string;
  description: string;
  image: string;
  to: string;
};

// Projects have no date, so array order is the featured order; the blog post is the newest by date.
export const latestItems = (): LatestItem[] => {
  const items: LatestItem[] = projects.slice(0, 2).map((p) => ({
    title: p.title,
    description: p.description,
    image: p.image,
    to: p.url,
  }));
  const newest = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (newest) {
    items.push({
      title: newest.title,
      description: newest.description,
      image: newest.image,
      to: newest.to,
    });
  }
  return items;
};
```

- [ ] **Step 2: Create `src/components/ProfileCard.tsx`**

```tsx
import { Link } from "react-router-dom";

export const ProfileCard = () => (
  <section aria-label="Profile" className="glass-card relative p-6 text-center">
    <span className="absolute left-5 top-5 rounded-full border border-line px-3 py-0.5 text-xs">
      Profile
    </span>
    <img
      src="/assets/images/profile.jpg"
      alt="Precious Hope T. Jumuad"
      className="mx-auto mt-4 h-36 w-36 rounded-full border-2 border-line object-cover"
    />
    <h2 className="mt-4 text-2xl font-medium">Precious Hope</h2>
    <p className="text-sm text-accent">Computer Engineer · UI/UX Designer</p>
    <p className="mt-3 text-sm leading-6 text-cream/80">
      Computer Engineering graduate who believes design and technology should
      make life easier, more beautiful, and more meaningful.
    </p>
    <Link to="/about" className="white-button mt-4">
      About me
    </Link>
  </section>
);
```

- [ ] **Step 3: Create `src/components/LatestList.tsx`**

```tsx
import { Link } from "react-router-dom";
import { MdMoreVert } from "react-icons/md";
import { latestItems } from "../data/latest";

export const LatestList = () => (
  <section aria-label="Latest" className="glass-card space-y-3 p-4">
    <h2 className="px-1 text-sm text-cream/70">Latest</h2>
    {latestItems().map((item) => (
      <div
        key={item.to}
        className="flex items-center gap-3 rounded-2xl bg-black/20 p-2.5"
      >
        <Link to={item.to} className="flex min-w-0 flex-1 items-center gap-3 text-left">
          <img
            src={item.image}
            alt=""
            className="h-14 w-16 shrink-0 rounded-xl object-cover"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium">{item.title}</span>
            <span className="line-clamp-2 block text-xs text-cream/70">
              {item.description}
            </span>
          </span>
        </Link>
        {/* Mouse convenience only; the row link above is the keyboard target. */}
        <Link
          to={item.to}
          tabIndex={-1}
          aria-hidden
          className="rounded-full p-1.5 hover:bg-cream/15"
        >
          <MdMoreVert size={20} />
        </Link>
      </div>
    ))}
  </section>
);
```

- [ ] **Step 4: Create `src/components/shell/RightColumn.tsx`**

```tsx
import { LatestList } from "../LatestList";
import { ProfileCard } from "../ProfileCard";

export const RightColumn = () => (
  <div className="flex flex-col gap-4">
    <ProfileCard />
    <LatestList />
  </div>
);
```

- [ ] **Step 5: Rewrite `src/components/shell/TopBar.tsx`**

```tsx
import { SearchPill } from "./SearchPill";

export const TopBar = () => (
  <header className="flex items-center justify-between gap-4 lg:pl-8">
    <p className="min-w-0 truncate text-xl font-medium sm:text-3xl">
      Hello, I’m{" "}
      <span className="font-display text-accent">Precious Hope</span>
    </p>
    <SearchPill />
  </header>
);
```

- [ ] **Step 6: Restyle `SearchPill.tsx` (exact replacements)**

1. Label class: replace
`"flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 shadow-sm"`
with `"flex items-center gap-2 rounded-full border-2 border-line bg-black/25 px-4 py-2 text-cream"`.
2. Input class: replace `"w-28 bg-transparent text-sm outline-none placeholder:text-ink/50 sm:w-44"` with `"w-28 bg-transparent text-sm outline-none placeholder:text-cream/60 sm:w-44 lg:w-64"`.
3. Dropdown `ul` class: replace `"glass-card absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden bg-white/95 p-2 text-left sm:w-96"` with `"glass-card absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden p-2 text-left sm:w-96"`.
4. "No matches": replace `text-ink/60` with `text-cream/60` in `<li className="px-3 py-2 text-sm text-ink/60">`.
5. Active row: replace `i === active ? "bg-accent/40" : ""` with `i === active ? "bg-accent/25" : ""`.
6. Kind label: replace `text-[10px] font-semibold uppercase tracking-wider text-ink/60` with `text-[10px] font-semibold uppercase tracking-wider text-cream/60`.

- [ ] **Step 7: Rewrite `src/components/shell/Rail.tsx`**

Keep the existing `items` array (with `alsoMatch`) and imports; add `Link`, and `hidden`/avatar. Full file:

```tsx
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  MdOutlineArticle,
  MdOutlineHome,
  MdOutlinePersonOutline,
  MdOutlineWorkOutline,
} from "react-icons/md";

const items: {
  to: string;
  label: string;
  Icon: typeof MdOutlineHome;
  end: boolean;
  alsoMatch?: string;
}[] = [
  { to: "/", label: "Home", Icon: MdOutlineHome, end: true },
  { to: "/about", label: "About", Icon: MdOutlinePersonOutline, end: false },
  {
    to: "/projects",
    label: "Projects",
    Icon: MdOutlineWorkOutline,
    end: false,
  },
  // Posts live under /blogs/<slug>, the listing under /blog.
  {
    to: "/blog",
    label: "Blog",
    Icon: MdOutlineArticle,
    end: false,
    alsoMatch: "/blogs/",
  },
];

export const Rail = () => {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="Main"
      className="sticky bottom-4 z-40 mx-auto flex w-fit gap-3 rounded-full border border-line bg-black/50 p-2 shadow-lg backdrop-blur-md lg:absolute lg:bottom-auto lg:left-10 lg:top-[calc(50%+2.5rem)] lg:mx-0 lg:-translate-y-1/2 lg:flex-col lg:gap-4 lg:p-3"
    >
      {items.map(({ to, label, Icon, end, alsoMatch }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          aria-label={label}
          title={label}
          className={({ isActive }) => {
            const on = isActive || (alsoMatch && pathname.startsWith(alsoMatch));
            return `relative flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              on
                ? "bg-accent text-ink lg:before:absolute lg:before:-left-[1.05rem] lg:before:h-7 lg:before:w-1 lg:before:rounded-full lg:before:bg-accent lg:before:content-['']"
                : "text-cream hover:bg-cream/15"
            }`;
          }}
        >
          <Icon size={22} />
        </NavLink>
      ))}
      <Link
        to="/about"
        aria-label="About me"
        className="mt-2 hidden rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:block"
      >
        <img
          src="/assets/images/profile.jpg"
          alt=""
          className="h-11 w-11 rounded-full border border-line object-cover"
        />
      </Link>
    </nav>
  );
};
```

- [ ] **Step 8: Rewrite `src/components/shell/Shell.tsx`**

```tsx
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Rail } from "./Rail";
import { RightColumn } from "./RightColumn";
import { TopBar } from "./TopBar";

// Only the top-level pages get the profile/latest column; detail pages use the full panel.
const WITH_SIDEBAR = new Set(["/", "/about", "/projects", "/blog"]);

export const Shell = () => {
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLElement>(null);
  const path = pathname.replace(/\/+$/, "") || "/";
  const showSide = WITH_SIDEBAR.has(path);

  // The panel scrolls internally on desktop, the window on mobile.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="relative min-h-dvh overflow-x-clip text-cream lg:h-dvh lg:overflow-hidden">
      <div aria-hidden className="shell-bg" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1500px] flex-col gap-4 p-3 sm:p-6 lg:h-full lg:min-h-0 lg:p-10">
        <TopBar />
        <div className="flex min-h-0 flex-1 flex-col gap-4 lg:ml-8 xl:flex-row">
          <main
            ref={scrollRef}
            className="glass-panel panel-scroll min-w-0 flex-1 pb-6 lg:min-h-0 lg:overflow-y-auto"
          >
            <Outlet />
            {showSide && (
              // Below xl the column sits at the bottom of the panel.
              <div className="px-5 pt-6 sm:px-8 xl:hidden">
                <RightColumn />
              </div>
            )}
          </main>
          {showSide && (
            <aside
              aria-label="Profile and latest"
              className="hidden w-[22rem] shrink-0 xl:block xl:overflow-y-auto"
            >
              <RightColumn />
            </aside>
          )}
        </div>
        {/* Last in the DOM so keyboard users reach content first; placed by CSS. */}
        <Rail />
      </div>
    </div>
  );
};
```

- [ ] **Step 9: Build and lint**

Run: `npm run build && npm run lint`
Expected: success. If `tsc` complains about `aria-hidden` on `Link` or the `before:` class string, fix the typing, not the design.

- [ ] **Step 10: Browser checks (dev server)**

Run `npm run dev` (background), open `http://localhost:5173`. Check and fix until all hold:
- 1440×900 `/`: greeting + search on top; panel on the left with the rail floating over its left edge and yellow indicator bar beside the active icon; right column with profile card and 3 latest rows beside the panel; nothing overflows the viewport; panel scrolls internally.
- 1100px wide `/projects`: no right column beside the panel; it appears at the bottom of the panel.
- 360px `/blog`: no horizontal scroll (`document.documentElement.scrollWidth <= 360` via `javascript_tool`); at the very bottom the sticky bar is visible below the stacked profile/latest cards.
- `/projects/subay` and `/nonexistent`: no right column, no crash.
- Type "pay" in search: dropdown text readable; press Escape then Enter: nothing navigates; type again, ArrowDown/Enter navigates.

- [ ] **Step 11: Commit**

```bash
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad add src
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad commit -m "Build dashboard shell: floating rail, greeting header, profile and latest column

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Home page and widgets

**Files:**
- Modify: `src/data/projects.ts` (add exports)
- Create: `src/components/AnalogClock.tsx`, `src/components/RingGauge.tsx`, `src/components/PillTabs.tsx`
- Rewrite: `src/pages/home.tsx`

**Interfaces:**
- Consumes: `projects`, `blogPosts`; Task 1 utilities (`pill`, `pill-outline`, `tile-outline`, `glass-card`).
- Produces: `categories` (`readonly ["all","frontend","design","socials","multimedia"]`) and `type Category` exported from `src/data/projects.ts`; `<AnalogClock className?: string />`; `<RingGauge value: number max: number label: string />`; `<PillTabs active: Category />` (renders links to `/projects` or `/projects?category=<c>`).

- [ ] **Step 1: Export categories from `src/data/projects.ts`**

Directly after the `Project` type add:

```ts
export const categories = [
  "all",
  "frontend",
  "design",
  "socials",
  "multimedia",
] as const;
export type Category = (typeof categories)[number];
```

- [ ] **Step 2: Create `src/components/AnalogClock.tsx`**

```tsx
import { useEffect, useState } from "react";

const hand = (deg: number, length: number, width: number, color = "currentColor") => (
  <line
    x1="50"
    y1="50"
    x2="50"
    y2={50 - length}
    stroke={color}
    strokeWidth={width}
    strokeLinecap="round"
    transform={`rotate(${deg} 50 50)`}
  />
);

export const AnalogClock = ({ className = "" }: { className?: string }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className} fill="none">
      {Array.from({ length: 12 }, (_, i) => (
        <line
          key={i}
          x1="50"
          y1="6"
          x2="50"
          y2={i % 3 === 0 ? 14 : 11}
          stroke="currentColor"
          strokeOpacity="0.7"
          strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
          strokeLinecap="round"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      {hand(hours * 30, 24, 3)}
      {hand(minutes * 6, 34, 2.5)}
      {hand(seconds * 6, 38, 1.2, "var(--color-accent)")}
      <circle cx="50" cy="50" r="2.5" fill="var(--color-accent)" />
    </svg>
  );
};
```

- [ ] **Step 3: Create `src/components/RingGauge.tsx`**

```tsx
type Props = { value: number; max: number; label: string };

const RADIUS = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const RingGauge = ({ value, max, label }: Props) => {
  const fraction = max > 0 ? Math.min(value / max, 1) : 0;
  return (
    <div
      role="img"
      aria-label={`${value} ${label}`}
      className="flex flex-col items-center gap-1"
    >
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 100 100" aria-hidden className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="9"
          />
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - fraction)}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-medium">
          {value}
        </span>
      </div>
      <span className="text-xs text-cream/70">{label}</span>
    </div>
  );
};
```

- [ ] **Step 4: Create `src/components/PillTabs.tsx`**

```tsx
import { Link } from "react-router-dom";
import { categories, type Category } from "../data/projects";

export const PillTabs = ({ active }: { active: Category }) => (
  <nav aria-label="Project categories" className="flex flex-wrap gap-3">
    {categories.map((c) => (
      <Link
        key={c}
        to={c === "all" ? "/projects" : `/projects?category=${c}`}
        aria-current={c === active ? "page" : undefined}
        className={`${c === active ? "pill-outline" : "pill"} capitalize`}
      >
        {c}
      </Link>
    ))}
  </nav>
);
```

- [ ] **Step 5: Rewrite `src/pages/home.tsx`**

```tsx
import { Link } from "react-router-dom";
import { MdMoreHoriz } from "react-icons/md";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";
import { AnalogClock } from "../components/AnalogClock";
import { PillTabs } from "../components/PillTabs";
import { RingGauge } from "../components/RingGauge";

const tools = [
  { name: "Figma", src: "/assets/images/figma.png" },
  { name: "React", src: "/assets/images/react.png" },
  { name: "TypeScript", src: "/assets/images/ts.png" },
  { name: "Tailwind CSS", src: "/assets/images/tailwind.png" },
];

const Home = () => {
  const featured = projects.slice(0, 3);
  const max = Math.max(projects.length, blogPosts.length);

  return (
    <div className="space-y-5 p-5 sm:p-8">
      <header className="animate-fade-in space-y-4">
        <h1 className="text-2xl font-medium sm:text-3xl">Featured</h1>
        <PillTabs active="all" />
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        <section aria-label="Recent work" className="glass-card space-y-2 p-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm text-cream/70">Recent work</h2>
            <Link
              to="/projects"
              aria-label="See all projects"
              className="rounded-full p-1 hover:bg-cream/15"
            >
              <MdMoreHoriz size={22} aria-hidden />
            </Link>
          </div>
          {featured.map((p) => (
            <Link
              key={p.url}
              to={p.url}
              className="flex items-center gap-3 rounded-2xl bg-black/20 p-2.5 text-left transition-colors hover:bg-black/35"
            >
              <img
                src={p.image}
                alt=""
                className="h-14 w-16 shrink-0 rounded-xl object-cover"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{p.title}</span>
                <span className="block truncate text-xs text-cream/70">
                  {p.tags.slice(0, 3).join(" · ")}
                </span>
              </span>
            </Link>
          ))}
        </section>

        <div className="space-y-5">
          <section
            aria-label="At a glance"
            className="glass-card flex items-center justify-around gap-4 p-4"
          >
            <AnalogClock className="h-24 w-24 shrink-0 text-cream" />
            <span aria-hidden className="h-20 w-px bg-line" />
            <RingGauge value={projects.length} max={max} label="Projects" />
            <RingGauge value={blogPosts.length} max={max} label="Blog posts" />
          </section>

          <section aria-label="Tools" className="glass-card p-4">
            <ul className="grid grid-cols-4 gap-3">
              {tools.map((t) => (
                <li key={t.name} className="tile-outline aspect-square bg-cream/90 p-3">
                  <img src={t.src} alt={t.name} className="h-full w-full object-contain" />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section aria-label="Featured projects" className="grid grid-cols-3 gap-3 sm:gap-5">
        {featured.map((p) => (
          <Link
            key={p.url}
            to={p.url}
            className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-line"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-left text-xs font-medium sm:text-sm">
              {p.title}
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
```

- [ ] **Step 6: Build and lint**

Run: `npm run build && npm run lint`
Expected: success.

- [ ] **Step 7: Browser checks**

At `/` (1440px): the clock shows the current time and the second hand moves; rings show 18 and 12-style counts as text; four tool tiles show visible logos on light tiles; three photo tiles link to project pages; "Recent work" rows link correctly. Press F5 then navigate away and back a few times and confirm no console errors (`read_console_messages`). At 360px there is no horizontal scroll.

- [ ] **Step 8: Commit**

```bash
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad add src
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad commit -m "Rebuild home as widget dashboard

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Projects, Blog and About pages

**Files:**
- Rewrite: `src/pages/projects.tsx`
- Modify: `src/pages/blog.tsx`, `src/pages/about.tsx`

**Interfaces:**
- Consumes: `categories`, `Category`, `projects` from `src/data/projects.ts`; `<PillTabs active />` from Task 3.

- [ ] **Step 1: Rewrite `src/pages/projects.tsx`**

```tsx
import { Link, useSearchParams } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { categories, projects, type Category } from "../data/projects";
import { PillTabs } from "../components/PillTabs";

const isCategory = (value: string | null): value is Category =>
  categories.some((c) => c === value);

const ProjectsPage = () => {
  const [params] = useSearchParams();
  const raw = params.get("category");
  // Unknown or missing values fall back to "all".
  const active: Category = isCategory(raw) ? raw : "all";

  const filtered = projects.filter(
    (project) => active === "all" || project.category === active
  );

  return (
    <div className="space-y-6 p-5 sm:p-8">
      <header className="animate-fade-in space-y-4">
        <h1 className="text-2xl font-medium sm:text-3xl">Projects</h1>
        <PillTabs active={active} />
      </header>

      {filtered.length === 0 ? (
        <p className="text-cream/70">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <Link
              to={project.url}
              key={project.title}
              className="group glass-card card-hover overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-cream/10 px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row items-center justify-between gap-3">
                  <h2 className="text-left text-xl font-semibold">{project.title}</h2>
                  <span className="arrow-button" aria-hidden>
                    <MdArrowOutward size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
```

- [ ] **Step 2: Update `src/pages/blog.tsx` header and wrapper (exact replacements)**

1. Replace `<div className="container mx-auto max-w-5xl space-y-6 py-4 px-8 text-sm sm:text-base">` with `<div className="space-y-6 p-5 text-sm sm:p-8 sm:text-base">`.
2. Replace the whole `<header>…</header>` block with:

```tsx
      <header className="animate-fade-in">
        <h1 className="text-2xl font-medium sm:text-3xl">Blog</h1>
      </header>
```
3. In each post row change `<h3 className="font-semibold text-lg">` to `<h2 className="text-lg font-semibold">` and its closing `</h3>` to `</h2>` (h1 then h2, no skipped level).

- [ ] **Step 3: Update `src/pages/about.tsx`**

1. Replace `<div className="container mx-auto max-w-5xl space-y-6 py-4 px-8 text-sm sm:text-base">` with `<div className="space-y-6 p-5 text-sm sm:p-8 sm:text-base">`.
2. Replace the `<header>…</header>` block (the "About" + "Page" heading) with:

```tsx
      <header className="animate-fade-in">
        <h1 className="text-2xl font-medium sm:text-3xl">About</h1>
      </header>
```
3. In every `<section …>` whose class contains `border-b-2 pb-6`, replace `border-b-2 pb-6` with `glass-card p-5`. Use: `sed -i 's/border-b-2 pb-6/glass-card p-5/' src/pages/about.tsx`, then `grep -n "glass-card p-5" src/pages/about.tsx` — expect one hit per section (four).
4. The section headings ("My"/"Experiences", "My"/"Education", "My"/"Certifications") stay as they are.

- [ ] **Step 4: Build and lint**

Run: `npm run build && npm run lint`
Expected: success.

- [ ] **Step 5: Browser checks**

- `/projects`: pills at top, "All" outlined in yellow; click "Design": URL becomes `/projects?category=design`, only design projects show, "Design" is outlined; browser Back returns to All.
- `/projects?category=bogus`: shows all projects with "All" active (Review Focus 1).
- Temporarily edit the URL to a valid category that has no entries if any exists; otherwise confirm by reading the code path that `filtered.length === 0` renders the message (Review Focus 6). Record which check was used.
- `/blog`: rows readable, dates correct, links work. `/about`: four dark cards; all text readable; Skills and Contact at the bottom still render.
- Home tabs: click "Frontend" on `/` and land on the filtered Projects page.

- [ ] **Step 6: Commit**

```bash
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad add src
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad commit -m "Restyle projects, blog and about pages for the dashboard

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Detail-page and section contrast pass

**Files:**
- Modify: 12 files in `src/blogs/`, `src/components/ContactSection.tsx`, `src/components/SkillsSection.tsx`, `src/projects/subay.tsx`, and any page the browser check below flags.

- [ ] **Step 1: Blog body boxes become `glass-card`**

All 12 blog pages use the identical light box class. Run:

```bash
sed -i 's/bg-white\/60 rounded-4xl backdrop-blur-xs border shadow-xs/glass-card/' src/blogs/*.tsx
grep -c "glass-card" src/blogs/*.tsx
grep -n "bg-white/60" src/blogs/*.tsx
```
Expected: each blog file has at least 1 `glass-card`; the last grep prints nothing.

- [ ] **Step 2: Contact form inputs on dark**

In `src/components/ContactSection.tsx` replace, in all three inputs/textarea, `bg-white/70` with `bg-black/30 text-cream placeholder:text-cream/50`. The round white icon chips (`bg-white rounded-full p-2` with brown icons) stay as they are: white chip + dark icon is readable on dark.

- [ ] **Step 3: Sweep for leftover light-theme classes**

Run: `grep -rnE "text-ink|bg-white|border-white|text-black|text-gray" src --include=*.tsx`
Expected remaining hits only where a light chip intentionally carries dark text (`white-button` users, the ContactSection/subay icon chips, `Rail` active `text-ink`, `arrow-button` uses ink in CSS). Fix any other hit: swap `text-ink*` to `text-cream*` and `bg-white/xx` to `bg-cream/10`.

- [ ] **Step 4: Browser contrast check**

Visit at 1440px and 360px: `/projects/subay`, `/projects/payroll`, `/projects/ibrgy`, `/projects/talemakers`, `/projects/athomes`, `/projects/icpep`, `/projects/cpexpress`, `/projects/bbtime`, and `/blogs/i-passed-the-cse-exam`, `/blogs/storyboard-a-five-year-plan`, `/blogs/the-gumamela-I-offered-to-mary`, `/blogs/have-i-not-breathed-for-a-moment`, plus `/about` bottom (Skills and Contact). Look for: dark text on dark, invisible borders or skill bars, invisible form fields, images with hard white backgrounds looking broken. Fix what you find with token classes (`text-cream`, `bg-cream/10`, `border-line`). Also check `/nonexistent` (NotFound) is readable and shows a "back" link that works.

- [ ] **Step 5: Build, lint, commit**

Run: `npm run build && npm run lint` (expect success), then:

```bash
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad add src
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad commit -m "Fix contrast on detail pages, blog bodies and contact form

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Docs and final verification

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update `CLAUDE.md`**

In the "All routes are nested under the `Shell` layout route" bullet, replace the description of the panel/rail/top bar with: `Shell` provides the fixed blurred, darkened background, the `TopBar` (greeting + `SearchPill`), the main `glass-panel` (the only `<main>`; on desktop only it scrolls), the floating icon `Rail` (a side rail overlapping the panel on desktop, a sticky bottom bar below `lg`; last in the DOM for tab order), and a right column (`ProfileCard` + `LatestList`) shown only on `/`, `/about`, `/projects`, `/blog` (beside the panel at `xl`, at the bottom of the panel below). Keep the sentence about `overflow-x-clip`.

In the Styling bullet replace the utility list with: tokens `bg-panel`, `bg-card`, `text-cream`, `border-line`, `bg-accent`/`text-accent` (`#FFC93C`), `text-ink` (only on yellow/white surfaces); utilities `glass-panel`, `glass-card`, `pill`, `pill-outline` (use one, not both), `tile-outline`, `arrow-button`, `white-button`, `transparent-button`. Note the site is dark-themed.

In the Home bullet replace "single-screen bento" with: Home is a widget dashboard (Featured pill tabs, recent-work list, clock + ring gauges, tool tiles, photo tiles). Add: project category filters live in the URL (`/projects?category=<c>`); `categories` is exported from `src/data/projects.ts`.

- [ ] **Step 2: Full check**

Run: `npm run build && npm run lint`
Expected: success. Then in the browser walk `/`, `/about`, `/projects`, `/blog`, one project, one blog at 1440px, 1024px and 360px and confirm: rail position and active states, sticky bottom bar at 360px, right-column visibility rules, search behavior, no horizontal scroll, no console errors.

- [ ] **Step 3: Commit**

```bash
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad add CLAUDE.md
git -c safe.directory=E:/Hope/Documents/Portfolio/precioushopejumuad commit -m "Update CLAUDE.md for the dashboard shell

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 4: Hand back**

Report what was built and any check that could not be run. Do not merge or push; the owner decides.
