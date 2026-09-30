import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { categories as projectCategories } from "../data/projects";

// Category pills that link to `<basePath>?category=<c>` ("all" links to the bare path). Defaults to
// the project categories; the Blog page passes its own. Below lg they stay on one row that scrolls
// sideways (centred when it fits: the auto margins on the first and last pill do that without
// cutting off the start of the row the way justify-center would).
export const PillTabs = ({
  active,
  markCurrent = false,
  categories = projectCategories,
  basePath = "/projects",
  label = "Project categories",
}: {
  active?: string;
  markCurrent?: boolean;
  categories?: readonly string[];
  basePath?: string;
  label?: string;
}) => {
  const navRef = useRef<HTMLElement>(null);

  // Keep the selected pill in view when the row is scrolled.
  useEffect(() => {
    const nav = navRef.current;
    const current = nav?.querySelector<HTMLElement>("[data-active-pill]");
    if (!nav || !current) return;
    nav.scrollTo({
      left: current.offsetLeft - (nav.clientWidth - current.offsetWidth) / 2,
      behavior: "instant",
    });
  }, [active]);

  return (
    <nav
      ref={navRef}
      aria-label={label}
      className="no-scrollbar flex gap-2 max-lg:overflow-x-auto lg:flex-wrap lg:gap-4"
    >
      {categories.map((c) => (
        <Link
          key={c}
          to={c === "all" ? basePath : `${basePath}?category=${c}`}
          aria-current={markCurrent && c === active ? "page" : undefined}
          data-active-pill={c === active ? "" : undefined}
          className={`${c === active ? "pill-outline" : "pill"} shrink-0 capitalize max-lg:px-3 max-lg:py-1 max-lg:text-xs max-lg:first:ml-auto max-lg:last:mr-auto`}
        >
          {c}
        </Link>
      ))}
    </nav>
  );
};
