/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: "#00C2FF",
        secondary: "#DD0BFF"
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
          center: true
        }
      },
    },
  },
  plugins: [],
}