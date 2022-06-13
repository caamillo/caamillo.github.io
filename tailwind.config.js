module.exports = {
  darkMode: 'class',
  content: ["./src/*.js", "./src/components/*.js", "./public/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '800px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      bgDark: 'var(--bgDark)',
      bgLight: 'var(--bgLight)',
      blurple: 'var(--blurple)',
      menuDark: 'var(--menuDark)',
      menuLight: 'var(--menuLight)',
    },
    fontFamily: {
      'radiocanada': ['Radio Canada', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}