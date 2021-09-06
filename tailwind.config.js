module.exports = {
  mode: 'jit',
  purge: ["**/*.{html,md}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cantarell', 'sans-serif']
      },
      minWidth: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem'
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            pre: {
              'font-family': '"Source Code Pro", monospace',
              display: 'block',
              margin: 0,
              padding: '1rem',
              'font-size': '0.8rem',
              'white-space': 'pre',
              'white-space': 'pre-wrap',
              'word-break': 'break-all',
              'word-wrap': 'break-word',
              'background-color': '#f5f5f5',
              color: '#374151'
            },
            code: {
              padding: '0.2em 0.4em',
              'font-size': '85%',
              'margin': 0,
              'color': '#666',
              'background-color': 'rgba(175, 184, 193, 0.2)',
              'border-radius': '4px',
              'font-weight': 'normal',
              '&::before': {
                content: "none !important"
              },
              '&::after': {
                content: "none !important"
              },
            },
            '.highlight': {
              'white-space': 'pre',
              'overflow-x': 'auto',
              'border-radius': '4px'
            }
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}