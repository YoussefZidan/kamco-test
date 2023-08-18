/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#002F6C",
        "primary-light": "#8097B5",
        "primary-lighter": "#E8EEF5",
        "primary-dark": "#002554",
        "verified": "#C3E5E3",
      },
      screens: {
        xs: "375px",
        "3xl": "1740px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
