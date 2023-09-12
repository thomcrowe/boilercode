import LandingContainer from "./landingContainer";
import Card from "../elements/card";
import Sprikle from "../elements/sprikle";
import features from "@/config/feature";

const LandingFeature = () => {
  return (
    <>
      <div className="relative" id="features">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
        </div>
        <LandingContainer>
          <div className="md:w-2/3 lg:w-1/2">
            <Sprikle />

            <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Available Boilerplates
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              These boilerplates are ready to use. You just need to clone and
              can start running.
            </p>
          </div>
          <div
            className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl 
       border text-gray-600 border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-2 
       lg:divide-y-0 xl:grid-cols-2"
          >
            {features.map((feature, index) => (
              <Card data={feature} key={index} />
            ))}
          </div>
        </LandingContainer>
      </div>
    </>
  );
};

export default LandingFeature;
