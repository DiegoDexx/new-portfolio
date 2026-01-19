  /** @type {import('tailwindcss').Config} */
  export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,scss,css}"],
    theme: {
      extend: {
        colors: {
          white: "#FFFFFF",
          black: "#000000",
          brand: "#F6339A",
          dark: "#181827",
          light: "#F5F5F5",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
