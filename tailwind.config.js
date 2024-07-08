/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
      },
      colors: {
        Softred: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        Darkdesaturated: "hsl(167, 40%, 24%)",
        Darkblue: "hsl(198, 62%, 26%)",
        Darkmoderate: "hsl(168, 34%, 41%)",
        Verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        Verydarkgrayishblue: "hsl(213, 9%, 39%)",
        Darkgrayishblue: "hsl(232, 10%, 55%)",
        Grayishblue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Barlow", "Fraunces"],
      },
    },
  },
  plugins: [],
};
