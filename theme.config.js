import { useRouter } from "next/router";

export default {
  logo: <span>BoilerCode.co Documentation</span>,
  project: {
    link: "https://boilercode.co",
  },
  feedback: false,
  editLink: false,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Boilercode.co",
      };
    }
  },
};
