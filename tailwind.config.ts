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
        "secondary-blue": "#446591",
        "light-gray-secondary": "#94b5e0",
        "muted-teal": "#88A0A8",
        "dark-gray": "#333333",
        "light-gray": "#FAFAFA",
        "main-blue": "#3f6699",
        "muted-blue": "#7b97bd",
      },
      fontSize: {
        base: "1.25rem",
        md: "1.5rem",
        lg: "1.75rem",
        xl: "2rem",
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
