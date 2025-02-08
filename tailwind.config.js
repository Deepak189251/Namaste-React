/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'sm': '520px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px', // Default breakpoints
        'custom': '1600px', // Custom breakpoint
      },
      boxShadow:{
        'dm': '6px 6px 8px 4px rgb(0 0 0 / 0.1), 4px 4px 6px 4px rgb(0 0 0 / 0.1);'
      }
    },
  },
  plugins: [],
}

