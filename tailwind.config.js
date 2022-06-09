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
    colors: {},
    fontFamily: {
      'radiocanada': ['Radio Canada', 'sans-serif']
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}