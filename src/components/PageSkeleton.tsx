// Shown inside the panel while a page's code is still loading, so the layout doesn't jump: a title
// bar and a few cards in the same shapes the real pages use.
export const PageSkeleton = () => (
  <div
    role="status"
    aria-label="Loading"
    className="min-h-[70vh] space-y-6 p-0 motion-safe:animate-pulse lg:p-6"
  >
    <div className="mx-auto h-8 w-32 rounded-full bg-cream/10 lg:mx-0" />
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="space-y-2">
          <div className="aspect-[16/10] rounded-xl bg-cream/10" />
          <div className="h-3 w-3/4 rounded-full bg-cream/10" />
        </div>
      ))}
    </div>
    <span className="sr-only">Loading…</span>
  </div>
);
