import { PillTabs } from "../components/PillTabs";
import { ThumbnailGallery } from "../components/ThumbnailGallery";
import { blogCategories } from "../data/blogPosts";
import { useBlogPosts } from "../hooks/use-blog-posts";

// The posts as the same thumbnail gallery the Projects page uses, with the date as the details line
// and category pills (kept in the URL, /blog?category=<c>) above them.
const Blog = () => {
  const { active, posts } = useBlogPosts();

  return (
    <ThumbnailGallery
      title="Blog Posts"
      activeKey={active}
      emptyText="No posts in this category yet."
      pills={
        <PillTabs
          active={active}
          markCurrent
          categories={blogCategories}
          basePath="/blog"
          label="Blog categories"
        />
      }
      items={posts.map((post) => ({
        key: post.to,
        to: post.to,
        image: post.image,
        title: post.title,
        subtitle: <time dateTime={post.date}>{post.dateLabel}</time>,
      }))}
    />
  );
};

export default Blog;
