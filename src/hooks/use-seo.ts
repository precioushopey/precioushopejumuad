import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applySeo, seoFor } from "../lib/seo";

// Keeps the page title, description, canonical link, social tags and structured data in step with
// the current address. Called once, in the Shell that wraps every page.
export const useSeo = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    applySeo(seoFor(pathname));
  }, [pathname]);
};
