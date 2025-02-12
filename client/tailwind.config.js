/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
   theme: {
     extend: {
       colors: {
         cyan: {
            100: "rgba(224, 242, 254, 0.7)",
          },
         'cyan-100/70': 'rgba(224, 242, 254, 0.7)',
         'gray-500/20': 'rgba(107, 114, 128, 0.2)',
        'gray-500/80': 'rgba(107, 114, 128, 0.8)',
        'gray-500/30': 'rgba(107, 114, 128, 0.3)',
        'gray-500/10': 'rgba(107, 114, 128, 0.1)',
        'gray-800/80': 'rgba(31, 41, 55, 0.8)',
        'white/30': 'rgba(255, 255, 255, 0.3)',
       },
       fontSize : {
         'course-deatails-heading-small' : ['26px', '36px'],
         'course-deatails-heading-large' : ['36px', '44px'],
         'home-heading-small' : ['28px', '34px'],
         'home-heading-large' : ['48px', '56px'],
         'default' : ['15px', '21px'],
       },
       gridTemplateColumns:{
         'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
       },
       spacing: {
         'section-height' : '900px',
       },
       maxWidth: {
         'course-card' : '424px'
       },
       boxShadow: {
         'custum-card' : '0px 4px 15px 2px rgba(0, 0, 0. 0.1)'
       },
     },
   },
   plugins: [],
 };
 