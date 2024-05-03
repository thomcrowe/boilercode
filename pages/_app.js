import "@/styles/globals.css";
import LandingLayout from "@/components/landingPage/landingLayout";
import Script from "next/script";
import SEO from "@/components/additional/seo";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "@/components/additional/googleAnalytics";
import { GoogleTagManager } from "@next/third-parties/google";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <SEO />
      <GoogleTagManager gtmId="GTM-WC2L23PV" />
      <ThemeProvider attribute="class">
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      </ThemeProvider>
    </>
  );
}
