/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'repeat':'repeat(2, minmax(0, 450px))'
      }
    },
  },
  plugins: [],
}

