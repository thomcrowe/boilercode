import "@/styles/globals.css";
import LandingLayout from "@/components/landingPage/landingLayout";
import Script from "next/script";
import SEO from "@/components/additional/seo";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "@/components/additional/googleAnalytics";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GoogleAnalytics />
      <SEO />
      <ThemeProvider attribute="class">
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      </ThemeProvider>
    </>
  );
}
