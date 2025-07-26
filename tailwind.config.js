  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4a42d',
        secondary: '#963017',
      },
      screens: {
        'mobile': { 'max': '820px' },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}