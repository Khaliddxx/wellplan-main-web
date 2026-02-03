/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#214CE5',
        'primary-dark': '#1a3ba3',
        'primary-light': '#5170f2',
      },
    },
  },
  plugins: [],
}
