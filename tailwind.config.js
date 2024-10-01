export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
    },
  },
  plugins: [],
};
