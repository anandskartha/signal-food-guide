/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: (theme) => ({
        "m-home": "url('./assets/HomePageImg.png')"
      }),
      colors: {
        "g-20": "#FAF0F1",
        "g-50": "#EDE6E6",
        "g-100": "#D6C5C5",
        "g-500": "#4A0101",
        "p-100": "#F7DFDF",
        "p-300": "#8EC298",
        "p-500": "#FC635D",
        "s-400": "#FACD64",
        "s-500": "#FABA28"
      }
    },
  },
  screens: {
    xxs: "480px",
    xs: "768px",
    md: "1060px"
  },
  plugins: [],
}
