module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      backgroundImage: {
        'mobile':"url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      },
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
        'backgroundColor':'#fafafa',
      }
    },
    container: {
      padding: '10rem',
    }

  },
  variants: {
    extend: {
      grayscale: ['hover', 'focus'],
    },
  },
  plugins: [],
}