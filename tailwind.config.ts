import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      accent: "#e8be02",
      secondaryColor: "#4f4d53",
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1124px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
