module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "false",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      fontFamily: {
        ppmori: ['ppmori', 'sans-serif'],
        georgia: ['Georgia', 'sans-serif']
      }
    },
  },
  plugins: [],
};
