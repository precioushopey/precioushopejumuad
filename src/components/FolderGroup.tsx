import {
  Children,
  isValidElement,
  useId,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

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
    <div className="relative aspect-[224/176] w-full max-w-40">
      <svg
        viewBox="0 0 224 176"
        aria-hidden
        className="absolute inset-0 h-full w-full drop-shadow-lg"
      >
        <defs>
          <linearGradient id={`${uid}-back`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffc93c" stopOpacity="0.32" />
            <stop offset="1" stopColor="#ffc93c" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${uid}-back)`}
          stroke="#ffc93c"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          d="M12 14 Q12 8 20 8 H78 Q86 8 92 15 L98 23 Q102 28 110 28 H204 Q212 28 212 36 V164 Q212 172 204 172 H20 Q12 172 12 164 Z"
        />
      </svg>
      <div
        className={`absolute inset-x-[10%] top-[24%] h-[34%] overflow-hidden rounded-md bg-white/85 transition-transform duration-300 ${
          open ? "-translate-y-[10%]" : "group-hover:-translate-y-[6%]"
        }`}
      >
        <img src={peek} alt="" className="h-full w-full object-contain p-1" />
      </div>
      <svg
        viewBox="0 0 224 176"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`${uid}-front`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff1c2" stopOpacity="0.42" />
            <stop offset="1" stopColor="#ffc93c" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${uid}-front)`}
          stroke="#fff1c2"
          strokeOpacity="0.5"
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
  const openFolder = openIndex === null ? null : folders[openIndex];

  return (
    <div className="animate-fade-in-delay-2 opacity-0">
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
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
              className={`glass-card group flex flex-col items-center gap-2 px-2 py-4 text-center transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                open ? "border-accent/60" : "hover:border-accent/30"
              }`}
            >
              <FolderIcon peek={peek} open={open} />
              <span>
                <span className="block text-sm font-semibold sm:text-base">
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
          <div className="space-y-6 pt-6">{openFolder.props.children}</div>
        )}
      </div>
    </div>
  );
};
