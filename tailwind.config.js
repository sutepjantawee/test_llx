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
  },
  plugins: [],
};
