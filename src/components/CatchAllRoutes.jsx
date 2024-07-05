import { Navigate } from "react-router-dom";

const CatchAllRoutes = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  // If the user is logged in redirect them to home page and if they are not logged in then redirect them to login page
  return data ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default CatchAllRoutes;
