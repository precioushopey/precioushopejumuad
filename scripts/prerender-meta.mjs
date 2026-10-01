// After the build: writes dist/<route>/index.html for every page, a copy of dist/index.html with
// that page's own title, description, canonical link, social tags and structured data. Search
// engines and link previews (Facebook, LinkedIn, WhatsApp, X) do not run JavaScript, so without this
// every address would show the home page's tags. The app still runs the same way: it loads on top of
// the copy and keeps the tags up to date as you navigate (src/lib/seo.ts).
//
// The wording rules here mirror src/lib/seo.ts. If you change one, change the other.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const site = JSON.parse(readFileSync("src/data/site.json", "utf8"));
const seo = JSON.parse(readFileSync("src/data/seo.json", "utf8"));
const template = readFileSync("dist/index.html", "utf8");

const decode = (raw) => JSON.parse(`"${raw}"`); // string literals from the .ts files
const entries = (file, linkKey) =>
  readFileSync(file, "utf8")
    .split(/\r?\n  \{\r?\n/)
    .slice(1)
    .map((block) => {
      const pick = (key) => {
        const raw = block.match(
          new RegExp(`\\b${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`),
        )?.[1];
        return raw === undefined ? undefined : decode(raw);
      };
      const tags = block.match(/\btags:\s*\[([^\]]*)\]/)?.[1];
      const comingSoon = /\bcomingSoon:\s*true\b/.test(block);
      return {
        path: pick(linkKey),
        title: pick("title"),
        description: pick("description"),
        image: pick("image"),
        date: pick("date"),
        comingSoon,
        tags: tags
          ? [...tags.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => decode(m[1]))
          : [],
      };
    })
    .filter((entry) => entry.path);

const projects = entries("src/data/projects.ts", "url");
const posts = entries("src/data/blogPosts.ts", "to");

const absolute = (path) => `${site.url}${path}`;
const shorten = (text, max = 158) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
};
const person = {
  "@type": "Person",
  name: site.name,
  url: `${site.url}/`,
  jobTitle: site.jobTitle,
};
const withSite = (title) => `${title} | ${site.name}`;

const pages = [
  ...Object.entries(seo.staticPages).map(([path, page]) => ({
    path,
    fullTitle: withSite(page.title),
    description: page.description,
    noindex: page.noindex,
    image: absolute(site.image),
    type: "website",
  })),
  ...posts.map((post) => ({
    path: post.path,
    fullTitle: withSite(post.title),
    description: shorten(post.description),
    image: absolute(post.image),
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: shorten(post.description),
      image: absolute(post.image),
      datePublished: post.date,
      author: person,
      mainEntityOfPage: absolute(post.path),
    },
  })),
  ...projects.map((project) => ({
    path: project.path,
    fullTitle: withSite(project.title),
    description: shorten(project.description),
    noindex: project.comingSoon,
    image: absolute(project.image),
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: shorten(project.description),
      image: absolute(project.image),
      keywords: project.tags.join(", "),
      author: person,
      url: absolute(project.path),
    },
  })),
];

const escape = (text) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const swap = (html, pattern, replacement, label) => {
  if (!pattern.test(html))
    throw new Error(`prerender-meta: ${label} not found in dist/index.html`);
  return html.replace(pattern, () => replacement);
};

for (const page of pages) {
  const url = absolute(page.path);
  let html = template;
  html = swap(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${escape(page.fullTitle)}</title>`,
    "title",
  );
  html = swap(
    html,
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escape(page.description)}" />`,
    "description",
  );
  html = swap(
    html,
    /<meta name="robots" content="[^"]*" \/>/,
    `<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow"}" />`,
    "robots",
  );
  html = swap(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
    "canonical",
  );
  const property = (name, value) =>
    (html = swap(
      html,
      new RegExp(`<meta property="${name}" content="[^"]*" \\/>`),
      `<meta property="${name}" content="${escape(value)}" />`,
      name,
    ));
  const named = (name, value) =>
    (html = swap(
      html,
      new RegExp(`<meta name="${name}" content="[^"]*" \\/>`),
      `<meta name="${name}" content="${escape(value)}" />`,
      name,
    ));
  property("og:title", page.fullTitle);
  property("og:description", page.description);
  property("og:url", url);
  property("og:type", page.type);
  property("og:image", page.image);
  named("twitter:title", page.fullTitle);
  named("twitter:description", page.description);
  named("twitter:image", page.image);
  html = swap(
    html,
    /<script id="page-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,
    page.jsonLd
      ? `<script id="page-jsonld" type="application/ld+json">${JSON.stringify(page.jsonLd).replace(/</g, "\\u003c")}</script>`
      : "",
    "json-ld",
  );

  const dir = `dist${page.path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, html);
}

console.log(`prerender-meta: wrote ${pages.length} pages with their own tags`);
