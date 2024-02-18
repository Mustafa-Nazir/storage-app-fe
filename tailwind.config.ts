import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-dark":"#4655f1",
        "main-light":"#6473f9",
        "main":"#f8f9fd",
        "green-dark":"#45c8d4",
        "green-light":"#c8feff",
        "purple-dark":"#bb6be6",
        "purple-light":"#f8e4ff",
        "red-dark":"#f86950",
        "red-light":"#ffe3e4",
        "yellow-dark":"#f7e381",
        "yellow-light":"#fff9e7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
