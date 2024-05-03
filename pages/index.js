import LandingLayout from "@/components/landingPage/landingLayout";
import LandingHeader from "@/components/landingPage/landingHeader";
import LandingFeature from "@/components/landingPage/landingFeature";
import LandingHowTo from "@/components/landingPage/landingHowTo";
import LandingHero from "@/components/landingPage/landingHero";
import LandingPricing from "@/components/landingPage/landingPricing";
import LandingFooter from "@/components/landingPage/landingFooter";
import LandingCta from "@/components/landingPage/landingCta";
import { useTheme } from "next-themes";
import LandingTastimonials from "@/components/landingPage/landingTestimonials";
import LandingStory from "@/components/landingPage/landingStory";
import LandingTestimonials from "@/components/landingPage/landingTestimonials";
import Link from "next/link";
import React, { useEffect } from "react";
import Script from "next/script";
import * as fbq from "../lib/fpixel";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const handleClick = () => {
    fbq.event("Purchase", { currency: "USD", value: 10 });
  };

  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <>
      <Script src="https://assets.lemonsqueezy.com/lemon.js" defer></Script>
      <LandingLayout>
        <LandingHeader />
        <main className="space-y-40 mb-0">
          <LandingHero />
          <LandingFeature />
          {/* <LandingPricing /> */}
          <LandingStory />
          <LandingTestimonials />
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}
