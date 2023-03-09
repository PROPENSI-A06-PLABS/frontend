/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
          colors: {
            'primary': '#0B83D9',
            'danger': '#D0021B'
          },
        },
    },
    plugins: [],
};