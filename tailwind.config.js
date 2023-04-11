/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx, html}"],
  theme: {
    extend: {
      animation: {
        navAnimatorOpen: 'navbarOpen 300ms ease-in-out',
        navAnimatorClose: 'navbarClose 300ms ease-in-out'
      },
      keyframes: {
        navbarOpen: {
          '0%': { transform: "translateX( 10rem )"},
          '100%': { transform: "translateX( 0rem )"}
        },
        navbarClose: {
          '0%': { transform: "translateX( 0rem )"},
          '100%': { transform: "translateX( 10rem )"}
        }
      }
    },
  },
  plugins: [],
}

