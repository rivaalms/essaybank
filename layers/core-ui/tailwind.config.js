import PrimeUI from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
   content: [],
   theme: {
      fontSize: {
         'xs': '0.64rem',
         'sm': '0.8rem',
         'base': '1rem',
         'lg': '1.25rem',
         'xl': '1.56rem',
         '2xl': '1.95rem',
         '3xl': '2.44rem',
         '4xl': '3.05rem',
         '5xl': '3.81rem',
         '6xl': '4.77rem',
         '7xl': '5.96rem',
      },
      extend: {},
   },
   plugins: [PrimeUI],
}