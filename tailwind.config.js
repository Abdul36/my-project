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
      },
      fontSize: {
        'custom-large': '85.73px',
      },
      lineHeight: {
        'custom-large': '132.16px',
      },
      letterSpacing: {
        'custom': '-0.08em',
      },
    },
  },
  plugins: [],
}
