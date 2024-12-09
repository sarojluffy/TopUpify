/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#055C9D",
        secondary: "#f5fefd",
      },
    },
  },
  plugins: [],
};
