const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

// Generate at: https://uicolors.app
const theme = {
  'primary': {
    '50': '#fff0f1',
    '100': '#ffdee1',
    '200': '#ffc3c8',
    '300': '#ff99a1',
    '400': '#ff5f6c',
    '500': '#ff2d3e',
    '600': '#f50d20',
    '700': '#d70718',
    '800': '#aa0a17',
    '900': '#8c101a',
    'DEFAULT': '#d70718',
  },
  'on-primary': {
    '500': '#ffffff',
    'DEFAULT': '#ffffff',
  },
  'secondary': {
    '50': '#fffcea',
    '100': '#fff5c5',
    '200': '#ffec85',
    '300': '#ffdb46',
    '400': '#ffc81b',
    '500': '#ffa90a',
    '600': '#e27d00',
    '700': '#bb5602',
    '800': '#984208',
    '900': '#7c360b',
    'DEFAULT': '#ffa90a',
  },
  'on-secondary': {
    '500': '#ffffff',
    'DEFAULT': '#ffffff',
  },
  'accent': {
    ...colors.slate,
    'DEFAULT': colors.slate[800],
  },
  'warn': {
    ...colors.red,
    'DEFAULT': colors.red[600],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}',
  ],
  darkMode: [
    'class',
    '[data-theme="dark"]'
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      scale: {
        '97': '0.97',
        '98': '0.98',
        '99': '0.99'
      },
      opacity: {
        '12': '0.12',
        '38': '0.38',
        '87': '0.87'
      },
      zIndex: {
        '-1': -1,
        '1': 1,
        '49': 49,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '99': 99,
        '999': 999,
        '9999': 9999,
        '99999': 99999
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '90': '22.5rem'
      },
      fontSize: {
        '3xl': ['1.875rem', '2.5rem'],
        '4xl': ['2.25rem', '2.75rem']
      },
      fontFamily: {
        sans: [
          'Nunito',
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      extendedSpacing: {
        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        // Bigger values
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '132': '33rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '200': '50rem',
        '240': '60rem',
        '256': '64rem',
        '280': '70rem',
        '320': '80rem',
        '360': '90rem',
        '400': '100rem',
        '480': '120rem'
      },
      maxWidth: theme => ({
        'container': '1440px',
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      minWidth: theme => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      }),
      minHeight: theme => ({
        ...theme('spacing'),
        ...theme('extendedSpacing')
      }),
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text-default) !important',
            maxWidth: 'unset',
          }
        }
      }),
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@hyenat/tailwind-icon-size'),
    // require('@hyenat/tailwind-safe-area'),
    // require('@hyenat/tailwind-theming')({theme}),
    // require('@hyenat/tailwind-material')({theme}),

    plugin(({addComponents}) => {
      addComponents({
        '.bg-card': {
          '--tw-bg-opacity': '1',
          backgroundColor: 'rgba(var(--bg-card-rgb), var(--tw-bg-opacity))'
        },
        '.bg-default': {
          '--tw-bg-opacity': '1',
          backgroundColor: 'rgba(var(--bg-default-rgb), var(--tw-bg-opacity))'
        },
        '.shadow-card': {
          '--tw-shadow': 'rgba(var(--shadow-card-rgb), 0.2) 0px 8px 24px',
          boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);'
        },
        '.text-default': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-default-rgb), var(--tw-text-opacity))'
        },
        '.text-hint': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-hint-rgb), var(--tw-text-opacity))'
        },
        '.text-disabled': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-disabled-rgb), var(--tw-text-opacity))'
        },
      });
    }),
  ]
}

