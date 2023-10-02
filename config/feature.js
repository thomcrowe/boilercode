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
        title: "NextJs SaaS + AI",
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
        ],
        techStack:
          "NextJs + NextAuth + Stripe + LemonSqueezy + AI + Tailwind CSS",
        oldPrice: "$199",
        newPrice: "$119",
        // badgeText: "Use PH40 for 40% Off",
        paymentProvider: "LemonSqueezy",
        buyLink:
          "https://xpage.lemonsqueezy.com/checkout/buy/1869026f-194e-4805-89b3-ded98fa974d6?embed=1",
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
          "https://xpage.lemonsqueezy.com/checkout/buy/376cc037-396f-4a5b-9fea-05fc2c146c77?embed=1",
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
          "https://xpage.lemonsqueezy.com/checkout/buy/1499a2ac-aa3b-4765-9473-504a3ee65ebb",
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
          "https://xpage.lemonsqueezy.com/checkout?cart=43a9ccd9-f2e0-4061-a902-e99cb2804814",
        // demoPageLink: "#",
        // guidePageLink: "#",
      },
    ],
  },
];

export default features;
