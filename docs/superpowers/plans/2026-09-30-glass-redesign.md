# Glass Panel Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-skin the whole portfolio as a frosted-glass panel over a blurred photo, with a floating circular icon rail and bento cards, following the reference image.

**Architecture:** One shared `Shell` layout route (blurred background, glass panel, icon rail, top bar with search) wraps every route through a React Router `<Outlet/>`. Pages lose their own `Navbar`/`SparkleBackground` wrappers (via a one-shot codemod) and render only their content. Design tokens live in the `@theme` block of `src/index.css`.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4 (`@tailwindcss/vite`, no config file), react-router-dom 7, react-icons.

**Spec:** `docs/superpowers/specs/2026-09-30-glass-redesign-design.md`

## Global Constraints

- All existing route paths stay unchanged (`/`, `/about`, `/projects`, `/projects/<slug>`, `/blog`, `/blogs/<slug>`, `*`).
- Accent color is `#FFC93C` (honey yellow), used only on the active rail item and circular arrow buttons. Everything else is white, translucent grey or near-black (`#1F1A17`).
- UI/body font is Poppins (already loaded). The display font is used only for large accent words.
- Removed for good: dark theme, sparkles, Noto Serif, Pinyon Script.
- Desktop (`lg`, 1024px and up): panel and rail are fixed, and only the content inside the panel scrolls. Below `lg`: normal full-page scroll, and the rail becomes a floating bottom bar.
- Stat numbers on the home page are computed from the data arrays, never hard-coded.
- No test framework exists and none is added. "Verify" steps use `npm run build` (runs `tsc -b`), `npm run lint`, and looking at the running app.
- Commits end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.
- If git reports "dubious ownership", prefix git commands with `-c safe.directory='*'` (for example `git -c safe.directory='*' commit ...`). Do not edit global git config.
- Dev server: `npm run dev` serves on http://localhost:5173/.

## Review Focus

Failure modes the spec implies but a happy-path check would miss. Each has a pinned check in the task that owns the code.

1. **Search input edge cases:** empty, whitespace-only, and regex/HTML characters like `(`, `[`, `<b>` must not crash or show a broken dropdown (Task 4).
2. **Scroll reset on navigation:** the panel scrolls internally, so navigating from a scrolled page must put the new page at the top (Task 2).
3. **Deep links and unknown routes:** loading `/projects/subay` or `/nope` directly must render inside the shell, not a bare page (Task 2).
4. **360px phone width:** the bottom rail must not cover the last content, and nothing may scroll horizontally (Task 8).
5. **No `backdrop-filter` support:** the panel must fall back to a readable, nearly opaque white (Task 1).

---

## File Structure

| File | Responsibility |
|---|---|
| `index.html` | Font links (Poppins + chosen display font) |
| `src/index.css` | Tokens, base styles, glass/button utilities |
| `src/components/shell/Shell.tsx` | Layout route: background, panel, rail, top bar, outlet, scroll reset |
| `src/components/shell/Rail.tsx` | Four circular nav buttons (side rail on desktop, bottom bar on mobile) |
| `src/components/shell/TopBar.tsx` | Wordmark, search pill, avatar |
| `src/components/shell/SearchPill.tsx` | Search input + results dropdown |
| `src/lib/search.ts` | `searchContent()` over projects and blog posts |
| `src/data/projects.ts` | `Project` type and `projects` array (moved out of `pages/projects.tsx`) |
| `src/data/blogPosts.ts` | `BlogPost` type and `blogPosts` array (moved out of `pages/blog.tsx`) |
| `src/pages/home.tsx` | Bento home |
| `scripts/codemod-shell.mjs` | One-shot removal of old per-page chrome (deleted in Task 9) |

Note on the spec: it said to "export the arrays from their page files". The arrays move into `src/data/` instead, because the `react-refresh/only-export-components` lint rule warns when a component file also exports non-components.

---

### Task 1: Tokens, fonts and global styles

**Files:**
- Modify: `index.html`
- Rewrite: `src/index.css`

**Interfaces:**
- Produces: Tailwind utilities `font-display`, `text-accent`, `bg-accent`; custom utilities `shell-bg`, `glass-panel`, `glass-card`, `arrow-button`, `white-button`, `transparent-button`, `card-hover`, `text-glow` (now a no-op kept so old pages still compile), and the `.panel-scroll` class. Legacy CSS variables `--yellow-accent`, `--brown-accent`, `--button-color`, `--text-color` keep working but now hold the new palette.

- [ ] **Step 1: Commit the pending cleanup so the redesign starts from a clean tree**

```bash
git add package.json package-lock.json src/lib CLAUDE.md
git commit -m "Remove unused clsx/tailwind-merge and add CLAUDE.md

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
git status --short
```
Expected: empty output from `git status --short`.

- [ ] **Step 2: Record the lint baseline**

Run: `npm run lint`
Expected: note the number of existing errors/warnings. Later tasks must not increase it.

- [ ] **Step 3: Pick the display font from a rendered sample (user decision)**

Create `C:\Users\jumua\AppData\Local\Temp\claude\E--Hope-Documents-Portfolio-precioushopejumuad\08c6ff93-58f9-4e14-a00b-ac9eae680748\scratchpad\fonts.html`:

