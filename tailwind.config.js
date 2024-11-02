/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#53FC18",
        secondary: "#D9D9D9",
        accent: "#161616",
      },
    },
  },
  plugins: [],
};
