/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#114AB1",
        // secondary: "#ACB2B2",

        // terinery: "white",
        primary: "#0B0C10",
        secondary: "#1F2833",
        terinary: "#66FCF1",
        quad: "#C5C6C7",
        pent: "#45A29E",
      },
      backgroundImage: {
        // "radial-gradient": "conic-gradient(from 45deg, #0B0C10, #1F2833)",
        "radial-gradient": "radial-gradient(circle, #0B0C10, #1F2833)",

        // linear-gradient(to right, red, yellow);
        // radial-gradient(circle, red, yellow, blue);
      },
    },
  },
  plugins: [],
};
