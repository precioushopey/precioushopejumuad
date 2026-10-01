export type SiteKind = "web" | "facebook" | "instagram";

export type Job = {
  imgSrc: string;
  imgAlt: string;
  /** Extra classes for the logo, e.g. a white tile with padding. */
  imgClass?: string;
  /** Where the card's link icon goes; set on the first role of each company. */
  site?: { href: string; kind: SiteKind };
  title: string;
  company: string;
  employmentType: string;
  date: string;
  location: string;
  responsibilities: string[];
};

export type Education = {
  imgSrc: string;
  alt: string;
  school: string;
  site: { href: string; kind: SiteKind };
  degree: string;
  location: string;
  dates: string;
  description: string;
};

type Certification = {
  imgSrc: string;
  alt: string;
  certificate: string;
  organization: string;
  issued: string;
  link: string;
};

export const jobs: Job[] = [
  {
    imgSrc: "/icon-192.png",
    imgAlt: "Precious Hope Jumuad’s monogram",
    title: "Product Designer, Design Engineering",
    company: "Freelance",
    employmentType: "Freelance",
    date: "August 2026 - Present",
    location: "Worldwide • Remote",
    responsibilities: [
      "Delivered four client projects from brief to deployment, as measured by four products now live and publicly accessible, by designing in Figma Make and building with Claude Code.",
      "Designed and built a single-page conversion funnel for a client's website, as measured by a live quiz that leads visitors to a personalized plan reveal, by prototyping the flow in Figma Make and implementing it with Claude Code.",
      "Built a 21-day wellness tracking web application for a client, as measured by a live product with workout tracking, progress photos, body measurements and a coaching feature, by designing the screens in Figma Make and building them with Claude Code.",
      "Created brand and design systems for client websites, as measured by a delivered wordmark logo, color palettes, typography pairings and a consistent Lucide Icons library applied across every page, by defining the rules in Figma Make and carrying them into code.",
      "Localized customer-facing pages for client websites, as measured by every page offered in the market's primary language with a secondary language toggle, by designing mobile-first layouts in Figma Make and building them with Claude Code.",
    ],
  },
  {
    imgSrc: "/assets/images/experience/ojtconnect_logo.png",
    imgAlt: "OJT Connect",
    imgClass: "bg-white p-2",
    site: { href: "https://ojtconnect.com/", kind: "web" },
    title: "Product Designer/Developer",
    company: "OJT Connect",
    employmentType: "Part-time",
    date: "February 2026 - Present",
    location: "San Diego, California, United States • Remote",
    responsibilities: [
      "Led end-to-end product design for OJT Connect’s Software as a Service platform, as measured by four role-based dashboards (On-the-Job Trainee, Host Training Establishment, Higher Education Institution, and Government Regulator) and a public website of 45 marketing pages, by running the full process of requirements and user experience analysis, user flows, information architecture, wireframes, high-fidelity user interface designs, interactive prototypes, responsive states, edge cases, and developer handoff.",
      "Took care of semantics, performance, accessibility, best practices, and Search Engine Optimization, as measured by screens across the four dashboards and the public website that follow these standards, by checking and fixing them throughout development as a design engineer working with Artificial Intelligence.",
      "Built and refined production-oriented interfaces, as measured by screens across the four dashboards and the public website that work on desktop and mobile and in light, dark, and high-contrast modes, by coding in React, TypeScript, Tailwind CSS, HyperText Markup Language, and Cascading Style Sheets and working closely with backend developers and stakeholders.",
      "Sped up research, prototyping, implementation, quality assurance, documentation, and iteration, as measured by a repeatable design-to-code workflow that I developed, by combining Figma, Figma Make, Visual Studio Code, GitHub, and Artificial Intelligence tools such as Claude Code, ChatGPT, and the Figma Model Context Protocol server.",
      "Improved consistency and communication between design and development, as measured by a consistent look and feel across the dashboards and the public website, including dark and high-contrast modes, by establishing reusable components, user interface patterns, and design standards and documenting them for the team.",
    ],
  },
  {
    imgSrc: "/assets/images/experience/ojtconnect_logo.png",
    imgAlt: "OJT Connect",
    imgClass: "bg-white p-2",
    title: "Operations Associate",
    company: "OJT Connect",
    employmentType: "Part-time",
    date: "August 2025 - February 2026",
    location: "San Diego, California, United States • Remote",
    responsibilities: [
      "Improved OJT Connect’s user experience and product funnel, as measured by the user experience and user interface redesigns, design systems, development-ready landing pages, and multi-role user dashboards delivered, by collaborating with cross-functional teams.",
      "Kept day-to-day operations running smoothly, as measured by high-volume email communications and newsletters handled, tasks tracked, meetings documented, and presentations prepared, by managing them and supporting internal workflows.",
      "Strengthened OJT Connect’s digital presence, as measured by the content plans, graphics, and social media copy produced, by researching audience and trends.",
      "Moved partner and stakeholder work forward, as measured by action items followed up and operational needs turned into clear deliverables for different teams, by organizing information and coordinating with each team.",
    ],
  },
  {
    imgSrc: "/assets/images/experience/roostercat.png",
    imgAlt: "Roostercat LLC",
    site: { href: "https://roostercat.games/", kind: "web" },
    title: "Designer/Artist",
    company: "Roostercat LLC",
    employmentType: "Part-time",
    date: "June 2025 - Present",
    location: "Brookfield, Wisconsin, United States of America • Remote",
    responsibilities: [
      "Designed and built Roostercat’s web presence from concept to implementation, as measured by a responsive landing page and Squarespace website delivered, by translating brand direction and business goals into cohesive digital experiences.",
      "Designed user interface and user experience for web, mobile, and game products, as measured by the user flows, interfaces, and accessible experiences delivered that are feasible to build, by turning product requirements and creative concepts into designs with technical feasibility in mind.",
      "Kept digital products and marketing experiences consistent, as measured by the reusable user interface components, design patterns, and visual systems created, by collaborating with developers and cross-functional teams to bridge design and development.",
      "Produced two-dimensional game art, as measured by the game assets and user interface elements delivered in pixel and vector styles, by illustrating them in Aseprite, Photoshop, Canva, and IbisPaint.",
      "Supported Roostercat’s social media and digital campaigns, as measured by the graphic and marketing materials delivered for Facebook, Instagram, Threads, and X, by designing the materials for each channel.",
    ],
  },
  {
    imgSrc: "/assets/images/experience/lgu_jasaan_hrmo.png",
    imgAlt: "LGU Jasaan - Human Resource Management Office",
    site: {
      href: "https://www.facebook.com/profile.php?id=61572533124170",
      kind: "facebook",
    },
    title: "Frontend Web Developer",
    company: "LGU Jasaan - Human Resource Management Office",
    employmentType: "Contract",
    date: "March 2025 - Present",
    location: "Jasaan, Misamis Oriental, Philippines • Hybrid",
    responsibilities: [
      "Automated payroll computation for the Human Resource Management Office, as measured by payroll work that once took days now completed in minutes, with payslips generated automatically and fewer errors, by designing and building its Payroll Management System web app with React, Next.js, TypeScript, Tailwind CSS, MongoDB, and Prisma, using biometric and daily time record data.",
      "Streamlined Human Resources processes for the office, as measured by a complete design in Figma carried through to the finished web app, by handling both the design and the front-end development myself.",
    ],
  },
  {
    imgSrc: "/assets/images/experience/lgu_jasaan_hrmo.png",
    imgAlt: "LGU Jasaan - Human Resource Management Office",
    title: "On-the-Job Trainee",
    company: "LGU Jasaan - Human Resource Management Office",
    employmentType: "Internship",
    date: "January 2025 - March 2025",
    location: "Jasaan, Misamis Oriental, Philippines • Hybrid",
    responsibilities: [
      "Strengthened the Human Resource Management Office’s online presence and public information efforts, as measured by the Facebook page content planned, designed, and captioned, by managing content planning, graphic design, and caption writing for its Facebook page.",
      "Prepared employee data for system integration, as measured by accurate records after Microsoft Excel data entry, Human Resources document formatting, and employee record verification, by assisting with the office’s daily operations.",
    ],
  },
];

