/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
      fontFamily: {
        pinyon: ['"Pinyon Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
