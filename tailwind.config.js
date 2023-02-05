/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './overview/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-down': {
          '0%': { transform: 'translateY(-100%)', transform: 'scaleY(0)' },
          '100%': { transform: 'translateY(0)', transform: 'scaleY(1)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)', transform: 'scaleY(1)' },
          '100%': { transform: 'translateY(-100%)', transform: 'scaleY(0)' },
        },
        'rotate-90': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        'rotate-from-90': {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'rotate-180': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'rotate-from-180': {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', filter: 'blur(5px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
      animation: {
        'to-bottom': 'scroll-down 0.3s ease',
        'to-top': 'scroll-up 0.3s ease',
        'rotate-90': 'rotate-90 0.3s ease',
        'rotate-from-90': 'rotate-from-90 0.3s ease',
        'rotate-180': 'rotate-180 0.3s ease',
        'rotate-from-180': 'rotate-from-180 0.3s ease',
        'fade-in': 'fade-in 0.3s ease',
        'fade-in-05': 'fade-in 0.5s ease',
        'fade-in-1': 'fade-in 1s ease',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
};
