/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "./index.html", // Include your HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JavaScript/React files
    "./components/**/*",
    "/htmlfiles/**/*",
    "./jsfiles/**/*.js"], // Include your custom JS files,
  theme: {
    extend: {
      colors:{
        customBlue:"#0D6EFD"
      },
      fontFamily:{
        inter:'"Inter", "serif"'
      }
    },
  },
  plugins: [],
}

