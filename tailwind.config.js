/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f1147",
        secondary: "#f2f2f2",
        accent: "#F13024",
        third: "rgba(50, 64, 255, 0.9831582291119573)",
      },
    },
  },
  plugins: [],
};
