import { LatestList } from "../LatestList";
import { ProfileCard } from "../ProfileCard";

export const RightColumn = () => (
  <div className="flex flex-col gap-4">
    <ProfileCard />
    <LatestList />
  </div>
);
