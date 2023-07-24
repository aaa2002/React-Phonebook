//@type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#148f26',
        secondary: '#10701e',
        dark: '#0d5918',
      },
    },
  },
  plugins: [],
}