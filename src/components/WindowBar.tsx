import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

// The title bar of an "app window" card: a small icon and title on the left and an optional
// status / action on the right. Put it as the first child of a card (add `overflow-hidden` to the
// card if its rows have a hover background that would poke past the rounded corners).
//
// With `to`, the whole bar is a link to that page and a small arrow sits at the right end (use it on
// cards with a "see all" arrow; the bar's top corners follow the card's 2rem radius).
export const WindowBar = ({
  icon,
  title,
  status,
  onClick,
  to,
  toLabel,
}: {
  icon?: ReactNode;
  title: string;
  status?: ReactNode;
  /** Makes the whole bar clickable (the caller still provides a real button for keyboards). */
  onClick?: () => void;
  /** Turns the whole bar into a link to this route, with an arrow at the end. */
  to?: string;
  /** The link's accessible name, e.g. "See all projects". */
  toLabel?: string;
}) => {
  const base =
    "flex items-center gap-2 border-b border-line/40 px-8 py-4 text-left text-xs text-cream/70";
  const content = (
    <>
      {icon && (
        <span aria-hidden className="shrink-0 text-accent">
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1 truncate">{title}</span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        aria-label={toLabel}
        title={toLabel}
        className={`${base} group cursor-pointer rounded-t-[2rem] transition-colors hover:bg-cream/5`}
      >
        {content}
        <span
          aria-hidden
          className="flex h-6 w-6 shrink-0 items-center justify-center text-cream/50 transition-colors group-hover:text-cream"
        >
          <LuArrowRight size={14} />
        </span>
      </Link>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`${base} ${
        onClick ? "cursor-pointer transition-colors hover:bg-cream/5" : ""
      }`}
    >
      {content}
      {status && <span className="shrink-0">{status}</span>}
    </div>
  );
};
