/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            PlusJakartaSans: ['"Plus Jakarta Sans"'],
            MadeOuterSans: ['"Made Outer Sans"'], // Ensure fonts with spaces have " " surrounding it.
        },
        extend: {
          colors: {
            'primary': '#0B83D9',
            'danger': '#D0021B',
            'black': '#191919',
            'primarywhite' : '#FAFAFA',
            'background': '22436C',
            'darkgrey': '#666E80',
            'grey': '#98A1B3',
            'lightgrey': '#E1E2E6',
            'toscagreen': '#9BD4D7',
            'magic-mint': '#B9F2D8',
            'azureish-white': '#DEF4EA',
            'go-green': '#0BB664',
            'candy-pink': '#E36C87',
            'chart': '#0B83D9',
          },
        },
        screens: {
            sm: "576px",
            md: "960px",
            lg: "1440px",
        },
        boxShadow: {
            focus: "0 0 15px 0",
        },
        // ini dari google, nanti sesuain aja sama yang di figma
        // fontSize: {
        //     sm: "0.8rem",
        //     base: "1rem",
        //     xl: "1.25rem",
        //     "2xl": "1.563rem",
        //     "3xl": "1.953rem",
        //     "4xl": "2.441rem",
        //     "5xl": "3.052rem",
        // },
    },
    plugins: [require("flowbite/plugin")],
};
