/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: { 
          "lato": ['Lato', 'sans-serif'] 
      } ,
      textColor:{
        textColorDark:"var(--color-dark)",
        textColorPrimary:"var(--primary-color)",
        textColorWhite:"var(--color-white)",
        textColorGray:"var(--color-gray)"
      },
      backgroundColor:{
        bgPrimary:"var(--primary-color)",
        bgWhite:"var(--color-white)",
        bgDark:"var(--color-dark)"
      },
      boxShadow: {
        defaultShadow: '0px 0px 23px -3px rgba(75,99,156,0.46)',
      },
  },
  },
  plugins: [],
}