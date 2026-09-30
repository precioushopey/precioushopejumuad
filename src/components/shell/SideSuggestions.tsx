import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LuArrowRight, LuFolderOpen, LuNewspaper } from "react-icons/lu";
import { blogPosts } from "../../data/blogPosts";
import { projects } from "../../data/projects";
import { ThumbnailTile } from "../ThumbnailTile";
import { WindowBar } from "../WindowBar";

type Item = { to: string; image: string; title: string; subtitle: ReactNode };

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

// A card of thumbnail tiles: one column when it is the right-hand column (xl and up), a grid when
// it sits under the page (2 columns on phones, 3 from lg).
const Suggestions = ({
  title,
  label,
  icon,
  seeAllTo,
  items,
}: {
  title: string;
  label: string;
  icon: ReactNode;
  seeAllTo: string;
  items: Item[];
}) => (
  <section aria-label={label} className="glass-card">
    <WindowBar
      icon={icon}
      title={title}
      status={
        <Link
          to={seeAllTo}
          aria-label={`See all ${label.toLowerCase()}`}
          title={`See all ${label.toLowerCase()}`}
          className="flex h-6 w-6 items-center justify-center rounded-full text-cream/50 transition-colors duration-300 hover:text-cream"
        >
          <LuArrowRight size={14} aria-hidden />
        </Link>
      }
    />
    <div className="grid grid-cols-2 gap-x-2 gap-y-1 p-3 lg:grid-cols-3 xl:grid-cols-1">
      {items.map((item, index) => (
        <ThumbnailTile key={item.to} {...item} index={index} />
      ))}
    </div>
  </section>
);

// Every other post, newest first. The current post is left out.
export const BlogSuggestions = ({ currentPath }: { currentPath: string }) => {
  const items = blogPosts
    .filter((p) => p.to !== currentPath)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => ({
      to: p.to,
      image: p.image,
      title: p.title,
      subtitle: <time dateTime={p.date}>{formatDate(p.date)}</time>,
    }));

  return (
    <Suggestions
      title="More posts"
      label="More posts"
      icon={<LuNewspaper size={14} />}
      seeAllTo="/blog"
      items={items}
    />
  );
};

// Other projects, same category first, then the rest in the usual order. The current one is left out.
export const ProjectSuggestions = ({
  currentPath,
}: {
  currentPath: string;
}) => {
  const current = projects.find((p) => p.url === currentPath);
  const items = projects
    .filter((p) => p.url !== currentPath)
    .map((p, index) => ({ p, index }))
    .sort((a, b) => {
      const sameA = current && a.p.category === current.category ? 0 : 1;
      const sameB = current && b.p.category === current.category ? 0 : 1;
      return sameA - sameB || a.index - b.index;
    })
    .map(({ p }) => ({
      to: p.url,
      image: p.image,
      title: p.title,
      subtitle: p.tags.join(" · "),
    }));

  return (
    <Suggestions
      title="More projects"
      label="More projects"
      icon={<LuFolderOpen size={14} />}
      seeAllTo="/projects"
      items={items}
    />
  );
};
