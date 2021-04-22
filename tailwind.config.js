const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      primary: colors.blue["900"],
      secondary: colors.blue["800"],
    },
    outline: {
      input: ['1px solid white','1px']
    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
