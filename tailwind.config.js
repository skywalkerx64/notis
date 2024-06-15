/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  darkMode: '',
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require('preline/plugin')]
}
