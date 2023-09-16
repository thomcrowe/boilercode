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
    title: "NextJs SaaS",
    description:
      "NextJs SaaS code which includes all the essential features that you need to launch fast. Following are the included things",
    features: [
      { text: "User Auth (Social Login, Magic Link)", hours: "+ Saving 5 hrs" },
      { text: "Database Integration", hours: "+ Saving 4 hrs" },
      { text: "Landing Page", hours: "+ Saving 8 hrs" },
      { text: "Email Integration", hours: "+ Saving 3 hrs" },
      { text: "Stripe Checkout", hours: "+ Saving 3 hrs" },
      { text: "Strip Webhook", hours: "+ Saving 3 hrs" },
      { text: "LemonSqueezy Checkout", hours: "+ Saving 3 hrs" },
      { text: "LemonSqueezy Webhook", hours: "+ Saving 3 hrs" },
      { text: "LemonSqueezy Subscription", hours: "+ Saving 4 hrs" },
      { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
      { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
      { text: "Custom Blog Integration", hours: "+ Saving 10 hrs" },
    ],
    oldPrice: "$199",
    newPrice: "$99",
    badgeText: "9 seats remaining",
    paymentProvider: "LemonSqueezy",
    buyLink:
      "https://xpage.lemonsqueezy.com/checkout/buy/1869026f-194e-4805-89b3-ded98fa974d6?embed=1",
    demoPageLink: "/nextjs-boilerplate-for-saas",
    guidePageLink: "/blog/nextjs-saas",
  },
  {
    Icon: TbBrandNextjs,
    id: "nextjs-ai",
    title: "NextJs AI",
    description:
      "NextJs SaaS code which includes all the essential features that you need to launch fast. Following are the included things",
    features: [
      { text: "User Auth (Social Login, Magic Link)", hours: "+ Saving 5 hrs" },
      { text: "LangChain Integration", hours: "+ Saving 6 hrs" },
      { text: "Pinecone Integration", hours: "+ Saving 4 hrs" },
      { text: "OpenAI Integration", hours: "+ Saving 4 hrs" },
      { text: "PDF Chat", hours: "+ Saving 5 hrs" },
      { text: "Database Integration", hours: "+ Saving 4 hrs" },
      { text: "Landing Page", hours: "+ Saving 8 hrs" },
      { text: "Email Integration", hours: "+ Saving 3 hrs" },
      { text: "Stripe Checkout", hours: "+ Saving 3 hrs" },
      { text: "Strip Webhook", hours: "+ Saving 3 hrs" },
      { text: "LemonSqueezy Checkout", hours: "+ Saving 3 hrs" },
      { text: "LemonSqueezy Webhook", hours: "+ Saving 3 hrs" },
      { text: "LemonSqueezy Subscription", hours: "+ Saving 4 hrs" },
      { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
      { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
      { text: "Custom Blog Integration", hours: "+ Saving 10 hrs" },
    ],
    oldPrice: "$199",
    newPrice: "$99",
    badgeText: "15 seats remaining",
    paymentProvider: "LemonSqueezy",
    buyLink:
      "https://xpage.lemonsqueezy.com/checkout/buy/9731e04b-68cc-4ec7-9cda-6043e649a5f3?embed=1",
    demoPageLink: "/nextjs-ai-boilerplate-for-saas",
    guidePageLink: "/blog/nextjs-ai",
  },
  {
    Icon: TbBrandNextjs,
    id: "nextjs-free",
    title: "NextJs SaaS - Free",
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
      { text: "Stripe Checkout", hours: "+ Saving 3 hrs", crossText: true },
      { text: "Strip Webhook", hours: "+ Saving 3 hrs", crossText: true },
      { text: "LemonSqueezy Checkout", hours: "+ Saving 3 hrs" },
      {
        text: "LemonSqueezy Webhook",
        hours: "+ Saving 3 hrs",
        crossText: true,
      },
      {
        text: "LemonSqueezy Subscription",
        hours: "+ Saving 4 hrs",
        crossText: true,
      },
      { text: "Customer Support (Crisp)", hours: "+ Saving 3 hrs" },
      { text: "Custom SEO Configurations", hours: "+ Saving 4 hrs" },
      {
        text: "Custom Blog Integration",
        hours: "+ Saving 10 hrs",
        crossText: true,
      },
    ],
    oldPrice: "$199",
    newPrice: "$0",
    badgeText: "Pay what you want",
    paymentProvider: "LemonSqueezy",
    buyLink:
      "https://xpage.lemonsqueezy.com/checkout/buy/376cc037-396f-4a5b-9fea-05fc2c146c77?embed=1",
    demoPageLink: "/nextjs-boilerplate-for-saas-free",
    guidePageLink: "/blog/nextjs-saas-free-boilerplate",
  },
  {
    Icon: TbBrandReact,
    title: "React",
    description:
      "React SaaS code which includes all the essential features that you need to launch fast. Following are the included things",
    features: [
      { text: "User Auth (Social Login, Magic Link)", hours: "" },
      { text: "Database (MongoDb)", hours: "" },
      { text: "Landing Page", hours: "" },
      { text: "Email Integration", hours: "" },
      { text: "Customer Support (Crisp)", hours: "" },
      { text: "LemonSqueezy Integration", hours: "" },
      { text: "Stripe Integration", hours: "" },
      { text: "Custom SEO Configurations", hours: "" },
    ],
    paymentProvider: "LemonSqueezy",
    buyLink:
      "https://xpage.lemonsqueezy.com/checkout/buy/cc173c6e-d80a-4a50-a107-0afd31bddcc4?embed=1",
  },
  {
    Icon: TbBrandReactNative,
    title: "React Native",
    description:
      "React Native Mobile App Boilerplate code including the following things to help you launch your mobile app faster than ever.",
    features: [
      { text: "Firebase Auth (Social Login, Magic Link)", hours: "" },
      { text: "Database (MongoDb)", hours: "" },
      { text: "Email Integration", hours: "" },
      { text: "RevenueCat Integration", hours: "" },
    ],
    paymentProvider: "LemonSqueezy",
    buyLink:
      "https://xpage.lemonsqueezy.com/checkout/buy/cc173c6e-d80a-4a50-a107-0afd31bddcc4?embed=1",
  },
  {
    Icon: TbBrandChrome,
    title: "Chrome Extension",
    description:
      "Chrome Extension Boilerplate code which includes Payment Integration, Also ability to add your custom UI to any webpage.",
    features: [
      { text: "Chat Window UI", hours: "" },
      { text: "OpenAI Integration", hours: "" },
      { text: "LemonSqueezy Integration", hours: "" },
      { text: "Using React", hours: "" },
    ],
    paymentProvider: "LemonSqueezy",
    buyLink:
      "https://xpage.lemonsqueezy.com/checkout/buy/cc173c6e-d80a-4a50-a107-0afd31bddcc4?embed=1",
  },
];

export default features;
