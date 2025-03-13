/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bebas: ['Bebas Neue', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        slide: 'slideIn 1s ease-out forwards', // Add custom slide animation
      },
      keyframes: {
        slideIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
