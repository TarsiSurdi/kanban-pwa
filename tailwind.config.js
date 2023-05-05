import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssSafeArea from "tailwindcss-safe-area";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          50: "#B1ACC0",
          100: "#8C8A99",
          200: "#696773",
          300: "#3F3F45",
          400: "#2D2D33",
          500: "#212126",
        },
        primary: "#645FC6",
      },
      screens: {
        xs: "300px",
        sm: "375px",
      },
      animation: {
        dropdown: "dropdown 0.2s ease-in-out",
      },
      keyframes: {
        dropdown: {
          "0%": { opacity: "0%", transform: "scale(0.8) scaleY(0.8)" },
          "100%": { opacity: "100%", transform: "scale(1) scaleY(1)" },
        },
      },
    },
  },
  plugins: [tailwindcssSafeArea],
};
