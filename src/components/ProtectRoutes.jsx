import { Navigate, Outlet } from "react-router-dom";

// If the user is not logged in then redirect them to login page only
const ProtectRoutes = () => {
  const data = localStorage.getItem("user");

  return data ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectRoutes;
