import { JSX } from "react";
import {
  MdOutlineVideogameAsset,
  MdOutlinePeople,
  MdOutlineLaptopMac,
} from "react-icons/md";

interface RoleCard {
  title: string;
  description: string;
  icon: JSX.Element;
}

const roles: RoleCard[] = [
  {
    title: "Game Designer/Artist",
    description:
      "I handled all-around creative tasks such as mobile app UI/UX design, illustration, and animation, contributing to the overall player experience and usability of the game interface.",
    icon: (
      <MdOutlineVideogameAsset
        size={20}
        className="text-[var(--brown-accent)]"
      />
    ),
  },
  {
    title: "Marketing Intern",
    description:
      "I managed social media marketing campaigns and conducted marketing research, driving organic growth and boosting engagement through strategic content planning and execution across platforms using Meta Business.",
    icon: <MdOutlinePeople size={20} className="text-[var(--brown-accent)]" />,
  },
  {
    title: "On-the-Job Trainee",
    description:
      "I designed and developed the HRMO Payroll Management System Web App using React, Next.js, TypeScript, Tailwind CSS, MongoDB, and Prisma, aiming to automate payroll computation using biometric data and simplify HR processes.",
    icon: (
      <MdOutlineLaptopMac size={20} className="text-[var(--brown-accent)]" />
    ),
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="pt-16 px-8">
      <div className="container mx-auto max-w-5xl space-y-4">
        <h2 className="relative -ml-12 sm:-ml-16 font-noto text-3xl sm:text-4xl font-bold text-center text-glow">
          About
          <span className="absolute top-1 -ml-4 pinyon-script text-5xl sm:text-6xl">
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
          <div className="space-y-2">
            <div className="place-items-center">
              <img
                src="/assets/images/about.png"
                alt="Precious Hope T. Jumuad"
                width={200}
                className="opacity-0 animate-fade-in"
              />
            </div>

            <h3 className="font-semibold text-2xl">
              Computer Engineer & UI/UX Designer
            </h3>

            <p>
              As a Computer Engineering graduate, I specialize in front-end
              development, UI/UX design, and multimedia content creation. I am
              passionate about building thoughtful, user-centered solutions,
              ranging from automated systems to game interfaces, using modern
              tools like Next.js, React, Figma, and Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a href="#contact" target="_blank" className="white-button">
                Hire Me!
              </a>
              <a
                href="https://drive.google.com/file/d/1Ht0vyHKKtTYDkNvNKNMpTn9Ppy886jza/view?usp=sharing"
                target="_blank"
                className="transparent-button border"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="backdrop-blur-sm border rounded-4xl p-4 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2">{role.icon}</div>
                  <div className="text-left">
                    <h4 className="font-medium text-lg">{role.title}</h4>
                    <p>{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
