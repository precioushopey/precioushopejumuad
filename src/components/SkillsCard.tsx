const groups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "Figma",
      "Wireframing",
      "Accessibility research",
      "Game UI/UX",
      "Brand & visual identity",
    ],
  },
  {
    title: "Design Engineering",
    items: [
      "Design-to-code",
      "Responsive interfaces",
      "Building what I design",
    ],
  },
];

export const SkillsCard = () => (
  <section aria-label="Skills and expertise" className="glass-card p-5">
    <h2 className="text-sm text-cream/70">Skills &amp; expertise</h2>
    <div className="mt-3 space-y-4">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-xs font-medium uppercase tracking-wider text-accent">
            {group.title}
          </h3>
          <ul className="mt-2 flex flex-wrap justify-center gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-cream/10 px-3 py-1 text-xs"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
