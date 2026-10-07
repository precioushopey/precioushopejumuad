import {
  Children,
  isValidElement,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { LuArrowUp } from "react-icons/lu";
import { thumb } from "../lib/thumb";

type FolderProps = {
  /** Name shown under the folder. */
  label: string;
  /** Number shown as "N items". */
  count: number;
  /** Picture that peeks out of the folder. */
  peek: string;
  /** What opens when the folder is clicked. */
  children: ReactNode;
};

// A slot: it only carries a folder's details to <FolderGroup>, which reads them from the props
// and shows the children when this folder is the open one.
export const FolderSection = ({ children }: FolderProps) => <>{children}</>;

// A Windows-style large-icon folder: a gold back with a picture peeking out, and the lighter
// front panel over it. The picture lifts a little when the folder is open.
const FolderIcon = ({ peek, open }: { peek: string; open: boolean }) => {
  const uid = useId();
  return (
    <div
      className={`relative aspect-[224/176] w-full max-w-40 transition-transform duration-300 ${open ? "scale-105" : "group-hover:scale-105"}`}
    >
      <svg
        viewBox="0 0 224 176"
        aria-hidden
        className="absolute inset-0 h-full w-full drop-shadow-lg"
      >
        <defs>
          <linearGradient id={`${uid}-back`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffc93c" />
            <stop offset="1" stopColor="#f5b62c" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${uid}-back)`}
          stroke="#ffe08a"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          d="M12 14 Q12 8 20 8 H78 Q86 8 92 15 L98 23 Q102 28 110 28 H204 Q212 28 212 36 V164 Q212 172 204 172 H20 Q12 172 12 164 Z"
        />
      </svg>
      <div
        className={`absolute inset-x-[10%] top-[24%] h-[34%] overflow-hidden rounded-md bg-[#fff6dc] transition-transform duration-300 ${
          open ? "-translate-y-[10%]" : "group-hover:-translate-y-[6%]"
        }`}
      >
        <img
          loading="lazy"
          decoding="async"
          src={thumb(peek)}
          alt=""
          className="h-full w-full object-contain p-1"
        />
      </div>
      <svg
        viewBox="0 0 224 176"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`${uid}-front`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffe99f" />
            <stop offset="1" stopColor="#ffc93c" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${uid}-front)`}
          stroke="#fff6dc"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          d="M12 100 Q12 92 20 92 H96 Q104 92 110 97 Q116 102 124 102 H204 Q212 102 212 110 V164 Q212 172 204 172 H20 Q12 172 12 164 Z"
        />
      </svg>
    </div>
  );
};

// Folders laid out in a grid like File Explorer's large icons. Click one to open it and its
// contents appear underneath; click it again (or another folder) to close it. Starts closed.
export const FolderGroup = ({ children }: { children: ReactNode }) => {
  const folders = Children.toArray(children).filter(
    (child): child is ReactElement<FolderProps> => isValidElement(child),
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const uid = useId();
  const gridRef = useRef<HTMLDivElement>(null);
  const openFolder = openIndex === null ? null : folders[openIndex];

  // Back up to the folder row from the end of an open folder: a smooth scroll (instant with reduced
  // motion), then focus on the open folder so keyboard users land in the same place.
  const backToFolders = () => {
    const grid = gridRef.current;
    if (!grid) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    grid.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
    grid
      .querySelector<HTMLButtonElement>('button[aria-expanded="true"]')
      ?.focus({ preventScroll: true });
  };

  return (
    <div className="animate-fade-in-delay-2 opacity-0">
      {/* Four folders sit in one row; five get five columns, wrapping 3 + 2 on phones. */}
      <div
        ref={gridRef}
        className={`grid scroll-mt-24 gap-x-1 gap-y-3 sm:gap-x-3 ${folders.length === 5 ? "grid-cols-3 sm:grid-cols-5" : "grid-cols-4"}`}
      >
        {folders.map((folder, index) => {
          const open = index === openIndex;
          const { label, count, peek } = folder.props;
          return (
            <button
              key={label}
              type="button"
              aria-expanded={open}
              aria-controls={`${uid}-panel`}
              onClick={() => setOpenIndex(open ? null : index)}
              className="group flex flex-col items-center gap-1.5 rounded-xl md:rounded-2xl px-0.5 py-3 text-center sm:gap-2 sm:px-2 focus-visible:outline-2 focus-visible:outline-accent"
            >
              <FolderIcon peek={peek} open={open} />
              <span>
                <span
                  className={`block break-words text-xs font-semibold leading-tight transition-colors sm:text-base ${open ? "text-accent" : ""}`}
                >
                  {label}
                </span>
                <span className="block text-xs text-cream/60">
                  {count} {count === 1 ? "item" : "items"}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <div
        id={`${uid}-panel`}
        role="region"
        aria-label={openFolder?.props.label}
      >
        {openFolder && (
          // The key restarts the animation whenever another folder is opened. It grows out of the
          // clicked folder: the origin's x is that folder's centre (always 4 columns).
          <div
            key={openIndex}
            style={
              {
                "--ox": `${(((openIndex ?? 0) + 0.5) / folders.length) * 100}%`,
              } as CSSProperties
            }
            className="animate-folder-emerge space-y-6 pt-6 [transform-origin:var(--ox)_0] motion-reduce:animate-none"
          >
            {openFolder.props.children}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={backToFolders}
                className="flex items-center gap-2 transparent-button"
              >
                <LuArrowUp size={16} aria-hidden />
                Back to folders
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
