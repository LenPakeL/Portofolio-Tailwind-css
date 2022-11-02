/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '18px',
    },
    extend: {
      colors: {
        primary:'#80411e',
        secondary:'#ad6d2f',
      }
    },
  },
  plugins: [],
}
