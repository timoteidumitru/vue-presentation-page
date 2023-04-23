/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xsm: ["10px", "11px"],
      },
      colors: {
        Blue: "#148FCF",
        Graphite: "#25303B",
        LightGraphite: "#768E9C",
        Grass: "#AFD955",
        LightGrey: "#E2E2E2",
        Orange: "#E9642E",
        Pink: "#D44E8A",
        Sky: "#63C1FF",
        TealLow: "RGBA(66, 87, 101, 0.05)",
        TealHigh: "RGBA(66, 87, 101, 0.2)",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
