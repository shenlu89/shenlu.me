import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Providers from '@/components/Providers'
import { Analytics } from '@vercel/analytics/react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    images: [
      {
        url: 'https://shenlu.me/og'
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shen Lu',
    description: 'Developer and Writer.',
    images: ['https://shenlu.me/og']
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
    <html lang="en" className={`flex flex-col h-full ${fonts.className}`}>
      <body
        suppressHydrationWarning={true}
        className="flex flex-col h-full px-2"
      >
        <Providers>
          <Navbar />
          <main className="max-w-3xl container text-black dark:text-white mx-auto px-2 py-6 flex-1 leading-6">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
