/** @type {import('tailwindcss').Config} */

const { blue, zinc } = require("tailwindcss/colors");

const branding_1 = "#88BABF"
const branding_2 = "#025373"
const branding_3 = '#024873'
const branding_4 = "#26150F"

module.exports = {
  content: [
    "./src/pages/**/*.jsx",
    "./src/components/**/*.jsx",
    "./src/containers/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: branding_1,
        "primary-hover": "rgba(136, 186, 191, 0.75)",
        // "in-primary": zinc[200],
        "in-primary": "#222222",
        secondary: branding_2,
        "secondary-hover": branding_3,
        "in-secondary": "#EAEAEA",
        // "in-secondary": zinc[100],
        "primary-text": zinc[500],
        "secondary-text": zinc[800],
        "text-branding": branding_4,
        surface: zinc[250],
        "background-color": zinc[100],
      },
    },
  },
  plugins: [],
};
