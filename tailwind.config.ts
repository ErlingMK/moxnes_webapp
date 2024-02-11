import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "soft-blue-gray": "#5D7290",
        "light-gray-secondary": "#F0F4F8",
        "muted-teal": "#88A0A8",
        "dark-gray": "#333333",
        "light-gray": "#FAFAFA",
        "main-blue": "#000080",
        "muted-blue": "#333366",
      },
      fontFamily: {
        cursive: ['"Brush Script MT"', "cursive"],
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