```html
<!doctype html>
<meta charset="utf-8" />
<link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Rampart+One&family=Shojumaru&family=Train+One&display=swap" rel="stylesheet" />
<body style="font-size:56px;padding:24px;background:#f3e9d2;color:#1f1a17;line-height:1.3">
  <div style="font-family:'Shojumaru'">ENJOY · Precious Hope — Shojumaru</div>
  <div style="font-family:'Rampart One'">ENJOY · Precious Hope — Rampart One</div>
  <div style="font-family:'Dela Gothic One'">ENJOY · Precious Hope — Dela Gothic One</div>
  <div style="font-family:'Train One'">ENJOY · Precious Hope — Train One</div>
</body>
```

Open it in a browser, show the user the result, and ask which they prefer. Below, `DISPLAY_FONT` means the chosen family name and `DISPLAY_QUERY` its Google Fonts query form (spaces become `+`).

- [ ] **Step 4: Replace the font link in `index.html`**

Replace the whole `<link href="https://fonts.googleapis.com/css2?family=Noto+Serif...` line with (fill in the chosen family):

```html
    <link href="https://fonts.googleapis.com/css2?family=DISPLAY_QUERY&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
```

- [ ] **Step 5: Rewrite `src/index.css`**

Replace the entire file with the following (fill in `DISPLAY_FONT`):

```css
@import "tailwindcss";

@theme {
  --font-display: "DISPLAY_FONT", system-ui, sans-serif;
  --font-sans: "Poppins", sans-serif;
  --color-accent: #ffc93c;
  --color-ink: #1f1a17;
  --animate-float: float 6s ease-in-out infinite;
  --animate-pulse-subtle: pulse-subtle 4s ease-in-out infinite;
  --animate-fade-in: fade-in 0.7s ease-out forwards;
  --animate-fade-in-delay-1: fade-in 0.7s ease-out 0.2s forwards;
  --animate-fade-in-delay-2: fade-in 0.7s ease-out 0.4s forwards;
  --animate-fade-in-delay-3: fade-in 0.7s ease-out 0.6s forwards;
  --animate-fade-in-delay-4: fade-in 0.7s ease-out 0.8s forwards;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @keyframes pulse-subtle {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@layer base {
  :root {
    --border-color: rgb(31 26 23 / 0.12);
    --button-color: #fff;
    --text-color: #1f1a17;
    --yellow-accent: #ffc93c;
    --brown-accent: #1f1a17;
  }

  * {
    @apply border-[var(--border-color)];
  }

  html {
    @apply scroll-smooth;
  }

  body {
    color: var(--text-color);
    background-color: #f3e9d2;
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  @media (max-width: 640px) {
    body {
      font-size: 12px;
    }
  }
}

@utility container {
  margin-inline: auto;
  padding-inline: 2rem;

  @media (width >= 640px) {
    max-width: 640px;
  }
  @media (width >= 768px) {
    max-width: 768px;
  }
  @media (width >= 1024px) {
    max-width: 1024px;
  }
  @media (width >= 1280px) {
    max-width: 1280px;
  }
  @media (width >= 1400px) {
    max-width: 1400px;
  }
}

/* Fixed, blurred photo behind the panel. */
@utility shell-bg {
  position: fixed;
  inset: -40px;
  z-index: 0;
  background: center / cover no-repeat url("/assets/images/background.jpg");
  filter: blur(28px) saturate(1.15);
}

/* The big frosted panel. Falls back to near-opaque white without backdrop-filter. */
@utility glass-panel {
  border-radius: 2.5rem;
  background: rgb(255 255 255 / 0.62);
  border: 1px solid rgb(255 255 255 / 0.7);
  box-shadow: 0 20px 60px rgb(0 0 0 / 0.12);
  -webkit-backdrop-filter: blur(24px) saturate(1.2);
  backdrop-filter: blur(24px) saturate(1.2);

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    background: rgb(255 255 255 / 0.92);
  }
}

/* Nested cards inside the panel (bento cards, listing tiles). */
@utility glass-card {
  border-radius: 2rem;
  background: rgb(255 255 255 / 0.55);
  border: 1px solid rgb(255 255 255 / 0.75);
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.06);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    background: rgb(255 255 255 / 0.9);
  }
}

/* Yellow circular arrow button. */
@utility arrow-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: var(--color-accent);
  color: var(--color-ink);
}

@utility text-glow {
  /* Legacy no-op: old pages still reference it. */
}

@utility card-hover {
  @apply cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)];
}

@utility white-button {
  @apply inline-flex items-center justify-center px-6 py-1.5 text-xs sm:text-base rounded-full bg-white text-[var(--color-ink)] font-medium transition-all duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)] hover:scale-105 active:scale-95 cursor-pointer;
}

@utility transparent-button {
  @apply inline-flex items-center justify-center px-6 py-1.5 text-xs sm:text-base rounded-full bg-white/40 border-white/70 backdrop-blur-sm font-medium transition-all duration-300 hover:bg-white/70 hover:scale-105 active:scale-95 cursor-pointer;
}

#root {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

::selection {
  color: #1f1a17;
  background: rgb(255 201 60 / 0.6);
}

.panel-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgb(31 26 23 / 0.25) transparent;
}
```

