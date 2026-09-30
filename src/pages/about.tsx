import { Link } from "react-router-dom";
import { SkillsSection } from "../components/SkillsSection";
import { LuChevronLeft, LuExternalLink } from "react-icons/lu";

const About = () => {
  type Job = {
    imgSrc: string;
    imgAlt: string;
    title: string;
    company: string;
    employmentType: string;
    date: string;
    location: string;
    responsibilities: string[];
  };

  type Education = {
    imgSrc: string;
    alt: string;
    school: string;
    degree: string;
    location: string;
    dates: string;
    description: string;
  };

  type Certifications = {
    imgSrc: string;
    alt: string;
    certificate: string;
    organization: string;
    issued: string;
    link: string;
  };

  const jobs: Job[] = [
    {
      imgSrc: "/assets/images/ojtconnect_logo.png",
      imgAlt: "OJT Connect",
      title: "Product Designer/Developer",
      company: "OJT Connect",
      employmentType: "Part-time",
      date: "February 2026 - Present",
      location: "San Diego, California, United States • Remote",
      responsibilities: [
        "Lead end-to-end product design and front-end development for OJT Connect’s SaaS products, translating business requirements and product concepts into structured user experiences, scalable interfaces, and development-ready solutions.",
        "Drive the product design process from requirements and UX analysis through user flows, information architecture, wireframes, high-fidelity UI, interactive prototypes, design systems, responsive states, edge cases, and developer handoff.",
        "Build and refine production-oriented interfaces using React, TypeScript, Tailwind CSS, HTML, and CSS, working closely with backend developers and stakeholders to align design decisions with technical requirements.",
        "Developed a rapid product design and prototyping workflow using Figma, Figma Make, VS Code, GitHub, and AI tools such as Claude Code, ChatGPT, and Figma MCP to speed up research, prototyping, implementation, QA, documentation, and iteration.",
        "Establish reusable components, UI patterns, design standards, and documentation to improve consistency and communication between design and development.",
      ],
    },
    {
      imgSrc: "/assets/images/ojtconnect_logo.png",
      imgAlt: "OJT Connect",
      title: "Operations Associate",
      company: "OJT Connect",
      employmentType: "Part-time",
      date: "August 2025 - Present",
      location: "San Diego, California, United States • Remote",
      responsibilities: [
        "Improved OJT Connect’s user experience and product funnel by contributing to UX/UI redesigns, design systems, development-ready landing pages, and multi-role user dashboards with cross-functional teams.",
        "Supported day-to-day operations by managing high-volume email communications and newsletters, coordinating task tracking, documenting meetings, preparing presentations, and supporting internal workflows.",
        "Strengthened OJT Connect’s digital presence through audience and trend research, content planning, graphic design, and social media copywriting.",
        "Supported partner and stakeholder coordination by organizing information, following up on action items, and turning operational needs into clear deliverables for different teams.",
      ],
    },
    {
      imgSrc: "/assets/images/roostercat.png",
      imgAlt: "Roostercat LLC",
      title: "Designer/Artist",
      company: "Roostercat LLC",
      employmentType: "Part-time",
      date: "June 2025 - Present",
      location: "Brookfield, Wisconsin, United States of America • Remote",
      responsibilities: [
        "Designed and developed Roostercat’s web presence from concept to implementation, including the landing page and Squarespace website, translating brand direction and business goals into cohesive, responsive digital experiences.",
        "Designed UI/UX for web, mobile, and game products, turning product requirements and creative concepts into user flows, interfaces, and accessible experiences with implementation and technical feasibility in mind.",
        "Created reusable UI components, design patterns, and visual systems to keep digital products and marketing experiences consistent, and collaborated with developers and cross-functional teams to bridge design and development.",
        "Designed and illustrated 2D game assets and UI elements in pixel and vector styles using Aseprite, Photoshop, Canva, and IbisPaint.",
        "Designed graphic and marketing materials for social media and digital campaigns across Facebook, Instagram, Threads, and X.",
      ],
    },
    {
      imgSrc: "/assets/images/lgu_jasaan_hrmo.png",
      imgAlt: "LGU Jasaan - Human Resource Management Office",
      title: "Frontend Web Developer",
      company: "LGU Jasaan - Human Resource Management Office",
      employmentType: "Contract",
      date: "March 2025 - Present",
      location: "Jasaan, Misamis Oriental, Philippines • Hybrid",
      responsibilities: [
        "Designed and developed the HRMO Payroll Management System Web App using React, Next.js, TypeScript, Tailwind CSS, MongoDB, and Prisma for development and Figma for design, aiming to automate payroll computation using biometric/DTR data and streamline HR processes.",
      ],
    },
    {
      imgSrc: "/assets/images/lgu_jasaan_hrmo.png",
      imgAlt: "LGU Jasaan - Human Resource Management Office",
      title: "On-the-Job Trainee",
      company: "LGU Jasaan - Human Resource Management Office",
      employmentType: "Internship",
      date: "January 2025 - March 2025",
      location: "Jasaan, Misamis Oriental, Philippines • Hybrid",
      responsibilities: [
        "Managed content planning, graphic design, and caption writing for the HRMO Facebook page, contributing to public information efforts and enhancing the office’s online presence.",
        "Assisted with daily office operations, including Microsoft Excel data entry, HR document formatting, and employee record verification to ensure accurate data management for system integration.",
      ],
    },
    {
      imgSrc: "/assets/images/rikersiv.jfif",
      imgAlt: "rikersiv",
      title: "Marketing Intern",
      company: "rikersiv",
      employmentType: "Internship",
      date: "July 2024 - August 2024",
      location: "Doha, Qatar • Remote",
      responsibilities: [
        "Crafted a library of AI prompts for the marketing department, increasing productivity by tailoring prompts to various marketing needs such as content creation, market research, campaign development, and analytics.",
        "Managed social media marketing campaigns, driving organic growth and boosting engagement through strategic content planning and execution across platforms, including Facebook and Instagram.",
        "Conducted comprehensive marketing research, contributing valuable insights that informed content strategies, audience targeting, and competitive analysis within each specific campaign’s industry.",
      ],
    },
  ];

  const educationData: Education[] = [
    {
      imgSrc: "/assets/images/ustp.png",
      alt: "University of Science and Technology of Southern Philippines",
      school: "University of Science and Technology of Southern Philippines",
      degree: "Bachelor of Science in Computer Engineering",
      location: "Cagayan de Oro City, Philippines",
      dates: "August 2021 - July 2025",
      description: `At the University of Science and Technology of Southern Philippines Cagayan de Oro (USTP CDO), I earned my Bachelor of Science in Computer Engineering, graduating with notable achievements in both academic excellence and student leadership. Together with my team, I was honored with the Best Thesis and Best Prototype awards at CONVERGE 2025: CpE Research Colloquium for our capstone project “SUBAY: A Multi-Camera Detection System for Customer Tracking Using YOLOv10, DeepSORT, and OSNet for Re-Identification in Retail Environments”, recognized for its innovation and real-world application in retail analytics. As President of the Institute of Computer Engineers of the Philippines Student Edition – USTP, I led the organization to earn the SILVER Award for Outstanding Student Organization at the USTP Kahamili Awards 2024, a recognition of our collective dedication to excellence and community engagement. These experiences strengthened my skills in leadership, collaboration, and innovation while fueling my passion for technology and design.`,
    },
    {
      imgSrc: "/assets/images/srcb.jfif",
      alt: "St. Rita’s College of Balingasag",
      school: "St. Rita’s College of Balingasag",
      degree:
        "Senior High School - Science, Technology, Engineering, and Mathematics Strand",
      location: "Balingasag, Misamis Oriental, Philippines",
      dates: "June 2019 - May 2021",
      description: `At St. Rita’s College of Balingasag (SRCB), I graduated as the batch valedictorian, earning the Top 1 General Academic Excellence Award, and making history as the school's first top 1 from the STEM strand. My passion for technology and innovation was recognized through the Award of Excellence in Robotics, which I received for leading my team to a Top 2 finish in ROBOTEK 2021: Online Robotics Competition. Additionally, I was honored with a Service Award for my leadership and dedication as the Secretary General of the Marian Student Government, demonstrating my commitment to academic excellence, technological innovation, and student leadership.`,
    },
    {
      imgSrc: "/assets/images/smaj.png",
      alt: "St. Mary's Academy of Jasaan, Inc.",
      school: "St. Mary's Academy of Jasaan, Inc.",
      degree: "Junior High School",
      location: "Jasaan, Misamis Oriental, Philippines",
      dates: "June 2017 - March 2019",
      description: `At St. Mary’s Academy of Jasaan, Inc. (SMAJ), I completed my Junior High School education with honors, graduating as Rank 3 of the batch. My year at SMAJ was marked by both academic excellence and active participation in school and faith-based activities. I was recognized as Catechist of the Year, Artist of the Year, and Best in Christian Living, reflecting my dedication to service, creativity, and values formation. My passion for writing and communication was acknowledged with a 4th Place finish in Sports Writing at the 2018 Division Schools Press Conference (DSPC), while my commitment to helping others learn earned me the 7th Grade Physics Tutor Award. This formative year not only honed my academic skills but also deepened my faith, strengthened my leadership, and nurtured my creative expression.`,
    },
  ];

  const certificationData: Certifications[] = [
    {
      imgSrc: "/assets/images/wadhwani.jfif",
      alt: "Impactful Writing Skills",
      certificate: "Impactful Writing Skills",
      organization: "Wadhwani Foundation",
      issued: "Issued Jan 2025",
      link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=67949e6026d927dcfc4c7d0f",
    },
    {
      imgSrc: "/assets/images/wadhwani.jfif",
      alt: "Problem Solving and Innovation",
      certificate: "Problem Solving and Innovation",
      organization: "Wadhwani Foundation",
      issued: "Issued Jan 2025",
      link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=679b3af0a8a720f14c9f4c42",
    },
    {
      imgSrc: "/assets/images/cisco.jfif",
      alt: "Introduction to Cybersecurity",
      certificate: "Introduction to Cybersecurity",
      organization: "Cisco Systems",
      issued: "Issued May 2024",
      link: "https://www.credly.com/badges/b64d86be-b17e-4da1-bf20-fec0f075aeb8/linked_in_profile",
    },
    {
      imgSrc: "/assets/images/cisco.jfif",
      alt: "CCNA: Enterprise Networking, Security, and Automation",
      certificate: "CCNA: Enterprise Networking, Security, and Automation",
      organization: "Cisco Systems",
      issued: "Issued Apr 2024",
      link: "https://www.credly.com/badges/3495fc90-3694-48fd-9690-9eab3b793ecd/linked_in_profile",
    },
    {
      imgSrc: "/assets/images/cisco.jfif",
      alt: "CCNA: Switching, Routing, and Wireless Essentials",
      certificate: "CCCNA: Switching, Routing, and Wireless Essentials",
      organization: "Cisco Systems",
      issued: "Issued Feb 2024",
      link: "https://www.credly.com/badges/8e389c6a-6003-4b6c-8bee-c126162530bb/linked_in_profile",
    },
    {
      imgSrc: "/assets/images/cisco.jfif",
      alt: "Networking Essentials",
      certificate: "Networking Essentials",
      organization: "Cisco Systems",
      issued: "Issued Feb 2024",
      link: "https://www.credly.com/badges/089ad2e1-0d53-45d8-b48c-f94fedd31ed5/linked_in_profile",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      certificate:
        "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      organization: "Coursera",
      issued: "Issued Jan 2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/WUMMSK8VGYLQ",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Python Data Structures",
      certificate: "Python Data Structures",
      organization: "Coursera",
      issued: "Issued Jan 2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/ZJ23AMHF8LCP",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Python for Everybody Specialization",
      certificate: "Python for Everybody Specialization",
      organization: "Coursera",
      issued: "Issued Jan 2021",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/8EDBN6KTBXXW",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "The Science of Well-Being",
      certificate: "The Science of Well-Being",
      organization: "Coursera",
      issued: "Issued Jan 2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/JMZQ29DQC86Z",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Using Databases with Python",
      certificate: "Using Databases with Python",
      organization: "Coursera",
      issued: "Issued Jan 2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/79Z3ZF3CL6GU",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Using Python to Access Web Data",
      certificate: "Using Python to Access Web Data",
      organization: "Coursera",
      issued: "Issued Jan 2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/DYMQVYUSX2A6",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Introduction to Chemistry: Structures and Solutions",
      certificate: "Introduction to Chemistry: Structures and Solutions",
      organization: "Coursera",
      issued: "Issued Dec 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/DC7PHFUSY2E8",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Programming for Everybody (Getting Started with Python)",
      certificate: "Programming for Everybody (Getting Started with Python)",
      organization: "Coursera",
      issued: "Issued Dec 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/WCB9MNXJLCXE",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Interfacing with the Arduino",
      certificate: "Interfacing with the Arduino",
      organization: "Coursera",
      issued: "Issued Nov 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/KJFE9Q8KJNZR",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Introduction to the Internet of Things and Embedded Systems",
      certificate:
        "Introduction to the Internet of Things and Embedded Systems",
      organization: "Coursera",
      issued: "Issued Nov 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/BLMCLKHSKJJ8",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "How Things Work: An Introduction to Physics",
      certificate: "How Things Work: An Introduction to Physics",
      organization: "Coursera",
      issued: "Issued Nov 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/X7KT25LNFCVX",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "The Arduino Platform and C Programming",
      certificate: "The Arduino Platform and C Programming",
      organization: "Coursera",
      issued: "Issued Nov 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/GU44XRSLM7BR",
    },
    {
      imgSrc: "/assets/images/coursera.png",
      alt: "Introduction to Chemistry: Reactions and Ratios",
      certificate: "Introduction to Chemistry: Reactions and Ratios",
      organization: "Coursera",
      issued: "Issued Oct 2020",
      link: "https://www.coursera.org/account/accomplishments/certificate/X3HZUEBJHE97",
    },
  ];

  return (
    <div className="space-y-6 p-5 text-sm sm:p-8">
      <header className="animate-fade-in">
        <h1 className="text-2xl font-medium sm:text-3xl">About</h1>
      </header>

      <div className="tracking-normal leading-6 text-left space-y-6">
        <section className="flex flex-col items-center gap-6 animate-fade-in-delay-1">
          <figure className="w-full max-w-2xl">
            <img
              src="/assets/images/hero.png"
              alt="Precious Hope Jumuad in her graduation gown"
              className="h-auto w-full"
            />
          </figure>
          <article className="w-full space-y-4 text-justify">
            <p>
              I’m <strong>Precious Hope T. Jumuad</strong>, a Design Engineer
              (Product/UI/UX Designer and Front-End Developer) and Computer
              Engineering graduate from the{" "}
              <a href="https://www.ustp.edu.ph/" target="_blank">
                <u>
                  University of Science and Technology of Southern Philippines,
                  Cagayan de Oro,
                </u>
              </a>{" "}
              who believes that design and technology should make life easier,
              more beautiful, and more meaningful. My work sits at the
              intersection of product thinking, user experience, visual design,
              and front-end development.
            </p>
            <p>
              I design and build web and mobile products, SaaS platforms, design
              systems, and interactive prototypes, taking ideas from the early
              stages of understanding the problem and mapping user flows to
              working interfaces that can be tested and refined. I work
              primarily with Figma, React, TypeScript, Tailwind, and AI-powered
              tools, and I care about the space between design and development:
              reusable components, responsive behavior, accessibility, and
              developer handoff.
            </p>
            <p>
              One of my proudest achievements was co-developing{" "}
              <a href="https://thesis-subay-web.vercel.app/" target="_blank">
                <u>SUBAY,</u>
              </a>{" "}
              our award-winning thesis project that used computer vision to help
              businesses understand their customers better. I’ve also had the
              privilege of leading our student organization to earn the{" "}
              <a
                href="https://www.facebook.com/share/16y7oPyerD/"
                target="_blank"
              >
                <u>Silver Award for Outstanding Student Organization,</u>
              </a>{" "}
              a testament to the power of teamwork and shared vision. Today I’m
              a Product Designer/Developer at OJT Connect, and I’m always
              looking to work with people who value thoughtful design,
              collaboration, and purposeful products.
            </p>
          </article>
        </section>

        <div className="flex font-bold text-glow pt-6 animate-fade-in-delay-2">
          <h2 className="text-2xl sm:text-3xl">
            My <span className="font-display">Experiences</span>
          </h2>
        </div>

        <section className="flex flex-col gap-6 glass-card p-5 animate-fade-in-delay-2">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-6">
                <figure className="w-full md:w-1/8 text-center">
                  <img
                    src={job.imgSrc}
                    alt={job.imgAlt}
                    className="w-full aspect-[1/1] rounded-4xl border object-cover"
                  />
                </figure>
                <ul className="w-full md:w-7/8">
                  <li className="text-base font-semibold">
                    <u>{job.title}</u>
                  </li>
                  <li className="font-semibold">
                    {job.company} • {job.employmentType}
                  </li>
                  <li>{job.date}</li>
                  <li>{job.location}</li>
                </ul>
              </div>
              <ul className="ml-6 list-disc">
                {job.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="flex font-bold text-glow pt-6 animate-fade-in-delay-3">
          <h2 className="text-2xl sm:text-3xl">
            My <span className="font-display">Education</span>
          </h2>
        </div>

        <section className="flex flex-col gap-6 glass-card p-5 animate-fade-in-delay-3">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-6">
                <figure className="w-full md:w-1/8 text-center">
                  <img
                    src={edu.imgSrc}
                    alt={edu.alt}
                    className="w-full aspect-[1/1] rounded-4xl border object-cover"
                  />
                </figure>
                <ul className="w-full md:w-7/8">
                  <li className="text-base font-semibold">
                    <u>{edu.school}</u>
                  </li>
                  <li className="font-semibold">{edu.degree}</li>
                  <li>{edu.location}</li>
                  <li>{edu.dates}</li>
                </ul>
              </div>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>

        <div className="flex font-bold text-glow pt-6 animate-fade-in-delay-4">
          <h2 className="text-2xl sm:text-3xl">
            My <span className="font-display">Certifications</span>
          </h2>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 glass-card p-5 animate-fade-in-delay-3">
          {certificationData.map((cert, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <figure className="w-full md:w-1/8 text-center">
                  <img
                    src={cert.imgSrc}
                    alt={cert.alt}
                    className="hidden sm:block w-full aspect-[1/1] rounded-4xl border object-cover"
                  />
                </figure>
                <ul className="w-full md:w-7/8">
                  <li className="text-base font-semibold">
                    <u>{cert.certificate}</u>
                  </li>
                  <li className="font-semibold">{cert.organization}</li>
                  <li>{cert.issued}</li>
                  <li>
                    <a
                      className="flex items-center gap-2"
                      href={cert.link}
                      target="_blank"
                    >
                      <span>Show Credential</span>
                      <LuExternalLink />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </section>
        <SkillsSection />
      </div>

      <footer className="flex justify-center pt-2">
        <Link
          to="/#"
          target="_top"
          className="w-fit flex items-center gap-x-2 white-button"
        >
          <LuChevronLeft size={20} />
          Back to Home
        </Link>
      </footer>
    </div>
  );
};

export default About;
