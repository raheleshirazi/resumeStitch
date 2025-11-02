/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#6700EB',
        accent: '#FBC400',
        light: '#FFFFFF',
        gradientStart: '#8700C6',
        gradientEnd: '#5F00D9'
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif']
      }
    },
  },
  plugins: [],
}