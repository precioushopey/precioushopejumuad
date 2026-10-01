import { useEffect, useState } from "react";
import { manilaClock, manilaTimeLabel } from "../lib/manilaTime";

// The current Philippine time, ticking every second, wherever the visitor is.
export const usePhilippineClock = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return {
    ...manilaClock(now),
    label: manilaTimeLabel(now),
    iso: now.toISOString(),
  };
};
