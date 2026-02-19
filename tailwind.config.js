/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E63946',
        secondary: '#F4A261',
        accent: '#2A9D8F',
        dark: '#1D1D1D',
      },
    },
  },
  plugins: [],
}