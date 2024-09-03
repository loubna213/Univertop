/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"], // Custom font as primary sans-serif
        // Add more custom fonts if needed
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, #F6FAFF 0%, rgba(246, 250, 255, 0.9) 100%)',
      },
    },
  },
  plugins: [],
}

