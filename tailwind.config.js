/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('../public/default-background.jpeg')",
        pattern: "url('../public/about-background.jpeg')",
        card: "url('../public/about-background.jpeg')",
      },
    },
  },
  plugins: [],
};