The old `pinyon-script`, `blog-page`, `sparkle`, `marquee-*` and `flip-img` rules are intentionally gone. A grep confirmed nothing in `src` uses `blog-page`, `sparkle`, the marquee classes or `flip-img`. `pinyon-script` is still referenced by page files and is removed by the codemod in Task 3.

- [ ] **Step 6: Verify**

Run: `npm run build`
Expected: succeeds. Then run `npm run dev` and load http://localhost:5173/. The site is intentionally half-styled at this point (dark-theme pages with light text tokens), and that's fine; only confirm there are no CSS errors in the terminal.

- [ ] **Step 7: Commit**

```bash
git add index.html src/index.css
git commit -m "Add glass design tokens, fonts and base styles

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Shell layout and nested routing

**Files:**
- Create: `src/components/shell/Shell.tsx`, `src/components/shell/Rail.tsx`, `src/components/shell/TopBar.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: CSS utilities from Task 1 (`shell-bg`, `glass-panel`, `panel-scroll`).
- Produces: `export const Shell: () => JSX.Element` (a layout route element). `TopBar` renders `<SearchPill />` in Task 4; until then it renders nothing in that slot.

- [ ] **Step 1: Create `src/components/shell/Rail.tsx`**

```tsx
import { NavLink } from "react-router-dom";
import {
  MdOutlineArticle,
  MdOutlineHome,
  MdOutlinePersonOutline,
  MdOutlineWorkOutline,
} from "react-icons/md";

const items = [
  { to: "/", label: "Home", Icon: MdOutlineHome, end: true },
  { to: "/about", label: "About", Icon: MdOutlinePersonOutline, end: false },
  { to: "/projects", label: "Projects", Icon: MdOutlineWorkOutline, end: false },
  { to: "/blog", label: "Blog", Icon: MdOutlineArticle, end: false },
];

export const Rail = () => (
  <nav
    aria-label="Main"
    className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-3 rounded-full border border-white/70 bg-white/70 p-2 shadow-lg backdrop-blur-md lg:static lg:translate-x-0 lg:flex-col lg:self-center lg:border-0 lg:bg-transparent lg:p-0 lg:pl-6 lg:shadow-none lg:backdrop-blur-none"
  >
    {items.map(({ to, label, Icon, end }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        aria-label={label}
        title={label}
        className={({ isActive }) =>
          `flex h-12 w-12 items-center justify-center rounded-full text-ink shadow-sm transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
            isActive ? "bg-accent" : "bg-white"
          }`
        }
      >
        <Icon size={22} />
      </NavLink>
    ))}
  </nav>
);
```

- [ ] **Step 2: Create `src/components/shell/TopBar.tsx`**

```tsx
import { Link } from "react-router-dom";

export const TopBar = () => (
  <header className="flex items-center justify-between gap-4 px-5 py-5 sm:px-8">
    <Link to="/" className="font-display text-xl sm:text-2xl">
      Precious Hope
    </Link>
    <div className="flex items-center gap-3">
      <img
        src="/assets/images/logo.png"
        alt=""
        className="h-9 w-9 rounded-full border border-white object-cover"
      />
    </div>
  </header>
);
```

- [ ] **Step 3: Create `src/components/shell/Shell.tsx`**

```tsx
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Rail } from "./Rail";
import { TopBar } from "./TopBar";

export const Shell = () => {
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLElement>(null);

  // The panel scrolls internally on desktop, the window on mobile.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="relative min-h-dvh overflow-x-hidden lg:h-dvh lg:overflow-hidden">
      <div aria-hidden className="shell-bg" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1400px] p-3 sm:p-6 lg:h-full lg:p-10">
        <div className="glass-panel flex w-full min-w-0 flex-col lg:flex-row lg:overflow-hidden">
          <Rail />
          <div className="flex min-w-0 flex-1 flex-col lg:min-h-0">
            <TopBar />
            <main
              ref={scrollRef}
              className="panel-scroll flex-1 px-5 pb-28 sm:px-8 lg:min-h-0 lg:overflow-y-auto lg:pb-8"
            >
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
```

- [ ] **Step 4: Nest all routes under the shell in `src/App.tsx`**

Add the import after the `Analytics` import:

```tsx
import { Shell } from "./components/shell/Shell";
```

Then change the routes block: insert `<Route element={<Shell />}>` on the line right after `<Routes>`, and insert `</Route>` on the line right before `</Routes>`. Every existing `<Route ... />` (including `index` and `path="*"`) stays exactly as it is, now nested inside.

- [ ] **Step 5: Verify (including Review Focus 2 and 3)**

Run: `npm run build`. Expected: succeeds.
Run `npm run dev`, then check in the browser:
1. `/` shows the blurred background, the glass panel, the rail on the left and the top bar. The old pages still render their own nav and sparkles inside it, which is expected until Task 3.
2. Load `http://localhost:5173/projects/subay` directly (browser address bar, not a link click): it renders inside the shell.
3. Load `http://localhost:5173/nope`: the not-found page renders inside the shell.
4. On `/blog`, scroll down inside the panel, click the Home rail button, and confirm the panel is back at the top.
5. Active rail item is yellow, including on `/projects/subay` (Projects highlighted).

