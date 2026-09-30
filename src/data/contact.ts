import type { IconType } from "react-icons";
import { LuFacebook, LuInstagram, LuLinkedin, LuMail } from "react-icons/lu";

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
    display: "jumuad.precious@gmail",
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
];
