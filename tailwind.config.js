export default {
   content: [
    './templates/**/*.twig',
    './src/**/*.js',
    './src/**/*.css'
   ],
   theme: {
     extend: {},
     colors: {
         primary: '#734B5E', // Purple
         secondary: '#F5D3C8', // Cream
         gray: {
            lighter: '#BCBDC0',
            DEFAULT: '#8A8D91',
            darker: '#565857'
         }
     }
   },
   plugins: [],
 }