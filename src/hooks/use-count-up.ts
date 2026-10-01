import { useEffect, useState } from "react";

// Counts a number up from 0 once the cards have faded in.
export const useCountUp = (target: number) => {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(target);
      return;
    }
    const DELAY = 800;
    const DURATION = 1200;
    let frame = 0;
    const start = performance.now() + DELAY;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / DURATION, 0), 1);
      setShown(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return shown;
};
