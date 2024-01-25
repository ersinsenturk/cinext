"use client";

import { useRouter } from "next/navigation";

const Modal = ({ children, heading }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full bg-black/20"
      onClick={handleGoBack}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div
          className="relative bg-color3 rounded-lg shadow dark:bg-color2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h2>{heading}</h2>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
              onClick={handleGoBack}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

{
  /* <div
      className="fixed h-full w-full left-0 top-0 bg-black/30 flex items-center justify-center"
      onClick={handleGoBack}
    >
      <div
        className="bg-white rounded-md p-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-0 right-0" onClick={handleGoBack}>
          X
        </button>
        {children}
      </div>
    </div> */
}
