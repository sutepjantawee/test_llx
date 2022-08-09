/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logoheader: "url('../public/Masonic_SquareCompassesG 1.png')",
        header: "url('../public/default-background.jpeg')",
        pattern: "url('../public/about-background.jpeg')",
        card: "url('../public/about-background.jpeg')",
      },
    },
    screens: {
      'fold': '374px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
    },
  },
  plugins: [],
};
