import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex min-h-96 w-full flex-col items-center justify-center">
      <h1 className="w-full text-center text-4xl transition-all duration-700 sm:text-nowrap md:text-6xl lg:text-7xl xl:text-8xl">
        Welcome to <span className="text-zinc-500">Productify</span>
      </h1>

      <p className="mt-4 text-center text-base transition-all duration-700 md:text-xl lg:text-2xl">
        The best place to manage your products
      </p>

      <span className="mt-6 text-center text-sm capitalize text-zinc-500 transition-all duration-700 md:text-base">
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
