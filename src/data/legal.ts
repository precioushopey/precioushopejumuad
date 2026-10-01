const CONTACT_EMAIL = "jumuad.precious@gmail.com";

// Shown at the top of the privacy policy. Change it whenever the text below changes.
export const PRIVACY_UPDATED = "October 1, 2026";

export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export const privacySections: PolicySection[] = [
  {
    heading: "Who is behind this site",
    paragraphs: [
      `This is the portfolio of Precious Hope Jumuad, based in the Philippines. I decide what this site collects and why. For any question about your data, email ${CONTACT_EMAIL}.`,
    ],
  },
  {
    heading: "What I collect",
    list: [
      "Messages you send. If you use the contact form, I receive your name, email address and message. I use them to reply to you and for nothing else.",
      "Details sent along with each message. To spot spam and abuse, every message also carries the time, your IP address, your approximate city and country, your browser and the page you wrote from.",
      "Visits. Vercel Web Analytics counts page views and shows me the page, where you came from, your country, and your device and browser type. It does not use cookies and does not follow you to other sites.",
      "Server logs. Vercel, which hosts this site, keeps standard logs (such as IP addresses) for security and to keep the site running.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "This site does not set cookies and does not store anything on your device. The one exception is outside my control: the SUBAY project page embeds YouTube videos, loaded from YouTube's privacy-enhanced domain (youtube-nocookie.com), and YouTube may still set its own cookies when a video plays.",
    ],
  },
  {
    heading: "Services that handle data",
    list: [
      "Vercel hosts the site and provides the analytics.",
      "Resend delivers contact messages, and Gmail receives them in my inbox.",
      "Google Fonts: your browser downloads the site's fonts from Google, so Google can see your IP address.",
      "YouTube: the SUBAY project page embeds two videos, which load from YouTube.",
    ],
  },
  {
    heading: "How long I keep it",
    paragraphs: [
      "Messages stay in my inbox until I delete them. I do not keep them in a separate database. Analytics data is kept by Vercel under its own policy.",
    ],
  },
  {
    heading: "Sharing",
    paragraphs: [
      "I do not sell your data or use it for advertising. I share it only with the services above, as needed to run this site, or if the law requires it.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      `Under the Data Privacy Act of 2012 (Republic Act No. 10173), you can ask to see, correct or delete the personal data I hold about you. Email ${CONTACT_EMAIL} and I will respond.`,
    ],
  },
  {
    heading: "Other sites",
    paragraphs: [
      "This site links to other websites. Their own policies apply once you leave.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "If this policy changes, the date at the top changes with it.",
    ],
  },
];
