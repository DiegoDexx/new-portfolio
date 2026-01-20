  /** @type {import('tailwindcss').Config} */
  export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,scss,css}"],
    theme: {
      screens: {
        'sm': '640px',      // Móviles grandes
        'md': '768px',      // Tablets
        'lg': '1024px',     // Portátiles pequeños (13")
        'laptop': '1280px', // Portátiles medianos (14-15")
        'xl': '1366px',     // Portátiles grandes (15-17")
        '2xl': '1536px',    // Desktop grande
        'fhd': '1920px',    // Full HD
      },
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
