export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edfdfd',
          100: '#d8f7f7',
          200: '#b2f0f2',
          300: '#7de3e7',
          400: '#41d0d9',
          500: '#16a7b8',
          600: '#0f8395',
          700: '#116a78',
          800: '#125465',
          900: '#123e4d'
        }
      },
      boxShadow: {
        soft: '0 12px 35px rgba(15, 131, 149, 0.14)',
        glow: '0 0 0 1px rgba(34, 197, 94, 0.18), 0 20px 80px rgba(34, 197, 94, 0.16)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
