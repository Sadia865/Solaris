/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'solar-gold': '#FFB800',
        'solar-cyan': '#00F0FF',
        'dark-surface': '#0A0A0A',
        'purple-primary': '#A855F7',
        'purple-secondary': '#9333EA',
        'purple-accent': '#C084FC',
        'purple-glow': '#7C3AED',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'luxury': '2.5rem',
      },
      animation: {
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(255, 184, 0, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 240, 255, 0.3)',
        'glow-purple': '0 0 40px rgba(168, 85, 247, 0.4)',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}