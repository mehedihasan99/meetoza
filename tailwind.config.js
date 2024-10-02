/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        lwsGreen: '#00D991',
        deepDark: '#ADD8E6',
        mediumDark: '#B0C4DE',
        lighterDark: '#87A2FF',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
