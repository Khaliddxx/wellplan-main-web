/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Background colors with opacity for nav icons
    'bg-blue-500/10', 'bg-purple-500/10', 'bg-emerald-500/10', 'bg-pink-500/10',
    'bg-orange-500/10', 'bg-red-500/10', 'bg-cyan-500/10', 'bg-green-500/10',
    // Text colors for icons
    'text-blue-400', 'text-purple-400', 'text-emerald-400', 'text-pink-400',
    'text-orange-400', 'text-red-400', 'text-cyan-400', 'text-green-400',
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
