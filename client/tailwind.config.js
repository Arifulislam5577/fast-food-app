module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCC00",
        secondary: "#8E4400",
        dark: "#1c1c1c",
        redx: "rgb(255, 0, 0)",
      },
    },
    fontFamily: {
      Alfa: ["Alfa Slab One", "cursive"],
      Sans: ["Open Sans Condensed", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
