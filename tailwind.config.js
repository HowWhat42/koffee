/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#111315',
                grey: '#1B1D1F',
                primary: '#6F757C',
                accent: '#F6C768',
                danger: '#ED735D',
                success: '#BEE3CC',
                light: '#FEF7EE',
            },
        },
    },
    plugins: [],
}

