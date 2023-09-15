import { React, useEffect, useState } from "react";
import LandingContainer from "../landingPage/landingContainer";
import Button from "../elements/button";
import features from "@/config/feature";

export default function DetailsCta({ id, subtitle }) {
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
                {subtitle}
              </p>

              {features.map((feature, index) => (
                <>
                  {feature.id == id ? (
                    <>
                      <p className="flex justify-center">
                        <span className="line-through text-xl">
                          {feature.oldPrice}
                        </span>
                        <span className="text-5xl ml-2 text-slate-900 font-bold">
                          {feature.newPrice}
                        </span>
                      </p>
                      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <Button
                          link={feature.buyLink}
                          text="Get it Now"
                          type="primary"
                        />
                      </div>
                    </>
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
      </LandingContainer>
    </div>
  );
}
