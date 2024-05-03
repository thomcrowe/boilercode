import CustomerSupport from "@/components/additional/customerSupport";
import { Html, Head, Main, NextScript } from "next/document";

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
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
