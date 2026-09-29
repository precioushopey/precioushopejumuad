import { useEffect, useId, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
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
    <div ref={wrapRef} className="relative">
      <label className="flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 shadow-sm">
        <MdOutlineSearch size={18} aria-hidden />
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
            } else if (e.key === "Enter" && results[active]) {
              go(results[active].to);
            }
          }}
          className="w-28 bg-transparent text-sm outline-none placeholder:text-ink/50 sm:w-44"
        />
      </label>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          className="glass-card absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden bg-white/95 p-2 text-left sm:w-96"
        >
          {results.length === 0 && (
            <li className="px-3 py-2 text-sm text-ink/60">No matches</li>
          )}
          {results.map((r, i) => (
            <li key={r.to} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r.to)}
                className={`block w-full rounded-2xl px-3 py-2 text-left ${
                  i === active ? "bg-accent/40" : ""
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink/60">
                  {r.kind}
                </span>
                <span className="block truncate text-sm font-medium">{r.title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
