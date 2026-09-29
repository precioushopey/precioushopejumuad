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
