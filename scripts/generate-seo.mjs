// Writes public/sitemap.xml and public/llms.txt from the site's own data, so they never fall out of
// step with the pages. Runs before every build (the "prebuild" script in package.json).
//
// Titles and dates are read straight from src/data/*.ts with simple patterns, so those files must
// keep their `title:`, `url:` / `to:` and `date:` fields as plain string literals.
import { readFileSync, writeFileSync } from "node:fs";

const site = JSON.parse(readFileSync("src/data/site.json", "utf8"));
const seo = JSON.parse(readFileSync("src/data/seo.json", "utf8"));
const read = (file) => readFileSync(file, "utf8");

// Each entry in those arrays is an object that starts with a line holding just "  {".
const entries = (source, linkKey) =>
  source
    .split(/\r?\n  \{\r?\n/)
    .slice(1)
    .map((block) => {
      const pick = (key) =>
        block.match(new RegExp(`\\b${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`))?.[1];
      return {
        path: pick(linkKey),
        title: pick("title"),
        date: pick("date"),
        comingSoon: /\bcomingSoon:\s*true\b/.test(block),
      };
    })
    .filter((entry) => entry.path);

// Placeholder "Coming Soon" pages are left out of the sitemap and llms.txt.
const projects = entries(read("src/data/projects.ts"), "url").filter(
  (project) => !project.comingSoon,
);
const posts = entries(read("src/data/blogPosts.ts"), "to");

const today = new Date().toISOString().slice(0, 10);
const pages = [
  { path: "/", priority: "1.0", lastmod: today },
  { path: "/about", priority: "0.9", lastmod: today },
  { path: "/projects", priority: "0.9", lastmod: today },
  { path: "/blog", priority: "0.8", lastmod: today },
  ...Object.entries(seo.staticPages)
    .filter(
      ([path, page]) =>
        !page.noindex && !["/about", "/projects", "/blog"].includes(path),
    )
    .map(([path]) => ({ path, priority: "0.3", lastmod: today })),
  ...projects.map((p) => ({ path: p.path, priority: "0.7", lastmod: today })),
  ...posts.map((p) => ({
    path: p.path,
    priority: "0.6",
    lastmod: p.date ?? today,
  })),
];

const url = (path) => `${site.url}${path === "/" ? "/" : path}`;
writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url>\n    <loc>${url(p.path)}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`,
);

const list = (items) =>
  items.map((i) => `- [${i.title}](${url(i.path)})`).join("\n");
writeFileSync(
  "public/llms.txt",
  `# ${site.name}

> ${site.description}

## Pages
- [Home](${url("/")})
- [About](${url("/about")}): experience, education, certifications and skills
- [Projects](${url("/projects")}): all projects
- [Blog](${url("/blog")}): all posts

## Projects
${list(projects)}

## Blog posts
${list(posts)}
`,
);

console.log(
  `seo: sitemap.xml (${pages.length} urls) and llms.txt (${projects.length} projects, ${posts.length} posts)`,
);
