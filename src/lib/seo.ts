import site from "../data/site.json";
import { blogPosts } from "../data/blogPosts";
import { projects } from "../data/projects";
import { notFoundSeo, staticPages, type PageSeo } from "../data/seo";

export type ResolvedSeo = PageSeo & {
  /** The full <title>. */
  fullTitle: string;
  /** The page's address without query or trailing slash, e.g. "/projects/subay". */
  path: string;
  canonical: string;
  image: string;
  type: "website" | "article";
  /** Structured data (schema.org) for the page, if it has any. */
  jsonLd?: object;
};

// Search results cut descriptions off at about 160 characters, so long ones are shortened at a word.
const shorten = (text: string, max = 158) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
};

const absolute = (path: string) => `${site.url}${path === "/" ? "/" : path}`;

const person = {
  "@type": "Person",
  name: site.name,
  url: `${site.url}/`,
  jobTitle: site.jobTitle,
};

/** What the head of the page should say for a given address. */
export const seoFor = (rawPath: string): ResolvedSeo => {
  const path = rawPath.replace(/\/+$/, "") || "/";
  const image = absolute(site.image);
  const base = { path, canonical: absolute(path), image };
  const withSite = (title: string) =>
    path === "/" ? title : `${title} | ${site.name}`;

  const page = staticPages[path];
  if (page) {
    return {
      ...page,
      ...base,
      fullTitle: withSite(page.title),
      type: "website",
      jsonLd:
        path === "/"
          ? {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: site.name,
                  url: `${site.url}/`,
                  description: site.description,
                },
                { ...person, sameAs: site.sameAs, image },
              ],
            }
          : undefined,
    };
  }

  const post = blogPosts.find((p) => p.to === path);
  if (post) {
    return {
      title: post.title,
      description: shorten(post.description),
      ...base,
      image: absolute(post.image),
      fullTitle: withSite(post.title),
      type: "article",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: absolute(post.image),
        datePublished: post.date,
        author: person,
        mainEntityOfPage: absolute(path),
      },
    };
  }

  const project = projects.find((p) => p.url === path);
  if (project) {
    return {
      title: project.title,
      description: shorten(project.description),
      noindex: project.comingSoon,
      ...base,
      image: absolute(project.image),
      fullTitle: withSite(project.title),
      type: "article",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: absolute(project.image),
        keywords: project.tags.join(", "),
        author: person,
        url: absolute(path),
      },
    };
  }

  return {
    ...notFoundSeo,
    ...base,
    fullTitle: withSite(notFoundSeo.title),
    type: "website",
  };
};

const meta = (selector: string, attribute: string, value: string) => {
  const key = selector.match(/"(.+?)"/)?.[1] ?? "";
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(
      selector.includes("property=") ? "property" : "name",
      key,
    );
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

/** Writes the title, description, canonical link, social tags, robots rule and JSON-LD to <head>. */
export const applySeo = (seo: ResolvedSeo) => {
  document.title = seo.fullTitle;
  meta('meta[name="description"]', "content", seo.description);
  meta(
    'meta[name="robots"]',
    "content",
    seo.noindex ? "noindex, follow" : "index, follow",
  );

  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = seo.canonical;

  meta('meta[property="og:title"]', "content", seo.fullTitle);
  meta('meta[property="og:description"]', "content", seo.description);
  meta('meta[property="og:url"]', "content", seo.canonical);
  meta('meta[property="og:type"]', "content", seo.type);
  meta('meta[property="og:image"]', "content", seo.image);
  meta('meta[name="twitter:title"]', "content", seo.fullTitle);
  meta('meta[name="twitter:description"]', "content", seo.description);
  meta('meta[name="twitter:image"]', "content", seo.image);

  const id = "page-jsonld";
  document.getElementById(id)?.remove();
  if (seo.jsonLd) {
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(seo.jsonLd);
    document.head.appendChild(script);
  }
};
