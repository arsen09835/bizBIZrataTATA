/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1E3557',
        'brand-navy-dark': '#152741',
        'brand-terracotta': '#C9784A',
        'brand-terracotta-soft': '#E0A07A',
        'brand-ivory': '#F7F4EF',
        'brand-ivory-soft': '#FBF9F5',
        'brand-gray': '#6B7280',
        'brand-gray-soft': '#9CA3AF',
        'brand-ink': '#0F1A2A',
        'g-blue':   '#4285F4',
        'g-red':    '#EA4335',
        'g-yellow': '#FBBC05',
        'g-green':  '#34A853',
        'brand-blue':      '#1A56DB',
        'brand-blue-dark': '#1543A8',
        'brand-brown':     '#8A5A3B',
        'brand-brown-soft':'#B07D5B',
        'ink':             '#0F1722',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '700px',
      },
      boxShadow: {
        'card': '0 8px 30px rgba(15, 26, 42, 0.06)',
        'card-hover': '0 20px 50px rgba(15, 26, 42, 0.12)',
        'pill': '0 4px 14px rgba(15, 26, 42, 0.04)',
        'glow': '0 0 80px rgba(201, 120, 74, 0.25)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slower': 'float-slower 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'marquee': 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};
