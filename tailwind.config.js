/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },  
      colors: {
        'primary': '#EFEFEF',
        'orange-primary': '#EE6C4D',
        'white-primary': '#F8F9FA',
        'blue-primary': '#3D5A80',
        'gray-icon': '#6C757D',
        'green-primary': '#8AC926',
        'yellow-primary': '#FAA307',
        'red-primary': '#EF233C',
        'blue-secondary': '#006D77',
        'purple-primary': '#5E548E',
      },
    },
  },
  plugins: [],
}
