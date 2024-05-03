import CustomerSupport from "@/components/additional/customerSupport";
import { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "../lib/fpixel";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.lemonSqueezyAffiliateConfig = { store: "xpage" };
            `,
          }}
        />
        <script src="https://lmsqueezy.com/affiliate.js" defer />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
        {/* Add CustomerSupport component */}
        <CustomerSupport />
      </body>
    </Html>
  );
}
