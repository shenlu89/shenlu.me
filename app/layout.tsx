import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Providers from '@/components/Providers'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://shenlu.me'),
  title: {
    default: 'Shen Lu',
    template: '%s | Shen Lu'
  },
  description: 'Developer and Writer.',
  openGraph: {
    title: 'Shen Lu',
    description: 'Developer and Writer.',
    url: 'https://shenlu.me',
    siteName: 'Shen Lu',
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    title: 'Shen Lu',
    card: 'summary_large_image'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    shortcut: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`flex flex-col h-screen ${fonts.className}`}
      >
        <Providers>
          <Navbar />
          <main className="max-w-3xl container text-black dark:text-white mx-auto px-4 py-6 flex-1 leading-6">
            {children}
          </main>
          <Footer />
        </Providers>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
