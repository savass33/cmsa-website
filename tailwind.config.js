/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'menu-in': {
          '0%': { opacity: '0', transform: 'scale(.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'menu-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(.95)' },
        }
      },
      animation: {
        'menu-in': 'menu-in 0.2s ease-out',
        'menu-out': 'menu-out 0.2s ease-in',
      }
    },
  },
  plugins: [],
};
