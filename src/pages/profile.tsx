import { Navigate } from "react-router-dom";
import { RightColumn } from "../components/shell/RightColumn";
import { DESKTOP_QUERY } from "../data/breakpoints";
import { useMediaQuery } from "../hooks/use-media-query";

// The profile and contact cards as a page, for screens below lg where there is no room for the
// right-hand column. On desktop the column is always visible, so this page sends you home.
const ProfilePage = () => {
  const desktop = useMediaQuery(DESKTOP_QUERY);

  if (desktop) return <Navigate to="/" replace />;

  return (
    <div className="p-0 lg:p-6">
      <h1 className="sr-only">Profile and contact</h1>
      <RightColumn />
    </div>
  );
};

export default ProfilePage;
