import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: '#1c7ed6',
          50: '#e9f5ff',
          100: '#d0eaff',
          200: '#a3d2ff',
          300: '#74b9ff',
          400: '#4d9df1',
          500: '#1c7ed6',
          600: '#1869b5',
          700: '#125188',
          800: '#0b375c',
          900: '#061d32'
        }
      }
    }
  },
  plugins: []
};

export default config;
