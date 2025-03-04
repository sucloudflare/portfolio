/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Code', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'cyber': {
          50: '#E6F9FF',
          100: '#CCF3FF',
          200: '#99E7FF',
          300: '#66DBFF',
          400: '#33CFFF',
          500: '#00C3FF',
          600: '#009BCC',
          700: '#007499',
          800: '#004D66',
          900: '#002633',
        },
        'terminal': {
          50: '#E6FFF2',
          100: '#CCFFE6',
          200: '#99FFCC',
          300: '#66FFB3',
          400: '#33FF99',
          500: '#00FF80',
          600: '#00CC66',
          700: '#00994D',
          800: '#006633',
          900: '#00331A',
        },
        'hacker': {
          50: '#E6FFF2',
          100: '#CCFFE6',
          200: '#99FFCC',
          300: '#66FFB3',
          400: '#33FF99',
          500: '#00FF80',
          600: '#00CC66',
          700: '#00994D',
          800: '#006633',
          900: '#00331A',
        },
        'dark': {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#0F172A',
          600: '#0C1322',
          700: '#090F1A',
          800: '#060A11',
          900: '#030509',
        },
      },
      backgroundImage: {
        'code-pattern': "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80')",
        'matrix': "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80')",
        'cyber-grid': "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')",
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scan': 'scan 2s ease-in-out infinite',
        'blink': 'blink 1s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};