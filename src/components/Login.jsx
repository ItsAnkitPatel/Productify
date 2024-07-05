import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonStyle from "./ButtonStyle";
import Info from "./Info";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // Make post request to login user
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");
    try {
      const response = await (
        await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        })
      ).json();
      if (response.error) throw new Error(response.error);
      if (response.token) {
        const userDetails = {
          email: email,
          token: response.token,
        };
        localStorage.setItem("user", JSON.stringify(userDetails));
        toast.success("Logged in successfully");
        setEmail("");
        setPassword("");

        // Redirect to home page after successful login
        navigate("/home", { replace: true })
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex min-h-[500px] w-full items-center justify-center transition-all duration-300">
      <div className="w-full max-w-md rounded-md px-5 py-10 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        {/* This info icon component will give the hint for demo account details  */}
        <Info />

        {/* Form */}
        <form className="space-y-8" onSubmit={handleLogin}>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md p-2 outline-none ring-gray-300 focus:ring focus:ring-opacity-60"
            />
            <div className="relative flex">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md p-2 outline-none ring-gray-300 focus:ring focus:ring-opacity-60"
              />
              {/* Password icon: toggle the password field `type` between "text" and "password" */}
              <div
                onClick={() => setPasswordVisible((prev) => !prev)}
                className="absolute right-2 top-2 cursor-pointer"
              >
                {passwordVisible ? (
                  <EyeIcon className="size-5" />
                ) : (
                  <EyeOffIcon className="size-5" />
                )}
              </div>
            </div>
          </div>
          <ButtonStyle>Login</ButtonStyle>
        </form>
      </div>
    </div>
  );
};
export default Login;
