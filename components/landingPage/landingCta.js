import { React, useEffect, useState } from "react";
import LandingContainer from "./landingContainer";
import Button from "../elements/button";

export default function LandingCta() {
  return (
    <div className="relative py-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      ></div>
      <LandingContainer>
        <div className="relative">
          <div className="flex items-center justify-center h-[50vh] px-2 sm:px-0">
            <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-white">
                Ship Faster than Flash
              </h1>
              <p className="text-center text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300">
                Just clone and run
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Button
                  link="#features"
                  text="Explore Boilerplates"
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </LandingContainer>
    </div>
  );
}
