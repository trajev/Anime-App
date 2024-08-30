/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        monteserrat: ['Montserrat', 'sans']
      },
      colors:{
        webGreen: "orange",
        webBlue: "#0C0B1F",
      }

    },
  },
  plugins: [],
}