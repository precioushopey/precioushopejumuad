import type { ReactNode } from "react";
import { LuChevronRight, LuFolder, LuFolderOpen } from "react-icons/lu";

// A section that starts closed as a "folder" row, like File Explorer. Clicking (or pressing
// Enter/Space on) the row opens it and shows the items below. Built on <details>, so it is
// keyboard and screen-reader friendly without any state of its own.
export const FolderSection = ({
  title,
  count,
  className = "",
  children,
}: {
  title: ReactNode;
  count: number;
  className?: string;
  children: ReactNode;
}) => (
  <details className={`group ${className}`}>
    <summary className="glass-card flex cursor-pointer list-none items-center gap-3 px-5 py-4 text-left transition-colors hover:border-accent/40 [&::-webkit-details-marker]:hidden">
      <LuFolder
        aria-hidden
        size={24}
        className="shrink-0 text-accent group-open:hidden"
      />
      <LuFolderOpen
        aria-hidden
        size={24}
        className="hidden shrink-0 text-accent group-open:block"
      />
      <span className="min-w-0 flex-1 text-xl font-bold sm:text-2xl">
        {title}
      </span>
      <span className="shrink-0 text-xs text-cream/60">
        {count} {count === 1 ? "item" : "items"}
      </span>
      <LuChevronRight
        aria-hidden
        size={16}
        className="shrink-0 text-cream/50 transition-transform group-open:rotate-90"
      />
    </summary>
    <div className="space-y-6 pt-6">{children}</div>
  </details>
);
