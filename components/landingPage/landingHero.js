import LandingContainer from "./landingContainer";
import { React, useEffect, useState } from "react";
import ProductHunt from "../elements/productHunt";
import Button from "../elements/button";

export default function LandingHero() {
  const words = ["NextJs", "React", "React Native", "Chrome Extension"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTyping, setCurrentTyping] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentTyping(words[currentWordIndex].substr(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex >= words[currentWordIndex].length) {
        setCharIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, charIndex, words]);

  return (
    <>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <LandingContainer>
          <div className="relative pt-32 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <ProductHunt />
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Boilerplate Code for <br />
                <span className="text-primary">{currentTyping}</span>
              </h1>

              <p className="mt-8 text-gray-700 dark:text-gray-300 text-3xl">
                Ship your <span className="font-bold text-primary underline">SaaS</span> Super Fast
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-4">
                <>
                  <Button
                    link="#features"
                    text="Explore Boilerplate Code"
                    type="primary"
                  />
                </>
              </div>
              <div className="py-8 mt-16 border-y border-gray-800 sm:flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center flex-1 mb-4 sm:mb-0">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    User Auth
                  </h6>
                  <p className="mt-2 text-gray-500">
                    User Auth including Login with Social Website, Login with
                    Magic Link
                  </p>
                </div>
                <div className="text-center flex-1 mb-4 sm:mb-0">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Payments
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Support Integration with Stripe and LemonSqueezy dynamically
                  </p>
                </div>
                <div className="text-center flex-1">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    SEO First
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Manage your SEO super easy by a config file
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>
    </>
  );
}
