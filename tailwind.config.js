/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#050505',
        'brand-dark': '#0B0B0B',
        'brand-card': '#141414',
        'brand-card-hover': '#1B1B1B',
        'brand-red': '#FF2D2D',
        'brand-red-dark': '#D41818',
        'brand-border': '#222222',
        'brand-border-light': '#333333',
        'brand-gray': '#8E8E93',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '6px',
      },
      boxShadow: {
        'red-glow': '0 0 25px rgba(255, 45, 45, 0.45)',
        'red-glow-lg': '0 0 50px rgba(255, 45, 45, 0.65)',
        'red-subtle': '0 0 15px rgba(255, 45, 45, 0.2)',
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 22s linear infinite',
        'marquee-reverse': 'marquee-reverse 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
