/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "main.js"],
  theme: {
    extend: {},
  },
  mode: "jit",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "dracula"],
  },
};
