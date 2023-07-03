/** @type {import('tailwindcss').Config} */

 module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: ["winter"],
  },
}
