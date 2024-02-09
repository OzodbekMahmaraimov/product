/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        bodyBg: '#F3EAE3',
        textColor: '#858591',
        tugma: '#3D8168'
      },
      fontSize: {
        big: '2.3rem'
      }
    },
  },
  plugins: [],
}