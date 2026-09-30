import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Rail } from "./Rail";
import { TopBar } from "./TopBar";

export const Shell = () => {
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLElement>(null);

  // The panel scrolls internally on desktop, the window on mobile.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="relative min-h-dvh overflow-x-clip text-cream lg:h-dvh lg:overflow-hidden">
      <div aria-hidden className="shell-bg" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1400px] p-3 sm:p-6 lg:h-full lg:p-10">
        <div className="glass-panel flex w-full min-w-0 flex-col lg:flex-row lg:overflow-hidden">
          <div className="flex min-w-0 flex-1 flex-col lg:min-h-0">
            <TopBar />
            <main
              ref={scrollRef}
              className="panel-scroll flex-1 px-5 pb-6 sm:px-8 lg:min-h-0 lg:overflow-y-auto lg:pb-8"
            >
              <Outlet />
            </main>
          </div>
          <Rail />
        </div>
      </div>
    </div>
  );
};
