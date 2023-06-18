/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jade: "#05C46B",
      },
      button: {
        customButton: {
          display: "inline-block",
          lineHeight: "1.5",
          textAlign: "center",
          textDecoration: "none",
          verticalAlign: "middle",
          cursor: "pointer",
          "-webkit-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          userSelect: "none",
          backgroundColor: "transparent",
          borderColor: "transparent",
          padding: ".375rem .75rem",
          fontSize: ".875rem",
          borderRadius: ".375rem",
        },
        buttonPrimary: {
          color: "#FFFFFF",
          backgroundColor: "#23DD87",
          borderColor: "#23DD87",
          padding: "0.45rem 0.8rem",
          fontSize: "0.875rem",
        },
      },
    },
  },
  plugins: [],
};
