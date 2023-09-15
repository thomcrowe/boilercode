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
import DetailsHero from "@/components/details/detailsHero";
import DetailsHowTo from "@/components/details/detailsHowTo";
import DetailsFeature from "@/components/details/detailsFeature";
import Button from "@/components/elements/button";
import DetailsCta from "@/components/details/detailsCta";

export default function NextJsHome() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  setTheme("light");

  return (
    <>
      <LandingLayout>
        <LandingHeader />
        <main className="space-y-20 mb-0">
          <DetailsHero title="NextJs AI Boilerplate for SaaS" />
          <DetailsFeature id="nextjs-ai" />
          <DetailsHowTo
            title="NextJs AI Boilerplace Demo"
            subtitle="Here is how you can use NextJs AI Boilerplate to ship fast"
            videoUrl="nextjs-ai-demo-1.mp4"
          />
          <DetailsHowTo
            title="Control by Config"
            subtitle="Everything is controlled by config file"
            videoUrl="nextjs-ai-demo-2.mp4"
          />
          <DetailsCta
            id="nextjs-ai"
            subtitle="Get NextJs AI SaaS Boilerplate now"
          />
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}
