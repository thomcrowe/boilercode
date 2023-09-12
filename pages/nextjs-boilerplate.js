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

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  setTheme("light");

  return (
    <>
      <LandingLayout>
        <LandingHeader />
        <main className="space-y-20 mb-0">
          <DetailsHero />
          <DetailsFeature />
          <DetailsHowTo />
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}
