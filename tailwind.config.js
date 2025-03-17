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
        slide: 'slideIn 1s ease-out forwards',
        marquee: 'marquee 20s linear infinite',
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
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};