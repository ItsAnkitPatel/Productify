import { cn } from "../utils/cn";

// This component will act as a wrapper for the content which will help to keep the width in check for larger screens
const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto mt-5 h-full w-full max-w-screen-xl px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
