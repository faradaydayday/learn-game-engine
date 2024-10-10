/** @type {import('tailwindcss').Config}
 *
 */
module.exports = {
  content: ["./public/**/*.{html,js}"],

  darkMode: "class",
  theme: {
    extend: {
      scale: {
        200: "1.9",
      },
      colors: {
        primary: "#8E35F0",
        secondary: "#6366F1",
        background: "#0B0A15",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark","sunset","night"],
  },
};
