import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={'/images/logo.svg'} as="image" />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="flex flex-col h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
