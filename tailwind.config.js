import defaultTheme from "tailwindcss/defaultTheme";

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
      },
    },
  },
  plugins: [],
};
