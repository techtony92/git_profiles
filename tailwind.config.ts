/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts,js,jsx}"],
  darkMode: [`class`, `[data-mode="dark"]`],
  theme: {
    colors: {
      Obsidian: "rgb(var(--Obsidian) / 1)",
      Licorice: "rgb(var(--Licorice) / 1)",
      Charcoal: "rgb(var(--Charcoal) / 1)",
      Alien: "rgb(var(--Alien) / 1)",
      Neutral: "rgb(var(--Neutral) / 1)",
      Smokie: "rgb(var(--Smokie) / 1)",
      Deep: "rgb(var(--Deep) / 1)",
      Lavender: "rgb(var(--Lavender))",
      ColdSteel: "rgb(var(--ColdSteel) / 1)",
      Ivory: "rgb(var(--Ivory) / 1)",
      Marble: "rgb(var(--Marble) / 1)",
      Pearl: "rgb(var(--Pearl) / 1)",
      //Pearl:#459487;
    },
    extend: {},
  },
  plugins: [],
};
