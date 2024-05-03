import LandingLayout from "@/components/landingPage/landingLayout";
import LandingHeader from "@/components/landingPage/landingHeader";
import LandingFeature from "@/components/landingPage/landingFeature";
import LandingHowTo from "@/components/landingPage/landingHowTo";
import LandingHero from "@/components/landingPage/landingHero";
import LandingPricing from "@/components/landingPage/landingPricing";
import LandingFooter from "@/components/landingPage/landingFooter";
import LandingCta from "@/components/landingPage/landingCta";
import { useTheme } from "next-themes";
import LandingTestimonials from "@/components/landingPage/landingTestimonials";
import LandingStory from "@/components/landingPage/landingStory";
import { sendGTMEvent } from "@next/third-parties/google";
import Script from "next/script";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // setTheme("light"); // This line should be moved to useEffect inside the component

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
          <EventButton /> {/* Added EventButton component */}
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}

export function EventButton() {
  const handleClick = () => {
    sendGTMEvent({ event: "buttonClicked", value: "xyz" });
  };

  return (
    <div>
      <button onClick={handleClick}>Send Event</button>
    </div>
  );
}
