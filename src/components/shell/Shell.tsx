import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Rail } from "./Rail";
import { BlogSuggestions, ProjectSuggestions } from "./SideSuggestions";
import { RightColumn } from "./RightColumn";
import { TopBar } from "./TopBar";
import { PageSkeleton } from "../PageSkeleton";
import { useSeo } from "../../hooks/use-seo";

// The top-level pages get the profile/contact column; a blog post or a project page gets a column
// of other posts / projects instead.
const WITH_SIDEBAR = new Set(["/", "/about", "/projects", "/blog"]);

export const Shell = () => {
  useSeo();
  // `key` changes on every navigation, so clicking a link to the page we're already on still scrolls.
  const { pathname, hash, key } = useLocation();
  const scrollRef = useRef<HTMLElement>(null);
  const previousPath = useRef(pathname);
  const path = pathname.replace(/\/+$/, "") || "/";
  const isPost = path.startsWith("/blogs/");
  const isProject = path.startsWith("/projects/");
  const isDetail = isPost || isProject;
  const showSide = WITH_SIDEBAR.has(path) || isDetail;
  const sideLabel = isPost
    ? "More posts"
    : isProject
      ? "More projects"
      : "Profile and contact";
  const sideContent = isPost ? (
    <BlogSuggestions currentPath={path} />
  ) : isProject ? (
    <ProjectSuggestions currentPath={path} />
  ) : (
    <RightColumn />
  );

  // The panel scrolls internally on desktop, the window on mobile. A new page starts at the
  // top; a link with a #section (e.g. /about#contact) then jumps to that section.
  useEffect(() => {
    const panel = scrollRef.current;
    if (previousPath.current !== pathname || !hash) {
      previousPath.current = pathname;
      panel?.scrollTo({ top: 0, behavior: "instant" });
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    if (!hash || !panel) return;

    const scrollToSection = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;
      const skipPadding = 48; // sections carry a large top padding; land near their heading
      const panelScrolls = getComputedStyle(panel).overflowY === "auto";
      if (panelScrolls) {
        const top =
          target.getBoundingClientRect().top -
          panel.getBoundingClientRect().top +
          panel.scrollTop +
          skipPadding;
        panel.scrollTo({ top, behavior: "instant" });
      } else {
        const top =
          target.getBoundingClientRect().top + window.scrollY + skipPadding;
        window.scrollTo({ top, behavior: "instant" });
      }
    };

    scrollToSection();
    // Images above the target can finish loading and shift it; correct once.
    const retry = window.setTimeout(scrollToSection, 500);
    return () => window.clearTimeout(retry);
  }, [pathname, hash, key]);

  return (
    <div className="relative min-h-dvh overflow-x-clip text-cream lg:h-dvh lg:overflow-hidden">
      <div aria-hidden className="shell-bg" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1500px] flex-col gap-3 p-3 sm:p-6 lg:h-full lg:min-h-0 lg:justify-center lg:p-9">
        <TopBar />
        {/* Relative so the rail can span the row's height; the panel sits above it and tucks over its edge. */}
        {/* On desktop the row is only as tall as its content (up to the window height), so the panel
            and the right column always end on the same line instead of the panel stretching alone. */}
        <div className="relative flex min-h-0 flex-1 flex-col gap-3 lg:flex-initial lg:pl-[4.5rem] xl:flex-row">
          <main
            ref={scrollRef}
            className="glass-panel panel-scroll min-w-0 flex-1 pb-6 lg:relative lg:z-20 lg:flex lg:min-h-0 lg:flex-col lg:overflow-y-auto"
          >
            <Suspense fallback={<PageSkeleton />}>
              <Outlet />
              {isDetail && (
                // Other posts / projects at the bottom of the page below xl, where there is no room
                // for the column beside the panel. (The profile and message form have no bottom slot:
                // below xl they are their own page, /profile.) Inside the same Suspense as the page,
                // so it appears with the page instead of being pushed down when the page loads.
                <div className="pt-3 lg:px-6 lg:pt-6 xl:hidden">
                  {sideContent}
                </div>
              )}
            </Suspense>
          </main>
          {showSide && (
            <aside
              aria-label={sideLabel}
              className="no-scrollbar hidden w-[22rem] shrink-0 xl:-mx-3 xl:block xl:w-[24rem] xl:overflow-y-auto xl:px-3"
            >
              {sideContent}
            </aside>
          )}
          {/* Last in the DOM so keyboard users reach content first; placed by CSS. */}
          <Rail />
        </div>
      </div>
    </div>
  );
};
