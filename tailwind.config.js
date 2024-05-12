/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'primary':['"Work Sans"', 'sans-serif'],
      'secondary':['"Playfair Display"', 'serif;']
    },
    extend: {
      colors:{
        'primary' : '#92C800',
        'secondary' : '#59C6D2',
        'heading' : '#131313',
        'text' : '#3E4549',
        'paragraph' : '#13131890',
        'light' : '#13131870',
        'blight' : '#13131810',
        
      }
    },
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1270px',
    },
  },
  plugins: [
    require('daisyui')
  ],
}