import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AiFillInstagram } from "react-icons/ai";
import { SparkleBackground } from "../components/SparkleBackground";
import {
  MdEmail,
  MdFacebook,
  MdInsights,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

type Contributor = {
  name: string;
  image: string;
  alt: string;
  driveLink: string;
  description: string;
  email: { address: string; label: string };
  facebook: { url: string; label: string };
  instagram: { url: string; label: string };
};

const Subay = () => {
  const tags = ["Next.js", "TypeScript", "TailwindCSS"];

  const metrics = [
    { value: "100%", label: "Detection Average Precision" },
    { value: "90.95%", label: "Detection Recall" },
    { value: "95.26%", label: "Detection F1-Score" },
    { value: "72.17%", label: "Re-identification F1-Score" },
    { value: "91.9%", label: "Avg. Tracking Accuracy Overlap" },
    { value: "6.71-pixel", label: "Tracking Manual vs. System" },
    { value: "100%", label: "Functional Testing" },
    { value: "87.5", label: "System Usability Scale (SUS) Score" },
  ];

  const skills = [
    { name: "Research", level: 100 },
    { name: "Front-End Dev", level: 90 },
    { name: "Multimedia Design", level: 70 },
    { name: "Microsoft Office", level: 95 },
    { name: "Visual Studio Code", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Problem Solving", level: 75 },
    { name: "Communication", level: 70 },
  ];

  const contributors: Contributor[] = [
    {
      name: "Xyrus Vincent Dominguez",
      image: "/assets/images/xyrus.jpg",
      alt: "Xyrus Vincent Dominguez",
      driveLink:
        "https://drive.google.com/file/d/1HiVoCt4xpYreHKzKaZIDsiCNrdC3bN2K/view?usp=sharing",
      description:
        "Leader in designing and building the algorithms and models to develop SUBAY.",
      email: {
        address: "mailto:dominguez.xyrusvincent1@gmail.com",
        label: "xyrus@gmail.com",
      },
      facebook: {
        url: "https://www.facebook.com/XVLDM",
        label: "Xyrus Dominguez",
      },
      instagram: {
        url: "https://www.instagram.com/xyeuuuuusss/",
        label: "@xyeuuuuusss",
      },
    },
    {
      name: "Precious Hope T. Jumuad",
      image: "/assets/images/precious.jpg",
      alt: "Precious Hope T. Jumuad",
      driveLink:
        "https://drive.google.com/file/d/1a6xBQ8SLlQIqsPKs1xBa9YGMyfLzFtvu/view?usp=sharing",
      description:
        "Develops the web-based interface for data analytics and wrote the thesis paper.",
      email: {
        address: "mailto:dominguez.xyrusvincent1@gmail.com",
        label: "hope@gmail.com",
      },
      facebook: {
        url: "https://www.facebook.com/XVLDM",
        label: "Precious Jumuad",
      },
      instagram: {
        url: "https://www.instagram.com/xyeuuuuusss/",
        label: "@urprecioushope",
      },
    },
    {
      name: "Rezzelle Tinoy Onahon",
      image: "/assets/images/rezzelle.jpg",
      alt: "Rezzelle Tinoy Onahon",
      driveLink:
        "https://drive.google.com/file/d/1Kq2zzOl5cewyv_FyE16q_vf9rLSb80uq/view?usp=sharing",
      description:
        "Responsible for creating user-centered design for the web-based user interface.",
      email: {
        address: "mailto:dominguez.xyrusvincent1@gmail.com",
        label: "rezzelle@gmail.com",
      },
      facebook: {
        url: "https://www.facebook.com/XVLDM",
        label: "Rezzelle Onahon",
      },
      instagram: {
        url: "https://www.instagram.com/xyeuuuuusss/",
        label: "@_rrreezzelle",
      },
    },
    {
      name: "Venz Joshua Nolasco",
      image: "/assets/images/venz.jpg",
      alt: "Venz Joshua Nolasco",
      driveLink:
        "https://drive.google.com/file/d/1TIdTGCMhYX7KU6r4eYsUuPCqmyopf0TB/view?usp=sharing",
      description:
        "Formatted, structured, and ensured the consistency of the manuscript with LaTeX.",
      email: {
        address: "mailto:dominguez.xyrusvincent1@gmail.com",
        label: "venz@gmail.com",
      },
      facebook: {
        url: "https://www.facebook.com/XVLDM",
        label: "Venz Nolasco",
      },
      instagram: {
        url: "https://www.instagram.com/xyeuuuuusss/",
        label: "@vnzjshnlsc",
      },
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-12 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header>
        <Navbar />
        <div className="flex justify-center font-bold text-glow animate-fade-in">
          <h1 className="font-noto text-3xl sm:text-6xl">SUBAY</h1>
          <h2 className="pinyon-script -ml-2 sm:-ml-4 text-5xl sm:text-8xl">
            Thesis
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-4 text-sm animate-fade-in-delay-1">
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

      <main className="space-y-18">
        <section className="space-y-6">
          <iframe
            src="https://www.youtube.com/embed/SwW-KC5U4Zo?playlist=SwW-KC5U4Zo&loop=1&autoplay=1&controls=1"
            title="SUBAY Promotion"
            allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
            className="w-full aspect-[16/9] object-cover rounded-4xl border z-50"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Project Overview
          </h2>
          <p>
            For our undergraduate thesis, we developed SUBAY: A Multi-Camera
            Detection System for Customer Tracking, designed to monitor customer
            movement and behavior within a retail environment. The system
            combines YOLOv10 for object detection, DeepSORT for tracking, and
            Omni-Scale Network (OSNet) for cross-camera re-identification to
            maintain accurate identity tracking even in crowded or partially
            obstructed scenes. During testing across four camera views, the
            detection component achieved an average precision of 100%, recall of
            90.95%, and an F1-score of 95.26%. For cross-camera
            re-identification, OSNet yielded an F1-score of 72.17%,
            demonstrating its capability to sustain identity consistency across
            different angles and conditions. Tracking performance was validated
            with a 91.9% average bounding box overlap and only a 6.71-pixel
            difference from manual annotations, confirming its precision and
            reliability. Using this system, we were able to accurately count 259
            unique customers and calculate behavioral metrics such as visit
            frequency and dwell time. Notably, Zone B recorded the highest foot
            traffic, with 102 entries logged. Additionally, a System Usability
            Scale (SUS) score of 87.5 indicated a high level of user
            satisfaction. Overall, SUBAY has proven to be a practical and
            effective tool for generating data-driven insights to inform retail
            space planning and marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://drive.google.com/file/d/1AjZTAdm0_rqY1ojUwzVSy6Km6fNDVAbA/view?usp=sharing"
              target="_blank"
              className="white-button"
            >
              Read the Manuscript
            </a>
            <a
              href="https://drive.google.com/drive/folders/14-d1JSdhbfCQ2dHKyOmHeeTtlmk6JJOx?usp=sharing"
              target="_blank"
              className="transparent-button border"
            >
              Project Files
            </a>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Demonstration
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-center gap-6">
            <iframe
              src="https://www.youtube.com/embed/jaL1tzv0Qgo?playlist=jaL1tzv0Qgo&loop=1&autoplay=1&controls=1"
              title="SUBAY Demonstration"
              allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
              className="w-full lg:w-2/3 aspect-[16/9] object-cover rounded-4xl border z-50"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6">
              <p className="text-base lg:text-sm">
                To make the data actionable, I designed and developed a
                web-based analytics dashboard that visualizes customer flow
                through interactive heat maps and charts, offering automated
                insights for store layout and marketing optimization. We
                conducted functional testing in partnership with a local store
                owner in Cagayan de Oro, Philippines, and the system achieved
                100% success across all modules. Additionally, a System
                Usability Scale score of 87.5 indicated a high level of user
                satisfaction.
              </p>
              <button className="flex justify-center">
                <a
                  href="https://thesis-subay-web.vercel.app/"
                  target="_blank"
                  className="white-button"
                >
                  See Live Demo Here!
                </a>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 lg:pt-0">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="backdrop-blur-sm border rounded-4xl p-4 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2">
                    <MdInsights
                      size={20}
                      className="text-[var(--brown-accent)]"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-lg">{metric.value}</h4>
                    <p>{metric.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Contributors
          </h2>
          <div className="flex overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover">
            <img
              src="/assets/images/team.jpg"
              alt="Team"
              className="w-full aspect-[16/9] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="font-medium">
            The Team with adviser Engr. Jodie Rey D. Fernandez
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributors.map((contributor, index) => (
              <a
                key={index}
                href={contributor.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
              >
                <img
                  src={contributor.image}
                  alt={contributor.alt}
                  className="w-full md:w-[200px] aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="flex flex-col items-center justify-center p-4 space-y-2">
                  <h3 className="font-medium">{contributor.name}</h3>
                  <p className="font-light italic text-sm">
                    {contributor.description}
                  </p>
                  <ul className="text-xs space-y-1">
                    <li className="flex gap-x-2">
                      <MdEmail size={16} />
                      <a
                        href={contributor.email.address}
                        target="_blank"
                        className="hover:underline"
                      >
                        {contributor.email.label}
                      </a>
                    </li>
                    <li className="flex gap-x-2">
                      <MdFacebook size={16} />
                      <a
                        href={contributor.facebook.url}
                        target="_blank"
                        className="hover:underline"
                      >
                        {contributor.facebook.label}
                      </a>
                    </li>
                    <li className="flex gap-x-2">
                      <AiFillInstagram size={16} />
                      <a
                        href={contributor.instagram.url}
                        target="_blank"
                        className="hover:underline"
                      >
                        {contributor.instagram.label}
                      </a>
                    </li>
                  </ul>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href="https://github.com/precioushopey/thesis-subay-web"
              target="_blank"
              className="white-button"
            >
              View GitHub Repository
            </a>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            We Won Best Thesis and Best Prototype!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover">
              <img
                src="/assets/images/best_thesis.jpg"
                alt="Team"
                className="w-full aspect-[85/73] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover">
              <img
                src="/assets/images/best_prototype.jpg"
                alt="Team"
                className="w-full aspect-[85/73] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
          <p>
            The system has proven to be a practical and effective tool for
            generating data-driven insights that support retail space planning
            and marketing strategies. Our work on SUBAY earned us the{" "}
            <strong>Best Thesis</strong> and <strong>Best Prototype</strong>{" "}
            awards at <strong>CONVERGE 2025: CpE Research Colloquium</strong>,
            recognizing both the technical merit and real-world relevance of our
            research.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/share/p/12Fq4QZERpa/"
              target="_blank"
              className="white-button"
            >
              See Announcement
            </a>
          </div>
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

        <div className="flex justify-center">
          <Link
            to="/projects"
            className="w-fit flex items-center gap-x-2 white-button"
          >
            <MdOutlineKeyboardArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Subay;
