/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6965db",
                "primary-hover": "#5753d0",
                "primary-bg-color": "white",
                "secondary-bg-color": "#f0efff",
                "selected-bg-color": "#e0dfff",
                "primary-text-color": "#27272c",
                "secondary-text-color": "#b8b8b8",
                highlight: "#030064",
                "border-color": "#e7e6f7",
                "shadow-color": "rgba(0, 0, 0, 0.1)",
                "hover-bg-color": "#e5e5fb",
                "panel-bg-color": "#e7e7ee",
                "panel-bg-color-light": "#f0f0f5",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"]
            }
        },
    },
    plugins: [],
}