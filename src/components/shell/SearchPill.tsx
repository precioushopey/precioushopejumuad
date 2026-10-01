import { useEffect, useId, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { searchContent } from "../../lib/search";

export const SearchPill = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const results = searchContent(query);
  const showList = open && query.trim() !== "";

  // Close and clear on navigation.
  useEffect(() => {
    setOpen(false);
    setQuery("");
  }, [pathname]);

  // Close when clicking outside.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const go = (to: string) => navigate(to);

  return (
    <div ref={wrapRef} className="relative w-full md:w-auto xl:w-[22rem]">
      <label className="flex items-center gap-2 rounded-full border-2 border-line bg-black/25 px-3 py-2 text-cream focus-within:border-accent">
        <LuSearch size={18} aria-hidden />
        <input
          type="search"
          value={query}
          placeholder="Search"
          aria-label="Search projects and blog posts"
          aria-expanded={showList}
          aria-controls={listId}
          role="combobox"
          aria-autocomplete="list"
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
            else if (e.key === "ArrowDown" && results.length) {
              e.preventDefault();
              setActive((a) => (a + 1) % results.length);
            } else if (e.key === "ArrowUp" && results.length) {
              e.preventDefault();
              setActive((a) => (a - 1 + results.length) % results.length);
            } else if (e.key === "Enter" && showList && results[active]) {
              go(results[active].to);
            }
          }}
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-cream/60 md:w-44 md:flex-none lg:w-64 xl:w-full"
        />
      </label>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          className="glass-card absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden p-2 text-left sm:w-96"
        >
          {results.length === 0 && (
            <li className="px-3 py-2 text-sm text-cream/60">No matches</li>
          )}
          {results.map((r, i) => (
            <li key={r.to} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r.to)}
                className={`block w-full rounded-xl md:rounded-2xl px-3 py-2 text-left ${
                  i === active ? "bg-accent/25" : ""
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cream/60">
                  {r.kind}
                </span>
                <span className="block truncate text-sm font-medium">
                  {r.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
