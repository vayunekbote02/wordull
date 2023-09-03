/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Helvetica, Arial, sans-serif",
      },
      fontSize: {
        wordle: "45px",
        letter: "30px",
        key: "20px",
      },
      backgroundColor: {
        correct: "#528d4e",
        almost: "#b49f39",
        error: "#3a393c",
        disabled: "#3B3A3D",
      },
    },
  },
  plugins: [],
};
