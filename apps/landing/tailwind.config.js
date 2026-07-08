/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#f0f9fa',
          100: '#e0f2f7',
          200: '#b3dcea',
          300: '#80c5dc',
          400: '#4daecf',
          500: '#00a3c4',
          600: '#008fb0',
          700: '#00708f',
          800: '#004f66',
          900: '#003947',
        },
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
