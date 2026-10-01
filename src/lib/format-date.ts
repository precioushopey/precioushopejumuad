/** "2026-05-04" as "May 4, 2026", the same for every visitor (UTC). */
export const formatLongDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
