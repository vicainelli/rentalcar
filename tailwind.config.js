module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'rental-blue-500': '#1879ca',
        'rental-yellow-500': '#ffb700',
        'rental-green-500': '#068323',
        'rental-green-600': '#0d6521',
      },
      animation: {
        spinner: 'spinner 1.5s linear infinite',
      },
      keyframes: {
        spinner: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
