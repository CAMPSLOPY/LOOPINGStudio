module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "6/3": "70vh",
        90: "80vh",
        30: "30vh",
        40: "40vh",
        60: "60vh",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        concert: ["Concert One", "cursive"],
      },
      width: {
        better: "23%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
