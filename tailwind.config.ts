import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fbfaf7",
        mist: "#eef5fb",
        ink: "#18202a",
        ocean: {
          50: "#eff8ff",
          100: "#dff0ff",
          200: "#b9e1ff",
          500: "#3b8fc8",
          700: "#246b9d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 80px -40px rgb(35 84 124 / 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
