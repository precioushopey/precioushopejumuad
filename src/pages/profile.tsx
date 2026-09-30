import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { RightColumn } from "../components/shell/RightColumn";

const DESKTOP = "(min-width: 1280px)";

// The profile and contact cards as a page, for screens below lg where there is no room for the
// right-hand column. On desktop the column is always visible, so this page sends you home.
const ProfilePage = () => {
  const [desktop, setDesktop] = useState(
    () => window.matchMedia(DESKTOP).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(DESKTOP);
    const update = () => setDesktop(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (desktop) return <Navigate to="/" replace />;

  return (
    <div className="p-0 lg:p-8">
      <h1 className="sr-only">Profile and contact</h1>
      <RightColumn />
    </div>
  );
};

export default ProfilePage;
