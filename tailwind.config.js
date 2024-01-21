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
                primary_hover: "#5753d0",
                primary_bg_color: "white",
                secondary_bg_color: " #f0efff",
                selected_bg_color: "#e0dfff",
                primary_text_color: "#27272c",
                secondary_text_color: "#b8b8b8",
                highlight_color: "#030064",
                border_color: "#e7e6f7",
                shadow_color: "rgba(0, 0, 0, 0.1)",
                hover_bg_color: "#e5e5fb",
                panel_bg_color: "#e7e7ee"
            }
        },
    },
    plugins: [],
}