import LandingContainer from "./landingContainer";
import { React, useEffect, useState } from "react";
import ProductHunt from "../elements/productHunt";
import Button from "../elements/button";
import {
  TbBrandNextjs,
  TbBrandPaypalFilled,
  TbBrandReact,
  TbBrandChrome,
  TbBrandMailgun,
  TbDatabase,
  TbBrandTailwind,
  TbBrandOpenai,
  TbBrandOauth,
} from "react-icons/tb";
import { FaStripe } from "react-icons/fa";

export default function LandingHero() {
  const words = ["NextJs SaaS", "React SaaS"];
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
      <div className="relative">
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
              {/* <p className="px-2 py-1 border border-slate-900 text-slate-900 rounded-lg max-w-max mx-auto mb-3 text-sm">
                <span className="font-bold">50FRIDAY</span> - 50% OFF
              </p> */}

              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Boilerplate Code for <br />
                <span className="text-primary">{currentTyping}</span>
                {/* <span className="text-primary">NextJs</span> */}
              </h1>

              <p className="mt-8 text-gray-700 dark:text-gray-300 text-3xl">
                Ship your{" "}
                <span className="font-bold text-primary underline">SaaS</span>{" "}
                Super Fast
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-4">
                <Button
                  link="#features"
                  text="Explore Boilerplates"
                  type="primary"
                />
                <Button link="/blog/nextjs-saas" text="View Documentation" />
              </div>
              <div className="py-8 mt-16 border-y border-gray-800 sm:flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center flex-1 mb-4 sm:mb-0">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    User Auth
                  </h6>
                  <p className="mt-2 text-gray-500">
                    User Auth including{" "}
                    <span className="text-primary">Social Login</span> and{" "}
                    <span className="text-primary">Magic Link Login</span>
                  </p>
                </div>
                <div className="text-center flex-1 mb-4 sm:mb-0">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Payments
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Support Integration with{" "}
                    <span className="text-primary">Stripe</span> and{" "}
                    <span className="text-primary">LemonSqueezy</span>{" "}
                    dynamically
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
              <div className="mt-12 flex flex-wrap justify-center gap-x-4">
                <div className="p-4 transition duration-200 flex flex-col items-center">
                  <TbBrandNextjs
                    size={40}
                    className="text-gray-800 dark:text-white mb-2"
                  />
                  <p className="text-gray-700 text-sm">NextJs</p>
                </div>
                <div className="p-4 transition duration-200 flex flex-col items-center">
                  <TbBrandOauth
                    size={40}
                    className="text-gray-800 dark:text-white mb-2"
                  />
                  <p className="text-gray-700 text-sm">User Auth</p>
                </div>
                <div className="p-4 transition duration-200 flex flex-col items-center">
                  <FaStripe
                    size={40}
                    className="text-gray-800 dark:text-white mb-2"
                  />
                  <p className="text-gray-700 text-sm">Payments</p>
                </div>
                <div className="p-4 transition duration-200 flex flex-col items-center">
                  <TbBrandPaypalFilled
                    size={40}
                    className="text-gray-800 dark:text-white mb-2"
                  />
                  <p className="text-gray-700 text-sm">Paypal</p>
                </div>
                <div className="p-4 transition duration-200 flex flex-col items-center">
                  <TbBrandMailgun
                    size={40}
                    className="text-gray-800 dark:text-white mb-2"
                  />
                  <p className="text-gray-700 text-sm">Emails</p>
                </div>
                <div className="p-4 transition duration-200 flex flex-col items-center">
                  <TbDatabase
                    size={40}
                    className="text-gray-800 dark:text-white mb-2"
                  />
                  <p className="text-gray-700 text-sm">Database</p>
                </div>
                <div className="p-4 transition duration-200 flex flex-col items-center">
                  <TbBrandTailwind
                    size={40}
                    className="text-gray-800 dark:text-white mb-2"
                  />
                  <p className="text-gray-700 text-sm">Tailwind</p>
                </div>
                <div className="p-4 transition duration-200 flex flex-col items-center">
                  <TbBrandOpenai
                    size={40}
                    className="text-gray-800 dark:text-white mb-2"
                  />
                  <p className="text-gray-700 text-sm">AI</p>
                </div>
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>
    </>
  );
}
