/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs,js}"],
  theme: {
    fontFamily: {
      kufi: ["kufi", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'bg-m': "url('/images/bg-m.jpg')"
      },
      colors: {
        'turqu':"#40E0D0"
      }
    },
  },
  plugins: [],
}