- [ ] **Step 6: Commit**

```bash
git add src/components/shell src/App.tsx
git commit -m "Add glass shell layout and nest all routes under it

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Strip the old per-page chrome

**Files:**
- Create: `scripts/codemod-shell.mjs`
- Modify (by script): every file in `src/pages/` (except `home.tsx`), `src/projects/`, `src/blogs/`, plus `src/components/SkillsSection.tsx` and `src/components/ContactSection.tsx`

**Interfaces:**
- Produces: pages that render only their own content, with no `Navbar`/`SparkleBackground`, `pinyon-script` accents converted to `font-display`, `font-noto` removed, and dark-brown blog boxes turned into light glass.

- [ ] **Step 1: Create `scripts/codemod-shell.mjs`**

```js
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const files = [
  ...["src/pages", "src/projects", "src/blogs"].flatMap((dir) =>
    readdirSync(dir)
      .filter((f) => f.endsWith(".tsx") && !(dir === "src/pages" && f === "home.tsx"))
      .map((f) => join(dir, f))
  ),
  "src/components/SkillsSection.tsx",
  "src/components/ContactSection.tsx",
];

// pinyon-script accents were a small-x-height script, so their sizes step down for the display font.
const sizeMap = {
  "text-8xl": "text-5xl",
  "text-6xl": "text-4xl",
  "text-5xl": "text-3xl",
  "text-4xl": "text-2xl",
  "text-3xl": "text-xl",
  "text-2xl": "text-lg",
};

