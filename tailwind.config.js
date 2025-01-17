const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Including Flowbite content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),  // Flowbite plugin
    require('daisyui')  // DaisyUI plugin
  ],
}
