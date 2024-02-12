import type { Config } from "tailwindcss";

// const withMT = require("@material-tailwind/react/utils/withMT");
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NTR: ["NTR", "sans-serif"],
      },
    },
  },
  plugins: [],
});

export default config;
