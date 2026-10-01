import { LuFacebook, LuGlobe, LuInstagram } from "react-icons/lu";
import type { SiteKind } from "../data/about";

// The link icon in an accordion card's title bar: a website, Facebook or Instagram page.
export const siteLink = (
  name: string,
  site?: { href: string; kind: SiteKind },
) => {
  if (!site) return undefined;
  const { href, kind } = site;
  const label = {
    web: `Open the ${name} website`,
    facebook: `Open ${name} on Facebook`,
    instagram: `Open ${name} on Instagram`,
  }[kind];
  const Icon = { web: LuGlobe, facebook: LuFacebook, instagram: LuInstagram }[
    kind
  ];
  return { href, label, icon: <Icon size={14} /> };
};
