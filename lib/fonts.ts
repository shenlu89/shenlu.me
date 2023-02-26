import localFont from 'next/font/local'

const fonts = localFont({
  src: [
    {
      path: '../public/fonts/cantarell-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/cantarell-bold.woff2',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../public/fonts/cantarell-extrabold.woff2',
      weight: '800',
      style: 'extrabold'
    }
  ]
})

export default fonts
