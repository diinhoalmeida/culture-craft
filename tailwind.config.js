/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'text-color': 'rgb(248,250,252, 10)',
      },
      boxShadow: {
        'custom-shadow': '0 1.2px 1.2px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}

