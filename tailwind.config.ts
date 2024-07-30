import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "320px",
      tablet: "720px",
      laptop: "920px",
      desktop: "1040px",
    },
    extend: {
      colors: {
        "violet-normal": "hsl(var(--color-violet-normal))",
        "violet-light": "hsl(var(--color-violet-light))",
        "blue-dark": "hsl(var(--color-blue-dark))",
        midnight: "hsl(var(--color-midnight))",
        "grey-normal": "hsl(var(--color-grey-normal))",
        "grey-light": "hsl(var(--color-grey-light))",
        "grey-dark": "hsl(var(--color-grey-dark))",
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
