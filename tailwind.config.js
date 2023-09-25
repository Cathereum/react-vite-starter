/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainAppColor: "#818cf8",
        secondAppColor: "#38bdf8",
      },
    },
  },
  plugins: [],
};
