/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primaryGradient: "linear-gradient(180deg, #000000, #65272B)",
      },
      colors: {
        primary: "#98292B",
        secondary: "#979797",
      },
    },
  },
  plugins: [],
};
