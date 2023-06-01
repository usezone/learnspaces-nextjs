/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: "#384DF6",
          secondary: "#E0E0E0",
          accent: "#1FB2A5",
          neutral: "#2A2A3A",
          "base-100": "#2A303C",
          info: "#1574FB",
          success: "#33CC33",
          warning: "#FAD200",
          error: "#F53131",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
