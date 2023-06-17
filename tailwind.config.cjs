/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html', './src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        "tealBG": "#E3EFEF",
        "verdigris": "#03abadff",
        "ecru": "#b9aa77ff",
        "black": "#000000ff",
        "sandy-brown": "#f2a85dff",
        "black-2": "#000000ff",
      }
    },
  },
  plugins: [],
}
