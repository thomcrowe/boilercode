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
            <a href="https://boilercode.co/" className="flex items-center">
              <img
                src="/icon-512.png"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                BoilerCode.co
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-24 sm:grid-cols-2">
            <div className="text-left">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                  <a
                    href="https://xpage.lemonsqueezy.com/affiliates"
                    target="_blank"
                    className="hover:underline"
                  >
                    Affiliation Program - 30% Commission
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://uniqueside.io/?utm_source=boilercode"
                    target="_blank"
                    className="hover:underline"
                  >
                    Launch your Product in 15 days
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://pagepe.com/?utm_source=boilercode"
                    target="_blank"
                    className="hover:underline"
                  >
                    Put your Domains into Work
                  </a>
                </li>
                <li>
                  <a
                    href="https://sidefeature.com/?utm_source=boilercode"
                    target="_blank"
                    className="hover:underline"
                  >
                    Create and Share Forms
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://twitter.com/manoj_ahi/?utm_source=uniqueside"
                    target="_blank"
                    className="hover:underline "
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
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
