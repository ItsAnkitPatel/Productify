import { cn } from "../utils/cn";

const ButtonStyle = ({ children, className, onClick }) => {
  return (
    <button
      type="submit"
      className={cn(
        "relative flex h-10 w-full items-center justify-center rounded-md bg-gradient-to-br from-black to-neutral-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:brightness-125 active:translate-y-2",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default ButtonStyle;
