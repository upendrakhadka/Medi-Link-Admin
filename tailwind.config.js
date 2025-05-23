/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      colors: {
        'primary': '#008080',
        'hoverGreen': '#7acb53',
        'lightgreen': '#f0ffe9',
      },
    },
  },
  plugins: [],
}
