import LandingContainer from "./landingContainer";

const LandingFooter = () => {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
        </div> */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://trydome.io/" className="flex items-center">
              <img
                src="/dome-powered.png"
                className="h-8 mr-3"
                alt="Dome Logo"
              />
            </a>
            <div className="sm:flex sm:items-center sm:justify-between mt-4">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                Built by{" "}
                <a
                  href="https://manojahi.com"
                  target="_blank"
                  className="underline text-orange-700"
                >
                  Manoj {" "}
                </a>
                You can follow on {" "}
                <a
                  href="https://x.com/manoj_ahi"
                  target="_blank"
                  className="underline"
                >
                  Twitter
                </a>
              </span>
              <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-24 sm:grid-cols-2">
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              BoilerCode.co
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
