import { Navigate } from "react-router-dom";

// If the user is already logged in then redirect them to home page only
const RedirectRoute = () => {
  const data = JSON?.parse(localStorage.getItem("user"));
  return data ? <Navigate to="/home" replace /> : null;
};
export default RedirectRoute;
