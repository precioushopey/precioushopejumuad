import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuArrowLeft, LuFileText } from "react-icons/lu";
import { blogPosts } from "../data/blogPosts";
import { WindowBar } from "./WindowBar";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

// A blog post as a text-document window: title bar with the file name, an address bar with a back
// button, the title and date, then the post itself, and a status bar. The title, date and category
// come from blogPosts (matched on the URL), so each post file only holds its own text.
export const BlogPostLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "");
  const post = blogPosts.find((p) => p.to === path);
  const fileName = `${path.split("/").pop() ?? "post"}.txt`;

  return (
    <div className="p-0 lg:p-8">
      <article className="glass-card mx-auto max-w-5xl animate-fade-in overflow-hidden">
        <WindowBar icon={<LuFileText size={14} />} title={fileName} />
        <div className="flex items-center gap-2 border-b border-line/40 px-4 py-2 text-left text-xs text-cream/60 sm:px-6">
          <Link
            to="/blog"
            aria-label="Back to Blog"
            title="Back to Blog"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-cream/50 transition-colors hover:text-cream"
          >
            <LuArrowLeft size={16} aria-hidden />
          </Link>
          <span className="min-w-0 truncate">
            This PC <span aria-hidden>›</span> Blog{" "}
            {post && (
              <>
                <span aria-hidden>›</span>{" "}
                <span className="capitalize">{post.category}</span>
              </>
            )}
          </span>
        </div>

        <div className="space-y-6 p-4 sm:p-6 lg:p-8">
          {post && (
            <header className="space-y-3 text-left">
              <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
                {post.title}
              </h1>
              <p className="flex flex-wrap items-center gap-2 text-xs text-cream/60">
                <span>Date modified:</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="rounded-full border border-line bg-cream/10 px-2.5 py-0.5 capitalize text-cream/80">
                  {post.category}
                </span>
              </p>
            </header>
          )}
          {children}
        </div>

        <div className="border-t border-line/40 px-4 py-2 text-left text-xs text-cream/60 sm:px-6">
          Precious Hope Jumuad
        </div>
      </article>
    </div>
  );
};
