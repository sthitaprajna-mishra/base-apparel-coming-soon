/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    letterSpacing: {
      base: "0.4em",
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
        lg1: "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        lg2: "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
    },
  },
  plugins: [],
};
