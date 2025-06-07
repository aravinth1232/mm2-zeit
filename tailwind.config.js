/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        300: '300px',
      },
      colors:{
        'siteblack': "#121212",
        'sitewhite' : "#FCFCFC",
        'sitegrey' : "#999999",
        'sitegrey2' : "#f2f2f2",
        'primary' :"#464646",
        'secondary': "hsl(345, 100%, 37%)",
        'tertiary': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
    },
      },

      fontFamily:{
        primary : ['Inter','sans-serif'],
        // primary : ['Open Sans','sans-serif']
      },

    },
  },
  plugins: [],
}

