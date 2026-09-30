import type { ReactNode } from "react";

// The title bar of an "app window" card: a small icon and title on the left and an optional
// status / action on the right. Put it as the first child of a card (add `overflow-hidden` to the
// card if its rows have a hover background that would poke past the rounded corners).
export const WindowBar = ({
  icon,
  title,
  status,
  onClick,
}: {
  icon?: ReactNode;
  title: string;
  status?: ReactNode;
  /** Makes the whole bar clickable (the caller still provides a real button for keyboards). */
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-2 border-b border-line/40 px-6 py-2.5 text-left text-xs text-cream/70 ${
      onClick ? "cursor-pointer transition-colors hover:bg-cream/5" : ""
    }`}
  >
    {icon && (
      <span aria-hidden className="shrink-0 text-accent">
        {icon}
      </span>
    )}
    <span className="min-w-0 flex-1 truncate">{title}</span>
    {status && <span className="shrink-0">{status}</span>}
  </div>
);
