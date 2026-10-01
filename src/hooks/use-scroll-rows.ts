import { useEffect, useRef } from "react";

// Drives rows of images that slide sideways as the page is scrolled.
//
// Put the returned ref on the element that holds the rows, and mark each row `data-row` with its
// moving track as the row's first child. While the element crosses the screen, `--p` on it runs from
// 0 (just coming into view) to 1 (just leaving). Each row gets `--shift`, how far its track is
// wider than the row, so a row can slide from one end to the other. The styling does the rest:
//   moving left:  translateX(calc(var(--shift) * var(--p) * -1))
//   moving right: translateX(calc(var(--shift) * (var(--p) - 1)))
// Nothing re-renders; the values are written straight to the element. With "reduce motion" on,
// nothing is written and the rows stay still.
export const useScrollRows = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const measure = () => {
      root.querySelectorAll<HTMLElement>("[data-row]").forEach((row) => {
        const track = row.firstElementChild as HTMLElement | null;
        if (!track) return;
        const shift = Math.max(0, track.offsetWidth - row.clientWidth);
        // The track inherits this from its row.
        row.style.setProperty("--shift", `${shift}px`);
      });
    };

    const update = () => {
      frame = 0;
      const box = root.getBoundingClientRect();
      const view = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (view - box.top) / (view + box.height)),
      );
      root.style.setProperty("--p", progress.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    update();
    // Scroll events do not bubble, so listen in the capture phase: this catches the panel that
    // scrolls on desktop as well as the window that scrolls on phones.
    document.addEventListener("scroll", schedule, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("scroll", schedule, { capture: true });
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
};
