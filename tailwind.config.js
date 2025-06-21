/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'gold-500': '#D4AF37',
          'dark-green': '#1A3C34',
          'black-anthracite': '#2F2F2F',
          'light-beige': '#F5E8C7',
        },
      },
    },
    plugins: [],
  }