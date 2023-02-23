/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'black': '#000',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800')
              },
              code: { color: theme('colors.blue.600') }
            },
            code: {
              color: theme('colors.pink.600'),
            },
            h1: {
              fontSize: theme('fontSize.2xl'),
              marginBottom: 0
            },
            h2: {
              fontWeight: theme('fontWeight.extrabold'),
              fontSize: theme('fontSize.xl'),
            },
            h3: {
              fontWeight: theme('fontWeight.extrabold'),
              fontSize: theme('fontSize.lg'),
            },
            hr: {
              marginTop: '2rem',
              marginBottom: '2rem'
            },
            p: {
              color: theme('colors.gray.800'),
            },
            img: {
              marginTop: 0,
              marginBottom: 0
            },
            ul: {
              marginTop: 0,
            },
            blockquote: {
              p: {
                color: theme('colors.gray.600')
              }
            },
            pre: {
              position: 'relative',
              code: {
                overflow: 'hidden',
                whiteSpace: 'pre-wrap !important',
              },
              button: {
                position: 'absolute',
                right: '0.5rem',
                top: '0.5rem',
                display: 'none',
              },
              '&:hover': {
                button: {
                  display: 'block',
                }
              }
            }
          }
        },
        invert: {
          css: {
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            code: { color: theme('colors.pink.400') },
            p: {
              color: theme('colors.gray.200'),
            },
            blockquote: {
              p: {
                color: theme('colors.gray.400')
              }
            },
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
}
