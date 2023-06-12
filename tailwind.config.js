/** @type {import('tailwindcss').Config} */
module.exports = {
  // eslint-disable-next-line no-dupe-keys
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "900px",
      sm: "480px",
      lg: "1250px",
      xl: "1440px",
    },
    colors: {
      midnight: "#1E2C54",
      gum: "#99B2FF",
      gray: "#F3F4F6",
      "light-midnight": "#26396F",
    },
    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: [".75rem", { lineHeight: "1", letterSpacing: ".025rem" }],
      base: ["1.2rem", { lineHeight: "", letterSpacing: "rem" }],
      lg: "1.5rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "100px",
      "6xl": ["290px", {lineHeight: "210px", letterSpacing: "-20.1px", fontWeight: "700" }],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
