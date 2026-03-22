import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "Arial Black", "sans-serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "ui-sans-serif", "system-ui"],
      },
      colors: {
        cinema: {
          black: "#0D0B09",
          red: "#E8003D",
          gold: "#C9964A",
          cream: "#F2E8D5",
          surface: "#161210",
          surface2: "#1D1915",
          muted: "#786E62",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
