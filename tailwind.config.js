/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
          'PlusJakartaSans': ['"Plus Jakarta Sans"'],
          'MadeOuterSans': ['"Made Outer Sans"'] // Ensure fonts with spaces have " " surrounding it.
        },
        extend: {
          colors: {
            'primary': '#0B83D9',
            'danger': '#D0021B'
          },
        },
        screens: {
          'sm': '576px',
          'md': '960px',
          'lg': '1440px',
        },
    },
    plugins: [],
};