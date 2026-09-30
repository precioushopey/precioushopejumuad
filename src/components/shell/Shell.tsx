import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Rail } from "./Rail";
import { RightColumn } from "./RightColumn";
import { TopBar } from "./TopBar";

// Only the top-level pages get the profile/latest column; detail pages use the full panel.
const WITH_SIDEBAR = new Set(["/", "/about", "/projects", "/blog"]);

export const Shell = () => {
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLElement>(null);
  const path = pathname.replace(/\/+$/, "") || "/";
  const showSide = WITH_SIDEBAR.has(path);

  // The panel scrolls internally on desktop, the window on mobile.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="relative min-h-dvh overflow-x-clip text-cream lg:h-dvh lg:overflow-hidden">
      <div aria-hidden className="shell-bg" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1500px] flex-col gap-4 p-3 sm:p-6 lg:h-full lg:min-h-0 lg:p-10">
        <TopBar />
        {/* Relative so the rail can span the row's height; the panel sits above it and tucks over its edge. */}
        <div className="relative flex min-h-0 flex-1 flex-col gap-4 lg:pl-[4.5rem] xl:flex-row">
          <main
            ref={scrollRef}
            className="glass-panel panel-scroll min-w-0 flex-1 pb-6 lg:relative lg:z-20 lg:min-h-0 lg:overflow-y-auto"
          >
            <Outlet />
            {showSide && (
              // Below xl the column sits at the bottom of the panel.
              <div className="px-5 pt-6 sm:px-8 xl:hidden">
                <RightColumn />
              </div>
            )}
          </main>
          {showSide && (
            <aside
              aria-label="Profile and skills"
              className="no-scrollbar hidden w-[22rem] shrink-0 xl:-mx-4 xl:block xl:w-[24rem] xl:overflow-y-auto xl:px-4"
            >
              <RightColumn />
            </aside>
          )}
          {/* Last in the DOM so keyboard users reach content first; placed by CSS. */}
          <Rail />
        </div>
      </div>
    </div>
  );
};
