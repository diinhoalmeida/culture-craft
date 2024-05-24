import plugin from 'tailwindcss'

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
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      screens: {
        'xs': "540px",
        'sm': '680px',
        'md': '768px',
        'md-2': '860px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

