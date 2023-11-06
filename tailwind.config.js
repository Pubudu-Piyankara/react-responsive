/** @type {import('tailwindcss').Config} */
module.exports = {
  //declare file type/ extension type which I am going to style
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    //define breakpoints for different devices
    screens:{
      sm: '640px', //min-width 640

      md: '768px', //min-width 768

      lg: '1024px', //min-width 1024

      xl: '1280px', //min-width 1280

      '2*1': '1536px',
    },
  },
  plugins: [],
}

