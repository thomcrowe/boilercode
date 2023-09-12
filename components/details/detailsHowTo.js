import Sprikle from "../elements/sprikle";
import Video from "../elements/video";
import LandingContainer from "../landingPage/landingContainer";

const DetailsHowTo = ({ title, subtitle, videoUrl }) => {
  return (
    <div className="relative" id="features">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
      </div>
      <LandingContainer>
        <div className="flex flex-col items-center justify-center">
          <Sprikle />

          <h2 className="my-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            {title}
          </h2>
          <p className=" text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Video videoUrl={videoUrl} />
        </div>
      </LandingContainer>
    </div>
  );
};

export default DetailsHowTo;
