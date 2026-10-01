import { memo } from "react";
import { Link } from "react-router-dom";
import { thumb } from "../lib/thumb";

type Props = {
  image: string;
  title: string;
  detail: string;
  /** Makes the whole row a link (with a hover background). */
  to?: string;
  /** Background and padding of the image tile, e.g. "bg-white p-1" for logos. */
  tile?: string;
  /** Shows the whole image (logos) instead of cropping it to fill the tile. */
  contain?: boolean;
  className?: string;
};

// A dark rounded row with a small image tile, a title and a muted detail line. Used for the
// Recent Projects and Work Experience cards on Home.
const ListRowBase = ({
  image,
  title,
  detail,
  to,
  tile = "",
  contain = false,
  className = "",
}: Props) => {
  const classes = `flex min-w-0 items-center gap-3 rounded-xl md:rounded-2xl bg-black/20 p-3 text-left ${
    to ? "transition-colors hover:bg-black/35" : ""
  } ${className}`;
  const content = (
    <>
      <span
        className={`aspect-square w-12 shrink-0 overflow-hidden rounded-xl ${tile}`}
      >
        <img
          loading="lazy"
          decoding="async"
          src={thumb(image)}
          alt=""
          className={`h-full w-full ${contain ? "object-contain" : "object-cover"}`}
        />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-sm font-medium leading-snug">
          {title}
        </span>
        <span className="truncate text-xs text-cream/70">{detail}</span>
      </span>
    </>
  );

  return to ? (
    <Link to={to} className={classes}>
      {content}
    </Link>
  ) : (
    <div className={classes}>{content}</div>
  );
};

// Memoized so the Home page's once-a-second clock tick doesn't redraw it.
export const ListRow = memo(ListRowBase);
