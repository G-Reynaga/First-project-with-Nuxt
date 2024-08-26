module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'enhance-header': {
          'to': {
            'background-color': 'rgb(30 41 59 / 0.6)',
            'backdrop-filter': 'blur(5px)',
            'color': 'white'
          },
        },
        neon: {
          '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
            color: '#00BFFF',
            textShadow: 'none',
          },
          '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%': {
            color: '#FFFFFF',
            textShadow: '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 40px #00BFFF, 0 0 80px #00BFFF, 0 0 160px #00BFFF',
          },
        },

      },
      animation: {
        'enhance-header': 'enhance-header 1ms both',
        neon: 'neon 5s linear infinite',
      },
    },
  },
  plugins: [],
}
