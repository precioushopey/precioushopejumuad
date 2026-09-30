import type { ReactNode } from "react";
import { Link } from "react-router-dom";

// A large-icon tile like File Explorer's: a rounded, bordered thumbnail with the name and a muted
// line of details underneath. Shared by the Projects and Blog pages.
export const ThumbnailTile = ({
  to,
  image,
  title,
  subtitle,
}: {
  to: string;
  image: string;
  title: string;
  subtitle: ReactNode;
}) => (
  <Link
    to={to}
    className="group flex flex-col gap-2 rounded-2xl p-2 text-left transition-colors hover:bg-cream/10 sm:gap-3 sm:p-3"
  >
    <img
      src={image}
      alt=""
      className="aspect-[16/10] w-full rounded-xl border border-line object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
    />
    <span className="min-w-0">
      <span className="line-clamp-2 block font-semibold sm:text-base">
        {title}
      </span>
      <span className="block text-xs text-cream/60">{subtitle}</span>
    </span>
  </Link>
);
