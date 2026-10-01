import { useMemo } from "react";
import { educationData, jobs } from "../data/about";
import { groupJobsByCompany, jobCard, schoolCard } from "../lib/about";

// The accordion folders on the About page (Experiences and Education), each with its cards and
// their table rows and durations worked out as of today.
export const useAboutData = () => {
  const now = useMemo(() => new Date(), []);
  return useMemo(
    () => [
      {
        label: "Experiences",
        peek: "/assets/images/experience/ojtconnect_logo.png",
        cards: groupJobsByCompany(jobs, now).map(jobCard),
      },
      {
        label: "Education",
        peek: "/assets/images/education/ustp.png",
        cards: educationData.map((edu) => schoolCard(edu, now)),
      },
    ],
    [now],
  );
};
