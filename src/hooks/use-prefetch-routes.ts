import { useEffect } from "react";

// Every lazy page, keyed by its file. Route slugs match the file names, so /projects/<slug> is
// ../projects/<slug>.tsx. Vite serves these from the same chunks as the lazy() imports in App.tsx.
const loaders = {
  ...import.meta.glob("../projects/*.tsx"),
  ...import.meta.glob("../blogs/*.tsx"),
  ...import.meta.glob("../pages/{about,privacy}.tsx"),
} as Record<string, () => Promise<unknown>>;

const started = new Set<string>();

const fileFor = (pathname: string) => {
  const path = pathname.replace(/\/+$/, "");
  if (path.startsWith("/projects/")) return `..${path}.tsx`;
  if (path.startsWith("/blogs/")) return `..${path}.tsx`;
  return `../pages${path}.tsx`;
};

const prefetch = (event: Event) => {
  const link = (event.target as Element | null)?.closest?.("a[href]");
  if (!(link instanceof HTMLAnchorElement) || link.origin !== location.origin) {
    return;
  }
  const file = fileFor(link.pathname);
  const load = loaders[file];
  if (!load || started.has(file)) return;
  started.add(file);
  load().catch(() => started.delete(file));
};

/** Starts downloading a page the moment the pointer touches its link (hover, press or focus), so
 *  the page is usually ready by the time the click lands. */
export const usePrefetchRoutes = () => {
  useEffect(() => {
    const events = ["pointerover", "pointerdown", "focusin"] as const;
    for (const name of events) document.addEventListener(name, prefetch);
    return () => {
      for (const name of events) document.removeEventListener(name, prefetch);
    };
  }, []);
};
