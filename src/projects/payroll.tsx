import Carousel from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { FiHeart, FiTarget } from "react-icons/fi";
import {
  MdLightbulbOutline,
  MdOutlineBuild,
  MdOutlineChecklist,
  MdOutlineWbSunny,
} from "react-icons/md";

const Payroll = () => {
  const tags = ["Next.js", "TypeScript", "TailwindCSS", "Figma", "Canva"];
  const images1 = [
    "/assets/images/payroll1.png",
    "/assets/images/payroll2.png",
  ];
  const images2 = [
    "/assets/images/payroll3.jpg",
    "/assets/images/payroll4.jfif",
    "/assets/images/payroll5.jpg",
    "/assets/images/payroll6.png",
    "/assets/images/payroll7.jpg",
  ];

  const designSteps = [
    {
      icon: <FiHeart size={20} />,
      title: "Empathize",
      description:
        "It started with listening and understanding the frustrations of HR staff bogged down by repetitive tasks and error-prone manual entries.",
    },
    {
      icon: <FiTarget size={20} />,
      title: "Define",
      description:
        "Their pain was clear: scattered data, inconsistent records, and a lack of centralized tools to manage payroll and attendance efficiently.",
    },
    {
      icon: <MdLightbulbOutline size={20} />,
      title: "Ideate",
      description:
        "I explored solutions that would reduce friction—automated syncing, real-time payroll previews, and a clean dashboard.",
    },
    {
      icon: <MdOutlineBuild size={20} />,
      title: "Prototype",
      description:
        "Wireframes turned into interactive mockups, guided by HR’s feedback.",
    },
    {
      icon: <MdOutlineChecklist size={20} />,
      title: "Test",
      description:
        "Through live trials and continuous iterations, the system evolved into a responsive, reliable, and user-centric tool built specifically for their needs.",
    },
    {
      icon: <MdOutlineWbSunny size={20} />,
      title: "Result",
      description:
        "The result was a fully deployed, dependable payroll system that seamlessly met HR’s real-world needs with accuracy, usability, and trust.",
    },
  ];

  const skills = [
    { name: "Design Thinking", level: 100 },
    { name: "Front-End Dev", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Social Media Mgmt.", level: 75 },
    { name: "Visual Studio Code", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Problem Solving", level: 70 },
    { name: "Initiative", level: 70 },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header>
        <Navbar />
        <div className="flex justify-center font-bold text-glow animate-fade-in">
          <h1 className="font-noto text-3xl sm:text-6xl">Payroll</h1>
          <h2 className="pinyon-script text-5xl sm:text-8xl">System</h2>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-4 text-sm pt-4 animate-fade-in-delay-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border font-light px-4 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="space-y-18 pt-6">
        <section className="space-y-6">
          <Carousel images={images1} />
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Project Overview
          </h2>
          <p className="-mt-2">
            In the heart of LGU Jasaan’s Human Resource operations, manual
            payroll processes once consumed hours of tedious work—cross-checking
            biometric logs, calculating deductions, and generating payslips by
            hand. To ease this burden, I, together with my partner, developed an
            automated Payroll Management System tailored to their workflow.
            Designed with seamless biometric integration, the system simplifies
            complex payroll tasks into an intuitive digital experience,
            empowering HR staff to focus more on people, not paperwork. It's
            more than automation, it's a tool that restores time and ensures
            accuracy where it matters most.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://hrmo-payroll-web.vercel.app/"
              target="_blank"
              className="flex white-button"
            >
              See Live Demo Here!
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Design Thinking Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designSteps.map((step, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs space-y-4 p-6 card-hover"
              >
                <div className="flex items-center justify-center border-b pb-2 gap-x-3">
                  {step.icon}
                  <h3 className="font-medium text-lg">{step.title}</h3>
                </div>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <button className="mx-auto flex justify-center pt-2">
            <a
              href="https://www.figma.com/design/RpTMeFJSwf0d7t3cxB1ori/HR-Payroll-Management?node-id=0-1&t=8FlCrtuJ47o0YDTA-1"
              target="_blank"
              className="flex white-button"
            >
              See Prototype
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Challenge
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-2/3">
              <Carousel images={images2} />
            </div>
            <p className="w-full lg:w-1/3">
              The biggest hurdle wasn’t just building a payroll system rather,
              it was designing one that <em>understood</em> the nuances of local
              government operations. Integrating biometric data posed technical
              constraints, but the real challenge was building trust: HR teams
              needed assurance that every peso, every record, and every leave
              count was accurate to the last detail. This meant rigorous
              testing, thoughtful UI design, and a flexible backend that could
              handle edge cases from unexpected absences to multiple pay grades
              without fail.
            </p>
          </div>
          <button>
            <a
              href="https://hrmo-payroll-web.vercel.app/"
              target="_blank"
              className="white-button"
            >
              Read User Manual
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Impact
          </h2>
          <p>
            Since its launch, the Payroll Management System has transformed how
            Jasaan’s HRMO operates. What once took days is now managed in
            minutes. Biometric logs flow seamlessly into payroll calculations.
            Payslips are generated automatically, with fewer errors and greater
            transparency. Most importantly, it has lightened the emotional and
            mental load on HR staff giving them confidence in their tools,
            clarity in their processes, and time to focus on what truly matters:
            serving people. It’s a quiet revolution, one pay cycle at a time.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://github.com/HR-Payroll/hrmo-payroll-web"
              target="_blank"
              className="flex white-button"
            >
              View GitHub Repository
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Skills Earned
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center rounded-4xl backdrop-blur-sm border shadow-xs card-hover gap-2 p-4"
              >
                <div className="flex items-center gap-x-4">
                  <div className="text-left">
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                  </div>
                </div>
                <div className="w-full bg-white/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-white h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right -mt-1">
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payroll;
