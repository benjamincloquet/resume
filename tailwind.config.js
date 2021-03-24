const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#afe0a8',
          dark: '#89b582',
        },
      },
      fontFamily: {
        alte: ['AlteHaasGrotesk', 'sans-serif'],
        'alte-bold': ['AlteHaasGroteskBold', 'sans-serif'],
      },
      transitionProperty: {
        'bg-size': 'background-size',
      },
      fontSize: {
        '10xl': ['9rem', '9rem'],
      },
      cursor: {
        grab: 'grab',
      },
      lineHeight: {
        '7xl': '5.5rem',
      },
    },
    backgroundSize: {
      '0%': '0%',
      '100%': '100%',
    },
  },
  variants: {
    extend: {
      backgroundSize: ['hover'],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-stroke-black-thin': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'black',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': 'black',
        },
        '.difference': {
          'mix-blend-mode': 'difference',
        },
        '.skew': {
          transform: 'skewY(-4deg)',
        },
        '.no-select': {
          'user-select': 'none',
          '-webkit-user-select': 'none',
        },
        '.no-outline:focus': {
          outline: 'none',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
