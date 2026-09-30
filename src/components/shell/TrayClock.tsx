import { useEffect, useState } from "react";
import { manilaTimeLabel } from "../../lib/manilaTime";

// The system-tray clock at the end of the dock / taskbar. Always Philippine time.
export const TrayClock = ({ className = "" }: { className?: string }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time
      dateTime={now.toISOString()}
      title="Philippine time"
      className={`whitespace-nowrap text-center text-[10px] leading-none text-cream/70 ${className}`}
    >
      {manilaTimeLabel(now)}
    </time>
  );
};
