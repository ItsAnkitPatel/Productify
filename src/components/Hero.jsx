import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex min-h-96 w-full flex-col items-center justify-center">
      <h1 className="w-full text-center text-4xl transition-all duration-700 sm:text-nowrap md:text-6xl lg:text-7xl xl:text-8xl">
        Welcome to <span className="text-zinc-500">Productify</span>
      </h1>

      <p className="mt-4 text-base text-center md:text-xl lg:text-2xl transition-all duration-700">
        The best place to manage your products
      </p>

      <span className="mt-6 text-sm md:text-base text-center text-zinc-500 transition-all duration-700">
        Please{" "}
        <Link
          to={"/login"}
          className="text-zinc-700 underline-offset-2 hover:underline"
        >
          Login
        </Link>{" "}
        First if you haven't
      </span>
    </div>
  );
};
export default Hero;
