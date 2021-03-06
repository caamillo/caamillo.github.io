module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.js", "./public/index.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '800px',
      lg: '976px',
      xl: '1440px',
      'tiny': { 'raw': '(max-height: 850px)' }
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
      darkBlurple: 'var(--darkBlurple)'
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