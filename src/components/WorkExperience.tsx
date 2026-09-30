// Work experience, most recent first. Logos sit on a tile: white for dark/coloured marks,
// black for the Roostercat cat, which is white.
const highlights = [
  {
    title: "Product Designer/Developer",
    detail: "OJT Connect · Feb 2026 to present",
    logo: "/assets/images/ojtconnect_logo.png",
    tile: "bg-white p-1.5",
  },
  {
    title: "Designer/Artist",
    detail: "Roostercat LLC · Jun 2025 to present",
    logo: "/assets/images/roostercat.png",
    tile: "bg-black p-1.5",
  },
  {
    title: "Frontend Web Developer",
    detail: "LGU Jasaan · Mar 2025 to present",
    logo: "/assets/images/lgu_jasaan_hrmo.png",
    tile: "bg-white",
  },
];

export const WorkExperience = () => (
  <section
    aria-label="Work experience"
    className="glass-card flex flex-1 flex-col p-4"
  >
    <h2 className="px-1 text-left text-sm text-cream/70">Work Experience</h2>
    <ul className="mt-2 flex flex-1 flex-col gap-2">
      {highlights.map(({ title, detail, logo, tile }) => (
        <li
          key={title}
          className="flex flex-1 items-center gap-3 rounded-2xl bg-black/20 p-2.5 text-left"
        >
          <span
            className={`h-11 w-11 shrink-0 overflow-hidden rounded-xl ${tile}`}
          >
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium leading-snug">
              {title}
            </span>
            <span className="block text-xs leading-snug text-cream/70">
              {detail}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);
