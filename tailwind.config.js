/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfaf5',
          100: '#f9f1e8',
          200: '#f2e3d1',
          300: '#e9d0b6',
          400: '#dbb78f',
          500: '#d0a171',
          600: '#bc8656',
          700: '#9c6a47',
          800: '#7e573f',
          900: '#674937',
          950: '#372619',
        },
        pastel: {
          pink: '#f8d9d9',
          green: '#d8e2dc',
          blue: '#d6e2e9',
          yellow: '#f9efd7',
          lavender: '#e0d3eb',
        },
        dark: {
          900: '#2d2d2d',
          800: '#3a3a3a',
          700: '#525252',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};