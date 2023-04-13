/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx, html}"],
  theme: {
    extend: {
      animation: {
        navOpen: 'navbarOpen 200ms ease',
        filterToggle: 'filterOpen 300ms ease',
      },
      keyframes: {
        navbarOpen: {
          '0%': { transform: "translateX( 10rem )"},
          '100%': { transform: "translateX( 0rem )"}
        },
        filterOpen: {
          '0%': { transform: "translateY( -6rem )"},
          '100%': { transform: "translateY( 0rem )"},
        }
      }
    },
  },
  plugins: [],
}

