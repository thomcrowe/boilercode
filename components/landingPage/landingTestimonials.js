import React from "react";
import LandingContainer from "./landingContainer";
import Image from "next/image";

const LandingTestimonials = () => {
  return (
    <div className="relative py-4 overflow-hidden" id="testimonials">
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      ></div>
      <LandingContainer>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-white">
            We have some fans.
          </h2>
        </div>
        <div
          className="famewall-embed w-full"
          data-src="boilercode"
          data-format="grid"
        ></div>
        <script
          type="text/javascript"
          src="https://embed.famewall.io/frame.js"
          defer
        ></script>
      </LandingContainer>
    </div>
  );
};

export default LandingTestimonials;
