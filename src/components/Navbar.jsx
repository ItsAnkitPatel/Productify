import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonStyle from "./ButtonStyle";
const Navbar = () => {
  const isUserLoggedIn = JSON?.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Logged out successfully");
    localStorage.removeItem("user");

    
    // After user logged out redirect them to login page
    navigate("/login", { replace: true });
  };
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl"><Link to={""}>Productify</Link></h1>
      {isUserLoggedIn && (
        <div>
          <ButtonStyle onClick={handleLogout}>Logout</ButtonStyle>
        </div>
      )}
    </div>
  );
};
export default Navbar;
