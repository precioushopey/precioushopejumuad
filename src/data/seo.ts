import site from "./site.json";
import seo from "./seo.json";

export type PageSeo = {
  /** The page's own title; the site name is added after it. */
  title: string;
  description: string;
  /** Keeps the page out of search results while still letting crawlers follow its links. */
  noindex?: boolean;
};

// The pages that are not a single project or blog post. Projects and posts take their title and
// description from their own entries in src/data/projects.ts and src/data/blogPosts.ts.
// The text lives in seo.json so scripts/prerender-meta.mjs can read the same words at build time.
export const staticPages: Record<string, PageSeo> = {
  "/": { title: site.title, description: site.description },
  ...(seo.staticPages as Record<string, PageSeo>),
};

export const notFoundSeo: PageSeo = seo.notFound;
