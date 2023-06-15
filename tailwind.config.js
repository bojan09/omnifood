/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rufina: ["Rufina", "serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      colors: {
        primaryColor: "#e67e22",
        secondaryColor: "#eb984e",
        primaryBackground: "#fdf2e9",
        secondaryBackground: "#fae5d3",
        darkColor: "#45260a",
        shadeColor: "#cf711f",
        greenDarkColor: "#51cf66",
        greenLightColor: "#94d82d",
        colorText: "#333333",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