export const educationData: Education[] = [
  {
    imgSrc: "/assets/images/education/ustp.png",
    alt: "University of Science and Technology of Southern Philippines",
    school: "University of Science and Technology of Southern Philippines",
    site: { href: "https://www.ustp.edu.ph/", kind: "web" },
    degree: "Bachelor of Science in Computer Engineering",
    location: "Cagayan de Oro City, Philippines",
    dates: "August 2021 - July 2025",
    description: `At the University of Science and Technology of Southern Philippines Cagayan de Oro (USTP CDO), I earned my Bachelor of Science in Computer Engineering, graduating with notable achievements in both academic excellence and student leadership. Together with my team, I was honored with the Best Thesis and Best Prototype awards at CONVERGE 2025: CpE Research Colloquium for our capstone project “SUBAY: A Multi-Camera Detection System for Customer Tracking Using YOLOv10, DeepSORT, and OSNet for Re-Identification in Retail Environments”, recognized for its innovation and real-world application in retail analytics. As President of the Institute of Computer Engineers of the Philippines Student Edition – USTP, I led the organization to earn the SILVER Award for Outstanding Student Organization at the USTP Kahamili Awards 2024, a recognition of our collective dedication to excellence and community engagement. These experiences strengthened my skills in leadership, collaboration, and innovation while fueling my passion for technology and design.`,
  },
  {
    imgSrc: "/assets/images/education/srcb.jfif",
    alt: "St. Rita’s College of Balingasag",
    school: "St. Rita’s College of Balingasag",
    site: { href: "https://www.srcb.edu.ph/", kind: "web" },
    degree:
      "Senior High School - Science, Technology, Engineering, and Mathematics Strand",
    location: "Balingasag, Misamis Oriental, Philippines",
    dates: "June 2019 - May 2021",
    description: `At St. Rita’s College of Balingasag (SRCB), I graduated as the batch valedictorian, earning the Top 1 General Academic Excellence Award, and making history as the school's first top 1 from the STEM strand. My passion for technology and innovation was recognized through the Award of Excellence in Robotics, which I received for leading my team to a Top 2 finish in ROBOTEK 2021: Online Robotics Competition. Additionally, I was honored with a Service Award for my leadership and dedication as the Secretary General of the Marian Student Government, demonstrating my commitment to academic excellence, technological innovation, and student leadership.`,
  },
  {
    imgSrc: "/assets/images/education/smaj.png",
    alt: "St. Mary's Academy of Jasaan, Inc.",
    school: "St. Mary's Academy of Jasaan, Inc.",
    site: { href: "https://www.facebook.com/smajasaan/", kind: "facebook" },
    degree: "Junior High School",
    location: "Jasaan, Misamis Oriental, Philippines",
    dates: "June 2018 - March 2019",
    description: `At St. Mary’s Academy of Jasaan, Inc. (SMAJ), I completed my Junior High School education with honors, graduating as Rank 3 of the batch. My year at SMAJ was marked by both academic excellence and active participation in school and faith-based activities. I was recognized as Catechist of the Year, Artist of the Year, and Best in Christian Living, reflecting my dedication to service, creativity, and values formation. My passion for writing and communication was acknowledged with a 4th Place finish in Sports Writing at the 2018 Division Schools Press Conference (DSPC), while my commitment to helping others learn earned me the 7th Grade Physics Tutor Award. This formative year not only honed my academic skills but also deepened my faith, strengthened my leadership, and nurtured my creative expression.`,
  },
];

