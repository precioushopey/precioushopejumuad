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

// The list starting right after the current entry and wrapping round to the start, current left out:
// on the third of five, that is the fourth, the fifth, then the first and the second.
const nextFirst = <T,>(list: T[], isCurrent: (item: T) => boolean): T[] => {
  const at = list.findIndex(isCurrent);
  if (at === -1) return list;
  return [...list.slice(at + 1), ...list.slice(0, at)];
};

// The posts newest first, starting from the one after the current post and wrapping round.
export const BlogSuggestions = ({ currentPath }: { currentPath: string }) => {
  const items = nextFirst(
    [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)),
    (p) => p.to === currentPath,
  )
    .filter((p) => p.to !== currentPath)
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

// The projects in the Projects page order, starting from the one after the current project and
// wrapping round.
export const ProjectSuggestions = ({
  currentPath,
}: {
  currentPath: string;
}) => {
  const items = nextFirst(projects, (p) => p.url === currentPath)
    .filter((p) => p.url !== currentPath)
    .map((p) => ({
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