const remapPinyon = (classes) =>
  classes
    .split(/\s+/)
    .map((token) => {
      if (token === "pinyon-script") return "font-display";
      const m = token.match(/^((?:[a-z]+:)?)(text-\dxl)$/);
      return m && sizeMap[m[2]] ? m[1] + sizeMap[m[2]] : token;
    })
    .join(" ");

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, "utf8");
  let s = before;

  s = s.replace(/^import \{ Navbar \} from "[^"]+";\r?\n/gm, "");
  s = s.replace(/^import \{ SparkleBackground \} from "[^"]+";\r?\n/gm, "");
  s = s.replace(/^\s*<SparkleBackground \/>\s*\r?\n/gm, "");
  s = s.replace(/^\s*<Navbar \/>\s*\r?\n/gm, "");
  s = s.replace(/^\s*\{\/\* (Navbar|Background Effects) \*\/\}\s*\r?\n/gm, "");
  s = s.replace(/<header[^>]*>\s*<\/header>\s*\r?\n?/g, "");

  // Outer wrapper: the shell now owns the viewport height and the top padding.
  s = s.replace(/min-h-screen overflow-x-hidden ?/g, "");
  s = s.replace(/\bpy-24\b/g, "py-4");

  // Accent words and fonts.
  s = s.replace(/className="([^"]*pinyon-script[^"]*)"/g, (_, c) => `className="${remapPinyon(c)}"`);
  s = s.replace(/\bfont-noto\s*/g, "");

  // Dark brown reading boxes become light glass.
  s = s.replace(/bg-\[#462317\]\/80/g, "bg-white/60");

  if (s !== before) {
    writeFileSync(file, s);
    changed++;
    console.log("updated", file);
  }
}
console.log(`\n${changed} files updated`);
```

- [ ] **Step 2: Run it**

Run: `node scripts/codemod-shell.mjs`
Expected: a list of updated files ending in `N files updated` (N should be about 32, roughly every page, project, blog and the two sections).

- [ ] **Step 3: Verify nothing was missed**

Run: `grep -rn "Navbar\|SparkleBackground\|pinyon-script\|font-noto\|#462317" src --include=*.tsx | grep -v "src/components/Navbar.tsx\|src/components/SparkleBackground.tsx\|src/pages/home.tsx"`
Expected: no output. (`home.tsx` and the two old components are handled in Tasks 5 and 9.)

Run: `npm run build`
Expected: succeeds. Note that `home.tsx` still imports the old components, which still exist, so the build passes.

- [ ] **Step 4: Look at it**

Run `npm run dev` and check `/projects`, `/blog`, `/about` and one project and one blog page. Expected: each renders inside the panel with a single set of navigation (the rail), no sparkles, and readable dark text. Layout polish comes in later tasks, so ignore card and heading styling for now.

- [ ] **Step 5: Commit**

```bash
git add scripts/codemod-shell.mjs src
git commit -m "Strip old per-page navbar and sparkle chrome

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Data modules and search pill

**Files:**
- Create: `src/data/projects.ts`, `src/data/blogPosts.ts`, `src/lib/search.ts`, `src/components/shell/SearchPill.tsx`
- Modify: `src/pages/projects.tsx`, `src/pages/blog.tsx`, `src/components/shell/TopBar.tsx`

**Interfaces:**
- Produces:
  - `export type Project = { title: string; description: string; image: string; tags: string[]; url: string; category: "frontend" | "design" | "socials" | "multimedia" }` and `export const projects: Project[]` from `src/data/projects.ts`.
  - `export type BlogPost = { to: string; image: string; alt: string; title: string; description: string; date: string }` and `export const blogPosts: BlogPost[]` from `src/data/blogPosts.ts`.
  - `export type SearchResult = { kind: "Project" | "Blog"; title: string; to: string; snippet: string }` and `export const searchContent: (query: string, limit?: number) => SearchResult[]` from `src/lib/search.ts`.

- [ ] **Step 1: Find the line ranges**

Task 3 removed import lines, so the numbers shifted. Run:

```bash
grep -n "^type \|^const projects\|^const categories\|^];" src/pages/projects.tsx
grep -n "^type \|^const blogPosts\|^const Blog\|^];" src/pages/blog.tsx
```
Call the first line of the `type Project` / `type BlogPost` declaration `START` and the line of the array's closing `];` `END` in each file.

- [ ] **Step 2: Move both data sets**

```bash
mkdir -p src/data
sed -n 'START,ENDp' src/pages/projects.tsx | sed -e 's/^type Project/export type Project/' -e 's/^const projects/export const projects/' > src/data/projects.ts
sed -n 'START,ENDp' src/pages/blog.tsx | sed -e 's/^type BlogPost/export type BlogPost/' -e 's/^const blogPosts/export const blogPosts/' > src/data/blogPosts.ts
```
(use each file's own `START`/`END`). Then delete those same lines (plus the blank line after) from the two page files and add `import { projects } from "../data/projects";` to `projects.tsx` and `import { blogPosts } from "../data/blogPosts";` to `blog.tsx`. If a page still references the `Project` or `BlogPost` type, also import it (`import type { Project } from "../data/projects";`).

- [ ] **Step 3: Verify the move**

Run: `npm run build`
Expected: succeeds. Run `npm run dev`; `/projects` and `/blog` list the same items as before.

- [ ] **Step 4: Create `src/lib/search.ts`**

```ts
import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";

export type SearchResult = {
  kind: "Project" | "Blog";
  title: string;
  to: string;
  snippet: string;
};

const stripTags = (html: string) => html.replace(/<[^>]*>/g, "");

const entries: (SearchResult & { haystack: string })[] = [
  ...projects.map((p) => ({
    kind: "Project" as const,
    title: p.title,
    to: p.url,
    snippet: p.description,
    haystack: `${p.title} ${p.description} ${p.tags.join(" ")}`.toLowerCase(),
  })),
  ...blogPosts.map((b) => {
    const title = stripTags(b.title);
    return {
      kind: "Blog" as const,
      title,
      to: b.to,
      snippet: b.description,
      haystack: `${title} ${b.description}`.toLowerCase(),
    };
  }),
];

// Plain substring match on purpose: user input is never treated as a regex or as HTML.
export const searchContent = (query: string, limit = 6): SearchResult[] => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return entries
    .filter((e) => e.haystack.includes(q))
    .slice(0, limit)
    .map(({ kind, title, to, snippet }) => ({ kind, title, to, snippet }));
};
```

- [ ] **Step 5: Create `src/components/shell/SearchPill.tsx`**

```tsx
import { useEffect, useId, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { searchContent } from "../../lib/search";

export const SearchPill = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const results = searchContent(query);
  const showList = open && query.trim() !== "";

  // Close and clear on navigation.
  useEffect(() => {
    setOpen(false);
    setQuery("");
  }, [pathname]);

  // Close when clicking outside.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const go = (to: string) => navigate(to);

  return (
    <div ref={wrapRef} className="relative">
      <label className="flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 shadow-sm">
        <MdOutlineSearch size={18} aria-hidden />
        <input
          type="search"
          value={query}
          placeholder="Search"
          aria-label="Search projects and blog posts"
          aria-expanded={showList}
          aria-controls={listId}
          role="combobox"
          aria-autocomplete="list"
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
            else if (e.key === "ArrowDown" && results.length) {
              e.preventDefault();
              setActive((a) => (a + 1) % results.length);
            } else if (e.key === "ArrowUp" && results.length) {
              e.preventDefault();
              setActive((a) => (a - 1 + results.length) % results.length);
            } else if (e.key === "Enter" && results[active]) {
              go(results[active].to);
            }
          }}
          className="w-28 bg-transparent text-sm outline-none placeholder:text-ink/50 sm:w-44"
        />
      </label>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          className="glass-card absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden bg-white/95 p-2 text-left sm:w-96"
        >
          {results.length === 0 && (
            <li className="px-3 py-2 text-sm text-ink/60">No matches</li>
          )}
          {results.map((r, i) => (
            <li key={r.to} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r.to)}
                className={`block w-full rounded-2xl px-3 py-2 text-left ${
                  i === active ? "bg-accent/40" : ""
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink/60">
                  {r.kind}
                </span>
                <span className="block truncate text-sm font-medium">{r.title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

- [ ] **Step 6: Mount it in `TopBar.tsx`**

Add `import { SearchPill } from "./SearchPill";` and replace the inner `<div className="flex items-center gap-3">` contents so it reads:

```tsx
    <div className="flex items-center gap-3">
      <SearchPill />
      <img
        src="/assets/images/logo.png"
        alt=""
        className="h-9 w-9 rounded-full border border-white object-cover"
      />
    </div>
```

- [ ] **Step 7: Verify (Review Focus 1)**

Run: `npm run build`. Expected: succeeds. Run `npm run dev` and in the search box:
1. Type a word from a project title (for example `payroll`): the dropdown shows it under "Project"; press Enter and it navigates and clears the box.
2. ArrowDown/ArrowUp move the highlight; Escape closes the list.
3. Type `(`, `[`, `.*`, `<b>` and a single space. No crash, and the list shows "No matches" or nothing (a single space shows no list).
4. Clear the box: the list disappears.

- [ ] **Step 8: Commit**

```bash
git add src
git commit -m "Move content data to src/data and add top-bar search

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Bento home page

**Files:**
- Rewrite: `src/pages/home.tsx`

**Interfaces:**
- Consumes: `projects` and `blogPosts` (Task 4), `glass-card` and `arrow-button` (Task 1), `/assets/images/hero.png` (existing cut-out portrait, used as the hero until a new one is provided).

- [ ] **Step 1: Rewrite `src/pages/home.tsx`**

```tsx
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";

type BentoLinkProps = { to: string; label: string };

const BentoLink = ({ to, label }: BentoLinkProps) => (
  <Link
    to={to}
    className="mt-4 flex items-center justify-between rounded-full bg-white py-2 pl-6 pr-2 text-base font-medium shadow-sm transition-transform duration-300 hover:scale-[1.02] active:scale-95"
  >
    {label}
    <span className="arrow-button">
      <MdArrowOutward size={18} aria-hidden />
    </span>
  </Link>
);

const Stat = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-1 flex-col justify-center rounded-3xl bg-white/80 px-4 py-3 text-left">
    <span className="text-3xl font-medium leading-none">{value}</span>
    <span className="mt-1 text-xs text-ink/60">{label}</span>
  </div>
);

const Home = () => (
  <div className="grid min-h-[600px] grid-rows-[1fr_auto] gap-4 lg:h-full">
    <section aria-label="Introduction" className="relative min-h-[380px]">
      <svg
        aria-hidden
        viewBox="0 0 600 400"
        className="pointer-events-none absolute inset-0 h-full w-full text-accent/60"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="300" cy="220" r="120" />
        <circle cx="300" cy="220" r="170" />
        <circle cx="300" cy="220" r="220" />
        <circle cx="300" cy="220" r="270" />
      </svg>

      <div className="relative z-10 max-w-[16rem] animate-fade-in text-left sm:max-w-sm">
        <h1 className="font-display text-4xl leading-tight sm:text-6xl">
          Precious Hope
        </h1>
        <p className="mt-3 text-sm tracking-widest sm:text-base">
          COMPUTER ENGINEER · UI/UX DESIGNER
        </p>
      </div>

      <img
        src="/assets/images/hero.png"
        alt="Precious Hope T. Jumuad"
        className="absolute bottom-0 left-1/2 z-0 h-[105%] max-h-[560px] -translate-x-1/2 object-contain object-bottom"
      />
    </section>

    <section
      aria-label="Explore"
      className="relative z-20 grid gap-4 lg:grid-cols-[1fr_minmax(0,22rem)_1fr]"
    >
      <div className="glass-card p-5 text-left">
        <p className="text-base">Explore my</p>
        <p className="font-display text-4xl sm:text-5xl">WORK</p>
        <BentoLink to="/projects" label="See projects" />
      </div>

      <div className="glass-card flex flex-col p-4 text-left">
        <p className="mb-2 px-1 text-base">At a glance</p>
        <div className="flex flex-1 gap-3">
          <Stat value={projects.length} label="Projects" />
          <Stat value={blogPosts.length} label="Blog posts" />
        </div>
      </div>

      <div className="glass-card p-5 text-left">
        <p className="text-base">Read my</p>
        <p className="font-display text-4xl sm:text-5xl">STORIES</p>
        <BentoLink to="/blog" label="Read blog" />
      </div>
    </section>
  </div>
);

export default Home;
```

- [ ] **Step 2: Verify**

Run: `npm run build`. Expected: succeeds.
Run `npm run dev`, load `/` at a desktop width (≥1280px wide): the panel content fits without scrolling, the portrait overlaps the bento row, the stats show the real counts, and both arrow links navigate. At 390px wide: the portrait is on top and the three cards stack below; the page scrolls normally. Screenshot both and adjust spacing or the portrait height with the classes above if anything overlaps text.

- [ ] **Step 3: Commit**

```bash
git add src/pages/home.tsx
git commit -m "Build bento home page

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 6: About page absorbs Skills and Contact

**Files:**
- Modify: `src/pages/about.tsx`, `src/components/SkillsSection.tsx`, `src/components/ContactSection.tsx`

**Interfaces:**
- Consumes: `SkillsSection` and `ContactSection` (existing named exports).

- [ ] **Step 1: Render both sections at the end of About's `<main>`**

In `src/pages/about.tsx`, add imports next to the others:

```tsx
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
```

and insert just before the closing `</main>`:

```tsx
        <SkillsSection />
        <ContactSection />
```

- [ ] **Step 2: Fix the skill bars for a light background**

In `src/components/SkillsSection.tsx`, the track `bg-white/50` and fill `bg-white` are invisible on light glass. Change:
- `className="w-full bg-white/50 h-2 rounded-full overflow-hidden"` to `className="w-full bg-ink/10 h-2 rounded-full overflow-hidden"`
- `className="bg-white h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"` to `className="bg-accent h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"`
- both cards' `rounded-4xl backdrop-blur-sm border shadow-xs gap-3 p-4 card-hover` to `glass-card gap-3 p-4 card-hover`

- [ ] **Step 3: Check the remaining white-on-white spots**

Run: `grep -rn "bg-white\b\|text-white\|border-white" src/components/ContactSection.tsx src/pages/about.tsx`
For each hit, make sure it still reads on a light panel (white fills on inputs or buttons are fine; white text is not). Change `text-white` to `text-ink` where it appears on a light surface.

- [ ] **Step 4: Verify**

Run: `npm run build`. Expected: succeeds. Run `npm run dev`, open `/about`, and scroll the panel to the bottom: skills (with visible yellow bars) and the contact block appear; the category filter buttons work; submitting the contact form shows the "Message sent!" toast, with the message text readable.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "Move skills and contact onto the About page

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 7: Listing pages as glass tiles

**Files:**
- Modify: `src/pages/projects.tsx`, `src/pages/blog.tsx`

**Interfaces:**
- Consumes: `glass-card`, `arrow-button`, `card-hover` (Task 1), `projects`/`blogPosts` (Task 4).

- [ ] **Step 1: Restyle project cards**

In `src/pages/projects.tsx`:
1. Replace the import `import { MdOutlineOpenInNew } from "react-icons/md";` with `import { MdArrowOutward } from "react-icons/md";`.
2. On the card `<Link ... className="group overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover">` change the className to `group overflow-hidden glass-card card-hover`.
3. Replace the inner title row (the `<div className="flex flex-row items-center space-x-2">` block that contains `<h3>` and a nested `<Link>`) with the following. The old nested link put an anchor inside an anchor, which is invalid HTML:

```tsx
                <div className="flex flex-row items-center justify-between gap-3">
                  <h3 className="text-left text-xl font-semibold">{project.title}</h3>
                  <span className="arrow-button" aria-hidden>
                    <MdArrowOutward size={18} />
                  </span>
                </div>
```
4. Change the tag chips' `rounded-full border text-xs font-light px-2 py-1` to `rounded-full border bg-white/60 text-xs px-3 py-1`.
5. Replace the page heading (`<div className="flex flex-col sm:flex-row justify-center ...">` with the two `h1`/`h2`) so it reads:

```tsx
        <h1 className="text-center font-display text-4xl sm:text-6xl">
          Project Repository
        </h1>
```

- [ ] **Step 2: Restyle blog cards**

In `src/pages/blog.tsx`:
1. Import `MdArrowOutward` from `react-icons/md` and change the card `<Link>`'s className to include `glass-card card-hover` in place of the old `rounded-4xl backdrop-blur-sm border shadow-xs` classes (keep the existing layout classes such as `group`, `flex`, `overflow-hidden`; check the current className with `grep -n "className" src/pages/blog.tsx | sed -n 1,20p`).
2. Add the arrow button at the end of the text column, after the date block:

```tsx
              <span className="arrow-button self-end" aria-hidden>
                <MdArrowOutward size={18} />
              </span>
```
3. Replace the page heading with `<h1 className="text-center font-display text-4xl sm:text-6xl">Blog</h1>` (keep whatever words the current heading uses).

- [ ] **Step 3: Verify**

Run: `npm run build`. Expected: succeeds. Run `npm run dev` and open `/projects` and `/blog`: cards are rounded glass tiles with a yellow circular arrow, filter buttons on `/projects` still filter, and clicking anywhere on a card navigates. Check the browser console for a React "validateDOMNesting" warning; there should be none.

- [ ] **Step 4: Commit**

```bash
git add src/pages
git commit -m "Restyle project and blog listings as glass tiles

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 8: Detail pages sweep

**Files:**
- Modify as needed: files in `src/projects/`, `src/blogs/`, `src/components/Carousel.tsx`, `src/pages/not-found.tsx`

- [ ] **Step 1: Find leftovers of the dark theme**

Run: `grep -rn "text-white\|bg-white/\|border-white\|text-\[#\|bg-\[#" src/projects src/blogs src/components/Carousel.tsx src/pages/not-found.tsx`
For each hit, decide whether it reads on a light glass panel. Fix by swapping to `text-ink`, `bg-white/60` or `border` as appropriate. Do not restructure markup.

- [ ] **Step 2: Style the back link as a circular button**

Detail pages have a back link using `MdOutlineKeyboardArrowLeft`. Find them: `grep -rn "MdOutlineKeyboardArrowLeft" src/projects src/blogs | head`. Where the icon sits inside a `<Link>`, give the link `className="arrow-button"` (keeping its `to`/`target` props) so it becomes the yellow circle. Apply the same pattern to every page that has it (the change is identical in each, so a small `sed` or manual pass is fine).

- [ ] **Step 3: Visual sweep with Review Focus 4**

Run `npm run dev` and view each of these at 1280px wide and at 360px wide (browser devtools device toolbar): `/projects/subay` (carousel, long text), `/projects/pixels` ("coming soon" shape), `/blogs/i-passed-the-cse-exam` (long reading page), `/about`, `/nope`. Expected at both widths:
- Text is dark and readable on the glass.
- At 360px there is no horizontal scroll (check by trying to swipe or scroll sideways) and the bottom rail never covers the last line of content (scroll to the very bottom).
- The carousel controls, tags and images look intentional, not washed out.

Fix what fails with utility classes on the offending element.

- [ ] **Step 4: Confirm the backdrop-filter fallback (Review Focus 5)**

In browser devtools, add `backdrop-filter: none !important; -webkit-backdrop-filter: none !important;` to the `.glass-panel` element to simulate lack of support. Note that this only shows the blur being off; the `@supports not` fallback itself is verified by reading the built CSS: run `npm run build` then `grep -o "@supports not[^{]*{[^}]*}" dist/assets/*.css | head` and confirm both `glass-panel` and `glass-card` fallback rules are present.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "Polish detail pages for the glass theme

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 9: Cleanup, docs and final verification

**Files:**
- Delete: `src/components/Navbar.tsx`, `src/components/SparkleBackground.tsx`, `src/components/HeroSection.tsx`, `src/components/AboutSection.tsx`, `src/components/ProjectsSection.tsx`, `scripts/codemod-shell.mjs`
- Modify: `CLAUDE.md`

- [ ] **Step 1: Confirm nothing still imports the files being deleted**

Run: `grep -rn "components/Navbar\|components/SparkleBackground\|HeroSection\|AboutSection\|ProjectsSection\|ContactSection\|SkillsSection" src --include=*.tsx | grep -v "^src/components/\(Navbar\|SparkleBackground\|HeroSection\|AboutSection\|ProjectsSection\)\.tsx"`
Expected: only the `SkillsSection`/`ContactSection` imports in `src/pages/about.tsx`. If anything else appears, stop and fix that first.

- [ ] **Step 2: Delete them**

```bash
rm src/components/Navbar.tsx src/components/SparkleBackground.tsx src/components/HeroSection.tsx src/components/AboutSection.tsx src/components/ProjectsSection.tsx
rm scripts/codemod-shell.mjs && rmdir scripts
```

- [ ] **Step 3: Update `CLAUDE.md`**

Replace the "Shared layout pieces" and "Styling" bullets in the Architecture section so they describe the new setup:
- Routing: all routes are nested under the `Shell` layout route in `src/App.tsx`. `Shell` (in `src/components/shell/`) provides the blurred background, glass panel, icon `Rail` and `TopBar` (with `SearchPill`). Pages render only their own content.
- Content data: the `projects` and `blogPosts` arrays live in `src/data/`. The listing pages, the home stats and the search all read from there. Adding a project or post means: the new page file, a `<Route>` in `App.tsx`, and an entry in the matching `src/data/` array.
- Styling: tokens and the `glass-panel`, `glass-card`, `arrow-button`, `white-button` and `transparent-button` utilities live in `src/index.css`. The display font is used via `font-display`, and the accent color via `bg-accent`/`text-accent`.
- The old note that `pages/home.tsx` composes sections from `src/components/` no longer applies (home is a single bento component), and Skills and Contact now render from the About page.

- [ ] **Step 4: Final verification**

Run: `npm run build`
Expected: succeeds with no type errors.

Run: `npm run lint`
Expected: no more errors or warnings than the baseline recorded in Task 1, Step 2.

Run `npm run dev` and click through: Home → About (scroll to skills and contact) → Projects (filter, open a project, use its back button) → Blog (open a post) → search for a project and jump to it → an unknown URL. Expected: the shell never disappears, the panel scroll resets on each navigation, and there are no console errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Remove old navbar, sparkles and home sections; update CLAUDE.md

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

## Self-Review Notes

- **Spec coverage:** tokens and fonts → Task 1; shell, rail, top bar, nested routing → Task 2; per-page chrome removal → Task 3; search and data arrays → Task 4; home bento with computed stats → Task 5; Skills and Contact on About → Task 6; listing tiles and inner pages → Tasks 7-8; cleanup → Task 9. The spec's risks (contrast, `backdrop-filter` fallback, mobile nested scroll, accessibility) map to Task 1 (fallback), Task 2 (mobile scroll and labels) and Tasks 4 and 8 (keyboard and phone checks).
- **Deviation from the spec:** data arrays move to `src/data/` instead of being exported from the page files (reason above).
- **Open items:** the display font is chosen in Task 1, Step 3. The hero portrait uses the existing `public/assets/images/hero.png` and can be swapped for a new cut-out at any time by replacing that file.
- **Known unknowns to check while executing:** the exact class strings on the blog card `<Link>` (Task 7, Step 2) and the back-link markup (Task 8, Step 2) were not fully read while planning, so both steps say to look at the current markup first.
