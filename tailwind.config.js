const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        ured: "hsl(0, 78%, 62%)",
        ucyan: "hsl(180, 62%, 55%)",
        uorange: "hsl(34, 97%, 64%)",
        ublue: "hsl(212, 86%, 64%)",
        db: "hsl(234, 12%, 34%)",
        gb: "hsl(229, 6%, 66%)",
        lg: "hsl(0, 0%, 98%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
