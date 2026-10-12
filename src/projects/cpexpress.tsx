import {
  SimpleCaseStudy,
  type SimpleCaseStudyData,
} from "../components/SimpleCaseStudy";

const data: SimpleCaseStudyData = {
  hero: {
    images: [
      "/assets/images/projects/cpexpress/cpexpress1.png",
      "/assets/images/projects/cpexpress/cpexpress2.png",
      "/assets/images/projects/cpexpress/cpexpress3.png",
    ],
    alt: "Preview images of the CpExpress: CpE Confessions platform",
  },
  about:
    "CpExpress: CpE Confessions is a moderated anonymous confession platform developed and launched during Valentine’s Day 2024. This digital initiative was built to create a safe, expressive space where students could share their thoughts, feelings, and hidden confessions without fear of judgment. It was more than just a seasonal platform; it served as a moment of connection, laughter, and emotional relief during one of the most socially charged times of the year.",
  facts: [
    { label: "Type", value: "Moderated anonymous confession platform" },
    { label: "Launched", value: "Valentine’s Day 2024" },
    { label: "Tools", value: "Figma, Canva, Photoshop" },
  ],
  links: [
    {
      label: "See Live Demo Here!",
      href: "https://express.icpepse-ustp.org/",
    },
  ],
  problem:
    "The challenge was clear: build a space for anonymous confessions that felt safe, moderated, and inviting, ensuring emotional honesty without risking misuse.",
  goal: "A safe, moderated space where students could share their thoughts, feelings, and hidden confessions without fear of judgment.",
  challenge:
    "The real challenge was creating an environment where anonymity could thrive without inviting toxicity. It required striking a delicate balance between freedom of expression and responsible community behavior. Designing a submission and moderation system that was both real-time and protective was technically demanding and emotionally nuanced, especially when dealing with vulnerable or humorous content in a public space.",
  process: {
    empathize: {
      status: "Done",
      text: "Noticed that many students longed for an outlet for unspoken thoughts, especially around Valentine’s Day.",
    },
    define: {
      status: "Done",
      text: "A space for anonymous confessions that feels safe, moderated, and inviting.",
    },
    ideate: {
      status: "Done",
      text: "Weighed several formats and chose a minimalist submission form with a moderation layer.",
    },
    prototype: {
      status: "Done",
      text: "A simple, themed prototype with a user-friendly form and backend moderation.",
    },
    test: {
      status: "Done",
      text: "Launched on Valentine’s Day and iterated in real time. No usability scores are shown.",
    },
  },
  research:
    "I noticed that many students longed for an outlet to express unspoken thoughts, especially around Valentine’s Day. This inspired the idea of an anonymous platform where they could share freely and safely.",
  ideation:
    "I brainstormed various formats and features, ultimately deciding on a minimalist submission system with a moderation layer to maintain trust and community standards.",
  prototype: {
    text: "I developed a simple, themed prototype with a user-friendly form and backend moderation, allowing for quick, safe interaction while keeping the experience visually engaging.",
    link: {
      label: "See Prototype",
      href: "https://www.figma.com/design/dTxd4Ox50vsJvi0Ax91DCG/CpExpress--CpE-Confessions?node-id=76-3&t=P8zko3Wy6yn4J3Br-1",
    },
  },
  testing:
    "Launching the platform on Valentine’s Day revealed key insights about user behavior and moderation flow, allowing us to iterate in real time and enhance the experience.",
  quality: {
    usable:
      "A minimalist submission form and a moderation layer keep posting simple and protected. Launching on Valentine’s Day gave real use to learn from, but no usability scores are shown.",
    equitable:
      "Anonymity lets students share without fear of judgment. No accessibility checks are documented.",
    enjoyable:
      "Framing the platform as a Valentine’s Day campaign gave it a light, approachable tone, and the page describes moments of connection and laughter.",
    useful:
      "It gave students a safe outlet and collected 94 confessions, which the page treats as proof that the need is real.",
  },
  result:
    "The platform collected a total of 94 confessions from our target audience, validating both the concept and the need for a space like this, building user interest ahead of the next initiative, CpExpress: Speak Now.",
  impact:
    "By framing CpE Confessions as a Valentine’s Day campaign, we were able to tap into a moment of heightened emotional engagement and curiosity among students. This approach generated organic traction and positioned the platform as both relevant and approachable. More importantly, it introduced the community to the site in a lighthearted yet compelling way, lowering the barrier for future participation. The early interaction served not only to validate the platform’s usability but also to establish trust and familiarity with its brand. This strategic momentum directly supported the seamless transition into our next and more purpose-driven initiative, CpExpress: Speak Now, where students would be encouraged to engage in more meaningful, reflective dialogue.",
  closingLinks: [
    {
      label: "See the Poster",
      href: "https://www.facebook.com/share/p/16auriyxyx/",
    },
  ],
  nextSteps: [
    "Carry the momentum into the next initiative, CpExpress: Speak Now, with more meaningful, reflective dialogue.",
  ],
};

const CpExpress = () => <SimpleCaseStudy data={data} />;

export default CpExpress;
