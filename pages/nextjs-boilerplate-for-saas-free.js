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
          <DetailsHero title="Free NextJs Boilerplate for SaaS" />
          <DetailsFeature id="nextjs-free" />
          <DetailsHowTo
            title="NextJs Boilerplace Demo"
            subtitle="Here is how you can use NextJs Boilerplate to ship fast"
            videoUrl="nextjs-boilercode-1.mp4"
          />
          <DetailsHowTo
            title="Dynamic Payment Integraton Demo"
            subtitle="You can Integrate with Stripe and LemonSqueezy superfast"
            videoUrl="nextjs-boilerplate-2.mp4"
          />
          <DetailsCta id="nextjs-free" subtitle="Get NextJs SaaS Boilerplate now" />
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}
