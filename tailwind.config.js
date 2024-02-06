/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}", 
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Interbold: ["Interbold"],
        InterExtrabold: ["InterExtrabold"]
      },
      colors: {
        'custom-orange': 'hsl(35, 77%, 62%)',
        'custom-red': 'hsl(5, 85%, 63%)',
        'custom-grayishblue': 'hsl(233, 8%, 79%)',
        'custom-darkgrayishblue': 'hsl(236, 13%, 42%)',
        'custom-darkblue': 'hsl(240, 100%, 5%)',
        'custom-offwhite': 'hsl(36, 100%, 99%)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
   ],
}