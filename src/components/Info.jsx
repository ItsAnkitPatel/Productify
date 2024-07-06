import { CheckCheckIcon, CopyIcon, InfoIcon } from "lucide-react";
import { useState } from "react";
const Info = () => {
  const [copySuccessEmail, setCopySuccessEmail] = useState(false);
  const [copySuccessPassword, setCopySuccessPassword] = useState(false);

  const handleCopy = (text, handleCopyState) => {
    navigator.clipboard.writeText(text);
    handleCopyState(true);
    setTimeout(() => {
      handleCopyState(false);
    }, 500);
  };
  return (
    <>
      {/* This info icon component will give the hint for demo account details */}
      <div className="relative mb-4 flex w-full justify-end">
        <div className="group" title="You can use these credentials">
          <InfoIcon className="size-5 cursor-pointer" />
          <div className="absolute -right-10 -top-16 origin-bottom-right scale-0 px-3 py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:-top-24 group-hover:right-3 group-hover:scale-100 group-hover:opacity-100">
            <p className="mb-2">Demo Account details</p>
            <div className="mb-2 flex items-center justify-between gap-3 text-base">
              <p className="">Email: eve.holt@reqres.in</p>
              <div
                className="cursor-pointer"
                onClick={() =>
                  handleCopy("eve.holt@reqres.in", setCopySuccessEmail)
                }
                title="Copy"
              >
                {copySuccessEmail ? (
                  <CheckCheckIcon className="size-4" />
                ) : (
                  <CopyIcon className="size-4" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 text-base">
              <p className="">Password: pistol</p>
              <div
                className="cursor-pointer"
                onClick={() => handleCopy("pistol", setCopySuccessPassword)}
                title="Copy"
              >
                {copySuccessPassword ? (
                  <CheckCheckIcon className="size-4" />
                ) : (
                  <CopyIcon className="size-4" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Info;
