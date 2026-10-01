import { ContactCard } from "../ContactCard";
import { ProfileCard } from "../ProfileCard";

export const RightColumn = () => (
  <div className="flex flex-col gap-3">
    <ProfileCard />
    <ContactCard />
  </div>
);
