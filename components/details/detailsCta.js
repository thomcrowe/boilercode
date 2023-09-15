import { React, useEffect, useState } from "react";
import LandingContainer from "../landingPage/landingContainer";
import Button from "../elements/button";

export default function DetailsCta() {
  return (
    <div className="relative py-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      ></div>
      <LandingContainer>
        <div className="relative">
          <div className="flex items-center justify-center h-[40vh] px-2 sm:px-0">
            <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-white">
                Ship Faster than Flash
              </h1>
              <p className="text-center text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300">
                Get NextJs SaaS Boilerplate now
              </p>

              <p className="flex justify-center">
                <span className="line-through text-xl">$199</span>
                <span className="text-5xl ml-2 text-slate-900 font-bold">
                  $99
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Button
                  link="https://xpage.lemonsqueezy.com/checkout/buy/1869026f-194e-4805-89b3-ded98fa974d6?embed=1"
                  text="Get it Now"
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
