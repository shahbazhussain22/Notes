import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        thinkboard: {
          primary: "#00ff9d",
          "primary-content": "#000000",
          secondary: "#00ff9040",
          "base-100": "#0a0a0a",
          "base-200": "#000000",
          "base-300": "#111111",
          "base-content": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      "dark",
      "forest",
    ],
  },
};
