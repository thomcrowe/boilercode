import Sprikle from "../elements/sprikle";
import Video from "../elements/video";
import YoutubeVideo from "../elements/youtubeVideo";
import LandingContainer from "../landingPage/landingContainer";

const DetailsHowTo = ({ title, subtitle, videoId }) => {
  return (
    <div className="relative" id="features">
      <LandingContainer>
        <div className="flex flex-col items-center justify-center">
          <Sprikle />

          <h2 className="my-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            {title}
          </h2>
          <p className=" text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <YoutubeVideo videoId={videoId} />
        </div>
      </LandingContainer>
    </div>
  );
};

export default DetailsHowTo;
