import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EE2720",
          dark: "#D41F18",
        },
        secondary: {
          DEFAULT: "#F98C0D",
          dark: "#E07B0C",
        },
        accent: {
          DEFAULT: "#FFC702",
          dark: "#E6B302",
        },
      },
    },
  },
  plugins: [],
};
export default config;
