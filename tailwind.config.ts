import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '540px',
        'tablet': '720px',
        'laptop': '920px',
        'desktop': '1040px'
      },
      colors: {
        "base-violet": "hsl(var(--base-violet))",
        "base-violet2": "hsl(var(--base-violet2))",
        "base-violet-light": "hsl(var(--base-violet-light))",
        "base-violet2-light": "hsl(var(--base-violet2-light))",
        "base-dark": "hsl(var(--base-dark))",
        "base-midnight": "hsl(var(--base-midnight))",
        accent: "hsl(var(--accent))",
        gray: "hsl(var(--gray))",
        "dark-gray": "hsl(var(--dark-gray))",
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
