/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffff",
        primary: "#1c64ec",
        current:'#596e96',
        green:'#0c9a56',
        "base-25": "#2a2e38",
        "base-50": "#5c5d5e",
        "base-75": "#1a1b2b",
        "base-100": "#1e1f2e",
        "base-200": "#0a0a0f",
        "base-300": "#0a0a0f",
        "base-content": "#64748B",
        mainbg: "#202124",
        mainfg: "#35363a"
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "1rem",
        lg: "16px",
        xl: "18px",
        "2xl": "20px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
    },
  },
  plugins: [],
}

