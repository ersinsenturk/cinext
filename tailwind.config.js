/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      sans: "var(--font-ptsans)",
      serif: "var(--font-playfair)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      color1: "var(--color-1)",
      color2: "var(--color-2)",
      color3: "var(--color-3)",
      color4: "var(--color-4)",
      color5: "var(--color-5)",
    },

    extend: {
      borderColor: {
        DEFAULT: "var(--color-2)",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(100px,1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
