// The Philippine flag as an inline SVG. Windows browsers have no flag emoji glyphs
// (they show the letters "PH"), so we draw it instead of using 🇵🇭.
const star = (cx: number, cy: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.4;
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");

const RAYS = Array.from({ length: 8 }, (_, i) => (Math.PI / 4) * i);

export const PhFlag = ({ className = "" }: { className?: string }) => (
  <svg
    role="img"
    aria-label="Philippines"
    viewBox="0 0 60 30"
    className={className}
  >
    <rect width="60" height="15" fill="#0038a8" />
    <rect y="15" width="60" height="15" fill="#ce1126" />
    <polygon points="0,0 26,15 0,30" fill="#fff" />
    <g stroke="#fcd116" strokeWidth="0.9" strokeLinecap="round">
      {RAYS.map((a) => (
        <line
          key={a}
          x1={8.5 + 4.6 * Math.cos(a)}
          y1={15 + 4.6 * Math.sin(a)}
          x2={8.5 + 7 * Math.cos(a)}
          y2={15 + 7 * Math.sin(a)}
        />
      ))}
    </g>
    <circle cx="8.5" cy="15" r="3.6" fill="#fcd116" />
    <polygon points={star(2.6, 4.4, 2.6)} fill="#fcd116" />
    <polygon points={star(2.6, 25.6, 2.6)} fill="#fcd116" />
    <polygon points={star(21.4, 15, 2.6)} fill="#fcd116" />
  </svg>
);
