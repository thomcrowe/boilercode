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
          <DetailsHero
            key="details-hero-1"
            title="NextJs Boilerplate for SaaS + AI"
          />
          <DetailsFeature key="details-feature-1" id="nextjs" />
          <DetailsHowTo
            key="details-how-to-1"
            title="NextJs Boilerplace Demo"
            subtitle="Here is how you can use NextJs Boilerplate to ship fast"
            videoId="lRjdW8He-54"
          />
          <DetailsHowTo
            key="details-how-to-2"
            title="Dynamic Payment Integraton Demo"
            subtitle="You can Integrate with Stripe and LemonSqueezy superfast"
            videoId="aM6mYZEc3MA"
          />
          <DetailsHowTo
            key="details-how-to-3"
            title="Launch AI Apps"
            subtitle="Langchain, Pinecone & OpenAI Supported"
            videoId="iJaGelAyq-k"
          />
          <DetailsHowTo
            key="details-how-to-4"
            title="Control by Config"
            subtitle="Everything is controlled by config file"
            videoId="R_ALL4LNC1c"
          />
          <DetailsCta
            key="details-cta-1"
            id="nextjs"
            subtitle="Get NextJs SaaS Boilerplate now"
          />
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}
