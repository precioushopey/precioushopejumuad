import type { ReactNode } from "react";
import { LuMinus, LuSquare, LuX } from "react-icons/lu";

// The title bar of an "app window" card: a small icon and title on the left, optional status text,
// and the usual minimize / maximize / close glyphs on the right. The glyphs are decorative only.
// Put it as the first child of a `glass-card overflow-hidden` so the card clips its corners.
export const WindowBar = ({
  icon,
  title,
  status,
}: {
  icon?: ReactNode;
  title: string;
  status?: ReactNode;
}) => (
  <div className="flex items-center gap-2 border-b border-line/40 px-6 py-2.5 text-left text-xs text-cream/70">
    {icon && (
      <span aria-hidden className="shrink-0 text-accent">
        {icon}
      </span>
    )}
    <span className="min-w-0 flex-1 truncate">{title}</span>
    {status && <span className="shrink-0">{status}</span>}
    <span
      aria-hidden
      className="flex shrink-0 items-center gap-3 text-cream/40"
    >
      <LuMinus size={12} />
      <LuSquare size={10} />
      <LuX size={12} />
    </span>
  </div>
);
