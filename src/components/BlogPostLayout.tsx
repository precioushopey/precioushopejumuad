import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { LuFileText } from "react-icons/lu";
import { blogPosts } from "../data/blogPosts";
import { DocumentWindow } from "./DocumentWindow";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

// A blog post as a text-document window. The title, date and category come from blogPosts
// (matched on the URL), so each post file only holds its own text.
export const BlogPostLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "");
  const post = blogPosts.find((p) => p.to === path);

  return (
    <DocumentWindow
      icon={<LuFileText size={14} />}
      fileName={`${path.split("/").pop() ?? "post"}.txt`}
      backTo="/blog"
      backLabel="Back to Blog"
      crumbs={["Blog", post?.category]}
      title={post?.title}
      meta={
        post && (
          <>
            <span>Date modified:</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="rounded-full border border-line bg-cream/10 px-3 py-0.5 capitalize text-cream/80">
              {post.category}
            </span>
          </>
        )
      }
    >
      {children}
    </DocumentWindow>
  );
};
