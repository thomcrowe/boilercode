import LandingContainer from "../landingPage/landingContainer";
import Card from "../elements/card";
import Sprikle from "../elements/sprikle";
import features from "@/config/feature";

const DetailsFeature = () => {
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
              Features included in Boilerplate
            </h2>
          </div>
          <div
            className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl 
       border text-gray-600 border-gray-100 dark:border-gray-700 sm:grid-cols-1 lg:grid-cols-1 
       lg:divide-y-0 xl:grid-cols-1"
          >
            {features.map((feature, index) => (
              <>
                {feature.title == "NextJs" ? (
                  <Card data={feature} key={index} />
                ) : null}
              </>
            ))}
          </div>
        </LandingContainer>
      </div>
    </>
  );
};

export default DetailsFeature;
