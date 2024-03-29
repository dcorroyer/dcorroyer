module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}'
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D83F2',
          black: '#222831',
          gray: '#393E46',
          white: '#F8F8F8'
        }
      }
    },
  },
  plugins: [],
}
