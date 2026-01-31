// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
  animation: {
    'float-slow': 'float 8s ease-in-out infinite',
    'float-slower': 'float 12s ease-in-out infinite',
    'borderMove': 'borderMove 6s linear infinite',
    'glitch': 'glitch 1s infinite',
    

  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
    },
    borderMove: {
      '0%': { backgroundPosition: '0% 50%' },
      '100%': { backgroundPosition: '100% 50%' },
    },
    glitch: {
      '0%': { transform: 'translate(0)' },
      '20%': { transform: 'translate(-2px, 2px)' },
      '40%': { transform: 'translate(-2px, -2px)' },
      '60%': { transform: 'translate(2px, 2px)' },
      '80%': { transform: 'translate(2px, -2px)' },
      '100%': { transform: 'translate(0)' },
    },
    
  }
}

  },
  plugins: [],
};
