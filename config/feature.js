import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandReact,
  TbBrandChrome,
} from "react-icons/tb";

const features = [
  {
    section: "NextJs Boilerplates",
    subtitle:
      "Set of NextJs Boilerplates to help you launch your product faster than ever",
    boilerplates: [
      {
        Icon: TbBrandNextjs,
        id: "nextjs",
        title: "NextJs SaaS + AI (Recommended)",
        description:
          "NextJs SaaS code which includes all the essential features that you need to launch fast. Following are the included things",
        features: [
          {
            text: "User Auth (Social Login, Magic Link)",
            hours: "+ Saving 5 hrs",
          },
          { text: "Database Integration", hours: "+ Saving 4 hrs" },
          { text: "Landing Page", hours: "+ Saving 8 hrs" },
          { text: "Email Integration", hours: "+ Saving 3 hrs" },
          { text: "Stripe Checkout + Webhook", hours: "+ Saving 6 hrs" },
          {
            text: "LemonSqueezy Checkout (Including Paypal)",
            hours: "+ Saving 3 hrs",
          },
          {
            text: "LemonSqueezy Webhook + Subscription",
            hours: "+ Saving 5 hrs",
          },
          { text: "Tailwind CSS", hours: "+ Saving 3 hrs" },
          { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
          { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
          { text: "Custom Blog Integration", hours: "+ Saving 10 hrs" },
          { text: "LangChain Integration", hours: "+ Saving 6 hrs" },
          { text: "Pinecone Integration", hours: "+ Saving 4 hrs" },
          { text: "OpenAI Integration", hours: "+ Saving 4 hrs" },
          { text: "PDF Chat", hours: "+ Saving 5 hrs" },
          { text: "Dalle-3 Image Generation", hours: "+ Saving 4 hrs" },
        ],
        techStack:
          "NextJs + NextAuth + Stripe + LemonSqueezy + AI + Tailwind CSS",
        oldPrice: "$199",
        newPrice: "$119",
        // badgeText: "Use PH40 for 40% Off",
        paymentProvider: "LemonSqueezy",
        buyLink:
          "https://dome-global-inc.lemonsqueezy.com/checkout/buy/b83779af-ae2b-42e6-9599-31b8bff9e94a",
        demoPageLink: "/nextjs-boilerplate-for-saas",
        guidePageLink: "/blog/nextjs-saas",
      },
      {
        Icon: TbBrandNextjs,
        id: "nextjs-free",
        title: "NextJs SaaS - Standard",
        description:
          "NextJs SaaS code which includes all the essential features that you need to launch fast. Following are the included things",
        features: [
          {
            text: "User Auth (Social Login, Magic Link)",
            hours: "+ Saving 5 hrs",
          },
          { text: "Database Integration", hours: "+ Saving 4 hrs" },
          { text: "Landing Page", hours: "+ Saving 8 hrs" },
          { text: "Email Integration", hours: "+ Saving 3 hrs" },

          {
            text: "LemonSqueezy Checkout (Including Paypal)",
            hours: "+ Saving 3 hrs",
          },
          { text: "Tailwind CSS", hours: "+ Saving 3 hrs" },
          { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
          { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
          {
            text: "LemonSqueezy Webhook + Subscription",
            hours: "+ Saving 5 hrs",
            crossText: true,
          },
          {
            text: "Stripe Checkout + Webhook",
            hours: "+ Saving 6 hrs",
            crossText: true,
          },

          {
            text: "Custom Blog Integration",
            hours: "+ Saving 10 hrs",
            crossText: true,
          },
          {
            text: "LangChain Integration",
            hours: "+ Saving 6 hrs",
            crossText: true,
          },
          {
            text: "Pinecone Integration",
            hours: "+ Saving 4 hrs",
            crossText: true,
          },
          {
            text: "OpenAI Integration",
            hours: "+ Saving 4 hrs",
            crossText: true,
          },
          { text: "PDF Chat", hours: "+ Saving 5 hrs", crossText: true },
        ],
        techStack: "NextJs + NextAuth + LemonSqueezy + Tailwind CSS",
        oldPrice: "$199",
        newPrice: "$99",
        // badgeText: "Use PH40 for 40% Off",
        paymentProvider: "LemonSqueezy",
        buyLink:
          "https://dome-global-inc.lemonsqueezy.com/checkout/buy/8f1226ca-9d0d-4d3a-bf4d-46b6b8ef1b16",
        demoPageLink: "/nextjs-boilerplate-for-saas-standard",
        guidePageLink: "/blog/nextjs-saas-standard-boilerplate",
      },
    ],
  },
  {
    section: "React Boilerplates",
    subtitle:
      "Set of React Boilerplates to help you launch your product faster than ever",
    boilerplates: [
      {
        Icon: TbBrandReact,
        id: "react",
        title: "React SaaS",
        description:
          "React SaaS code which includes all the essential features that you need to launch fast. Following are the included things",
        features: [
          {
            text: "Supabase Auth (Social Login, Magic Link)",
            hours: "+ Saving 5 hrs",
          },
          { text: "Landing Page", hours: "+ Saving 8 hrs" },
          { text: "Stripe Checkout", hours: "+ Saving 6 hrs" },
          {
            text: "LemonSqueezy Checkout (Including Paypal)",
            hours: "+ Saving 3 hrs",
          },
          { text: "Tailwind CSS", hours: "+ Saving 3 hrs" },
          { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
          { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
          {
            text: "Langchain, Pinecone and OpenAI Support",
            hours: "place into your node server",
          },
          {
            text: "Stripe and LemonSqueezy webhook Support",
            hours: "place into your node server",
          },
          {
            text: "Server related code you need to place into your node server",
          },
        ],
        techStack:
          "React + Supabase Auth + Stripe + LemonSqueezy + Tailwind CSS + Server Side Support Code Files",
        oldPrice: "$199",
        newPrice: "$99",
        paymentProvider: "LemonSqueezy",
        buyLink:
          "https://dome-global-inc.lemonsqueezy.com/checkout/buy/9370e6c4-c80e-42da-8d44-ad5a292dbd4b",
        // demoPageLink: "/nextjs-boilerplate-for-saas",
        // guidePageLink: "/blog/nextjs-saas",
      },
      {
        Icon: TbBrandReact,
        id: "chrome-extension",
        title: "ChatGPT Chrome Extension - React",
        description:
          "Boilerplate for Chrome Extension with ChatGPT using React",
        features: [
          { text: "ChatGPT Integration", hours: "+ Saving 5 hrs" },
          {
            text: "Custom Character Chat",
            hours: "+ Saving 4 hrs",
          },
          {
            text: "LemonSqueezy Checkout (Including Paypal)",
            hours: "+ Saving 4 hrs",
          },
          {
            text: "Chat UI",
            hours: "+ Saving 4 hrs",
          },
          { text: "Chakra UI", hours: "+ Saving 3 hrs" },
        ],
        techStack: "React + Chrome Extension + LemonSqueezy + ChakraUI",
        oldPrice: "$199",
        newPrice: "$79",
        // badgeText: "Use PHNEW for 40% Off",
        paymentProvider: "LemonSqueezy",
        buyLink:
          "https://dome-global-inc.lemonsqueezy.com/checkout/buy/53f49cbd-e857-49dd-995e-218f654282c7",
        demoPageLink: "/react-chrome-extension-boilerplate-with-ai",
        // guidePageLink: "#",
      },
    ],
  },
];

export default features;
