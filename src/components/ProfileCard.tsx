import { Link } from "react-router-dom";

export const ProfileCard = () => (
  <section aria-label="Profile" className="glass-card relative p-6 text-center">
    <span className="absolute left-5 top-5 rounded-full border border-line px-3 py-0.5 text-xs">
      Profile
    </span>
    <img
      src="/assets/images/precious.png"
      alt="Precious Hope T. Jumuad"
      className="mx-auto mt-4 h-36 w-36 rounded-full border-2 border-line bg-white object-cover"
    />
    <h2 className="mt-4 text-2xl font-medium">Precious Hope Jumuad</h2>
    <p className="text-sm text-accent">
      <span className="whitespace-nowrap">Design Engineer ·</span>{" "}
      <span className="whitespace-nowrap">Product Designer</span>
    </p>
    <p className="mt-3 text-sm leading-6 text-cream/80">
      I’m passionate about designing and building great products that make
      people’s lives easier. I’ve spent over two and a half years creating
      digital experiences, from payroll systems for local government to game UI.
      A Computer Engineering graduate who also draws pixel art, I’m excited to
      build something great with you!
    </p>
    <Link to="/about" className="white-button mt-4">
      About me
    </Link>
  </section>
);
