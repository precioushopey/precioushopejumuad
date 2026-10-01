import type { ReactNode } from "react";
import { ThumbnailTile } from "./ThumbnailTile";

type Item = {
  key: string;
  to: string;
  image: string;
  title: string;
  subtitle: ReactNode;
};

// The layout the Projects and Blog pages share: a heading with category pills, then a grid of large
// thumbnails (or a message when the category is empty). `activeKey` restarts the tile animations
// when the category changes.
export const ThumbnailGallery = ({
  title,
  pills,
  activeKey,
  items,
  emptyText,
}: {
  title: string;
  pills: ReactNode;
  activeKey: string;
  items: Item[];
  emptyText: string;
}) => (
  <div className="space-y-6 p-0 lg:p-6">
    <header className="animate-fade-in text-center lg:space-y-3 lg:text-left">
      <h1 className="text-xl font-medium max-lg:sr-only sm:text-2xl">
        {title}
      </h1>
      {pills}
    </header>

    {items.length === 0 ? (
      <p className="text-cream/70">{emptyText}</p>
    ) : (
      <div
        key={activeKey}
        className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3 sm:gap-x-3"
      >
        {items.map(({ key, ...item }, index) => (
          <ThumbnailTile key={key} index={index} {...item} />
        ))}
      </div>
    )}
  </div>
);
