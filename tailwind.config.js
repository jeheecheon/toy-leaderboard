/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quantico: ["Quantico", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        highlight: "rgb(176, 226, 72)",
        "dark-gray": "#777777",
      },
    },
  },
  plugins: [],
};
