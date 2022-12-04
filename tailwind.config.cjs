/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      darkBlue: "hsl(218, 23%, 16%)",
      darkGray: "hsl(217, 19%, 24%)",
      lightGray: "hsl(217, 19%, 38%)",
      neon: "hsl(150, 100%, 66%)",
      primary: "hsl(193, 38%, 86%)",
    },
    extend: {
      letterSpacing: {
        lg: "5px",
      },
    },
  },
  plugins: [],
};
