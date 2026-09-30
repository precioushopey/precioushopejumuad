import { Link } from "react-router-dom";
import { MdMoreVert } from "react-icons/md";
import { latestItems } from "../data/latest";

export const LatestList = () => (
  <section aria-label="Latest" className="glass-card space-y-3 p-4">
    <h2 className="px-1 text-sm text-cream/70">Latest</h2>
    {latestItems().map((item) => (
      <div
        key={item.to}
        className="flex items-center gap-3 rounded-2xl bg-black/20 p-2.5"
      >
        <Link to={item.to} className="flex min-w-0 flex-1 items-center gap-3 text-left">
          <img
            src={item.image}
            alt=""
            className="h-14 w-16 shrink-0 rounded-xl object-cover"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium">{item.title}</span>
            <span className="line-clamp-2 text-xs text-cream/70">
              {item.description}
            </span>
          </span>
        </Link>
        {/* Mouse convenience only; the row link above is the keyboard target. */}
        <Link
          to={item.to}
          tabIndex={-1}
          aria-hidden
          className="rounded-full p-1.5 hover:bg-cream/15"
        >
          <MdMoreVert size={20} />
        </Link>
      </div>
    ))}
  </section>
);
