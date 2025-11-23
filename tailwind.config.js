/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1f25', // Dark blue-gray background
        'card-bg': '#232931', // Slightly lighter for cards
        'accent-teal': '#4fd1c5', // Teal accent color
        'text-primary': '#ffffff',
        'text-secondary': '#a0aec0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif
      }
    },
  },
  plugins: [require('daisyui'),
    require('tailwindcss-debug-screens')],
  daisyui: {
    themes: ["dark"], // Use dark theme by default
  }
}