const certificationData: Certification[] = [
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Foundations of User Experience (UX) Design",
    certificate: "Foundations of User Experience (UX) Design",
    organization: "Google",
    issued: "Issued May 2026",
    link: "https://www.coursera.org/account/accomplishments/verify/ZNR0FC0ZO1W2",
  },
  {
    imgSrc: "/assets/images/certifications/csc.png",
    alt: "Career Service Examination - Pen and Paper Test Professional Level",
    certificate:
      "Career Service Examination - Pen and Paper Test Professional Level",
    organization: "Civil Service Commission",
    issued: "Issued Oct 2025",
    link: "https://drive.google.com/file/d/1oi6Jd25WEKXa75Uw8pYFApkID7VLhnYY/view",
  },
  {
    imgSrc: "/assets/images/certifications/wadhwani.jfif",
    alt: "Impactful Writing Skills",
    certificate: "Impactful Writing Skills",
    organization: "Wadhwani Foundation",
    issued: "Issued Jan 2025",
    link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=67949e6026d927dcfc4c7d0f",
  },
  {
    imgSrc: "/assets/images/certifications/wadhwani.jfif",
    alt: "Problem Solving and Innovation",
    certificate: "Problem Solving and Innovation",
    organization: "Wadhwani Foundation",
    issued: "Issued Jan 2025",
    link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=679b3af0a8a720f14c9f4c42",
  },
  {
    imgSrc: "/assets/images/certifications/cisco.jfif",
    alt: "Introduction to Cybersecurity",
    certificate: "Introduction to Cybersecurity",
    organization: "Cisco Systems",
    issued: "Issued May 2024",
    link: "https://www.credly.com/badges/b64d86be-b17e-4da1-bf20-fec0f075aeb8/linked_in_profile",
  },
  {
    imgSrc: "/assets/images/certifications/cisco.jfif",
    alt: "CCNA: Enterprise Networking, Security, and Automation",
    certificate: "CCNA: Enterprise Networking, Security, and Automation",
    organization: "Cisco Systems",
    issued: "Issued Apr 2024",
    link: "https://www.credly.com/badges/3495fc90-3694-48fd-9690-9eab3b793ecd/linked_in_profile",
  },
  {
    imgSrc: "/assets/images/certifications/cisco.jfif",
    alt: "CCNA: Switching, Routing, and Wireless Essentials",
    certificate: "CCNA: Switching, Routing, and Wireless Essentials",
    organization: "Cisco Systems",
    issued: "Issued Feb 2024",
    link: "https://www.credly.com/badges/8e389c6a-6003-4b6c-8bee-c126162530bb/linked_in_profile",
  },
  {
    imgSrc: "/assets/images/certifications/cisco.jfif",
    alt: "Networking Essentials",
    certificate: "Networking Essentials",
    organization: "Cisco Systems",
    issued: "Issued Feb 2024",
    link: "https://www.credly.com/badges/089ad2e1-0d53-45d8-b48c-f94fedd31ed5/linked_in_profile",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    certificate:
      "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    organization: "Coursera",
    issued: "Issued Jan 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/WUMMSK8VGYLQ",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Python Data Structures",
    certificate: "Python Data Structures",
    organization: "Coursera",
    issued: "Issued Jan 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/ZJ23AMHF8LCP",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Python for Everybody Specialization",
    certificate: "Python for Everybody Specialization",
    organization: "Coursera",
    issued: "Issued Jan 2021",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/8EDBN6KTBXXW",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "The Science of Well-Being",
    certificate: "The Science of Well-Being",
    organization: "Coursera",
    issued: "Issued Jan 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/JMZQ29DQC86Z",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Using Databases with Python",
    certificate: "Using Databases with Python",
    organization: "Coursera",
    issued: "Issued Jan 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/79Z3ZF3CL6GU",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Using Python to Access Web Data",
    certificate: "Using Python to Access Web Data",
    organization: "Coursera",
    issued: "Issued Jan 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/DYMQVYUSX2A6",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Introduction to Chemistry: Structures and Solutions",
    certificate: "Introduction to Chemistry: Structures and Solutions",
    organization: "Coursera",
    issued: "Issued Dec 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/DC7PHFUSY2E8",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Programming for Everybody (Getting Started with Python)",
    certificate: "Programming for Everybody (Getting Started with Python)",
    organization: "Coursera",
    issued: "Issued Dec 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/WCB9MNXJLCXE",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Interfacing with the Arduino",
    certificate: "Interfacing with the Arduino",
    organization: "Coursera",
    issued: "Issued Nov 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/KJFE9Q8KJNZR",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Introduction to the Internet of Things and Embedded Systems",
    certificate: "Introduction to the Internet of Things and Embedded Systems",
    organization: "Coursera",
    issued: "Issued Nov 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/BLMCLKHSKJJ8",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "How Things Work: An Introduction to Physics",
    certificate: "How Things Work: An Introduction to Physics",
    organization: "Coursera",
    issued: "Issued Nov 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/X7KT25LNFCVX",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "The Arduino Platform and C Programming",
    certificate: "The Arduino Platform and C Programming",
    organization: "Coursera",
    issued: "Issued Nov 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/GU44XRSLM7BR",
  },
  {
    imgSrc: "/assets/images/certifications/coursera.png",
    alt: "Introduction to Chemistry: Reactions and Ratios",
    certificate: "Introduction to Chemistry: Reactions and Ratios",
    organization: "Coursera",
    issued: "Issued Oct 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/X3HZUEBJHE97",
  },
];

// The certification rows as the page shows them: "Issued Jan 2025" becomes "Jan 2025".
export const certifications = certificationData.map((cert) => ({
  ...cert,
  issuedOn: cert.issued.replace("Issued ", ""),
}));
