import type { IconType } from "react-icons";
import {
  LuFacebook,
  LuFileText,
  LuInstagram,
  LuLinkedin,
  LuMail,
} from "react-icons/lu";

export type ContactItem = {
  label: string;
  href: string;
  display: string;
  Icon: IconType;
  isEmail?: boolean;
};

// Shared by the About page's contact section and the profile card's icon row.
export const contactItems: ContactItem[] = [
  {
    label: "Email",
    href: "mailto:jumuad.precious@gmail.com",
    display: "jumuad.precious@gmail.com",
    Icon: LuMail,
    isEmail: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/precioushopejumuad/",
    display: "in/precioushopejumuad",
    Icon: LuLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/precioushope.jumuad",
    display: "precioushope.jumuad",
    Icon: LuFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourprecioushope/",
    display: "yourprecioushope",
    Icon: LuInstagram,
  },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1zl6_bG0WykXz8j1jHngdFQK-kYEAgqRSFzTJx6s1EPo/edit?usp=sharing",
    display: "View my resume",
    Icon: LuFileText,
  },
];
