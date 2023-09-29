import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandReact,
  TbBrandChrome,
} from "react-icons/tb";

const features = [
  {
    Icon: TbBrandNextjs,
    id: "nextjs",
    title: "NextJs SaaS + AI",
    description:
      "NextJs SaaS code which includes all the essential features that you need to launch fast. Following are the included things",
    features: [
      { text: "User Auth (Social Login, Magic Link)", hours: "+ Saving 5 hrs" },
      { text: "Database Integration", hours: "+ Saving 4 hrs" },
      { text: "Landing Page", hours: "+ Saving 8 hrs" },
      { text: "Email Integration", hours: "+ Saving 3 hrs" },
      { text: "Stripe Checkout + Webhook", hours: "+ Saving 6 hrs" },
      {
        text: "LemonSqueezy Checkout (Including Paypal)",
        hours: "+ Saving 3 hrs",
      },
      { text: "LemonSqueezy Webhook + Subscription", hours: "+ Saving 5 hrs" },
      { text: "Tailwind CSS", hours: "+ Saving 3 hrs" },
      { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
      { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
      { text: "Custom Blog Integration", hours: "+ Saving 10 hrs" },
      { text: "LangChain Integration", hours: "+ Saving 6 hrs" },
      { text: "Pinecone Integration", hours: "+ Saving 4 hrs" },
      { text: "OpenAI Integration", hours: "+ Saving 4 hrs" },
      { text: "PDF Chat", hours: "+ Saving 5 hrs" },
    ],
    techStack: "NextJs + NextAuth + Stripe + LemonSqueezy + AI + Tailwind CSS",
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
      { text: "OpenAI Integration", hours: "+ Saving 4 hrs", crossText: true },
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
  // {
  //   Icon: TbBrandNextjs,
  //   id: "nextjs-blog",
  //   title: "NextJs Blog with Landing Page",
  //   description:
  //     "Get exact replica of Boilercode.co landing page with custom blog feature.",
  //   features: [
  //     { text: "Landing Page", hours: "+ Saving 8 hrs" },
  //     {
  //       text: "Custom Blog Integration",
  //       hours: "+ Saving 10 hrs",
  //     },
  //     {
  //       text: "LemonSqueezy Checkout (Including Paypal)",
  //       hours: "+ Saving 3 hrs",
  //     },
  //     { text: "Tailwind CSS", hours: "+ Saving 3 hrs" },
  //     { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
  //     { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
  //     {
  //       text: "Just put your blog file into a folder and your blog will be up and running",
  //       hours: "+ Saving 4 hrs",
  //     },
  //   ],
  //   techStack: "NextJs + LemonSqueezy + Tailwind CSS",
  //   oldPrice: "$199",
  //   newPrice: "$49",
  //   badgeText: "Use PH40 for 40% Off",
  //   paymentProvider: "LemonSqueezy",
  //   buyLink:
  //     "https://xpage.lemonsqueezy.com/checkout/buy/a33bf353-23bf-46bd-b1ca-e83552db0140?embed=1",
  //   demoPageLink: "/blog/nextjs-saas#custom-blog",
  //   guidePageLink: "/blog/nextjs-saas#custom-blog",
  // },
  {
    Icon: TbBrandReact,
    id: "chrome-extension",
    title: "ChatGPT Chrome Extension - React",
    description: "Boilerplate for Chrome Extension with ChatGPT using React",
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
  {
    Icon: TbBrandReact,
    id: "react",
    title: "React SaaS + AI (Pre-Launch)",
    description:
      "React SaaS code which includes all the essential features that you need to launch fast. Following are the included things",
    features: [
      { text: "User Auth (Social Login, Magic Link)", hours: "+ Saving 5 hrs" },
      { text: "Database Integration", hours: "+ Saving 4 hrs" },
      { text: "Landing Page", hours: "+ Saving 8 hrs" },
      { text: "Email Integration", hours: "+ Saving 3 hrs" },
      { text: "Stripe Checkout + Webhook", hours: "+ Saving 6 hrs" },
      {
        text: "LemonSqueezy Checkout (Including Paypal)",
        hours: "+ Saving 3 hrs",
      },
      { text: "LemonSqueezy Webhook + Subscription", hours: "+ Saving 5 hrs" },
      { text: "Tailwind CSS", hours: "+ Saving 3 hrs" },
      { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
      { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
      { text: "Custom Blog Integration", hours: "+ Saving 10 hrs" },
      { text: "LangChain Integration", hours: "+ Saving 6 hrs" },
      { text: "Pinecone Integration", hours: "+ Saving 4 hrs" },
      { text: "OpenAI Integration", hours: "+ Saving 4 hrs" },
      { text: "PDF Chat", hours: "+ Saving 5 hrs" },
    ],
    techStack: "React + User Auth + Stripe + LemonSqueezy + AI + Tailwind CSS",
    oldPrice: "$199",
    newPrice: "$79",
    badgeText: "Pre-Launch Offer ($119 after launch)",
    paymentProvider: "LemonSqueezy",
    buyLink:
      "https://xpage.lemonsqueezy.com/checkout/buy/1499a2ac-aa3b-4765-9473-504a3ee65ebb",
    // demoPageLink: "/nextjs-boilerplate-for-saas",
    // guidePageLink: "/blog/nextjs-saas",
  },
];

export default features;
