// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chillax: ['Chillax', 'sans-serif'],
        inter:['Inter', 'sans-serif'],
        'clash-display': ['"Clash Display"', 'sans-serif'],

      },
      screens: {
        'sm-890': '890px',
      },
      fontSize: {
        'custom-large': '38px',
      },
      lineHeight: {
        // 'custom-large': '132.16px',
      },
      letterSpacing: {
        'custom': '-0.08em',
      },
    },
  },
  plugins: [],
}
