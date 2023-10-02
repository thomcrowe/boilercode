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
          {features.map((feature, index) => (
            <div className="mb-8" key={"feature_" + index}>
              <div className="md:w-2/3 lg:w-1/2">
                <Sprikle />
                <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
                  {feature.section}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.subtitle}
                </p>
              </div>

              <div
                className="mt-16 grid overflow-hidden rounded-3xl divide-x divide-y divide-gray-100 dark:divide-gray-700
       border text-gray-600 border-gray-100 dark:border-gray-700 
       sm:grid-cols-1 lg:grid-cols-1  xl:grid-cols-2"
              >
                {feature.boilerplates.map((feature, index) => (
                  <div className="" key={"feature_" + index}>
                    <Card data={feature} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </LandingContainer>
      </div>
    </>
  );
};

export default LandingFeature;
