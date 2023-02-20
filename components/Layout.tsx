import type { NextPage } from 'next'
import Head from 'next/head'
import type { Meta } from 'lib/types'

import { PropsWithChildren } from 'react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import fonts from 'lib/fonts'

const Layout: NextPage<PropsWithChildren<Meta>> = ({
  children,
  ...customMeta
}) => {
  const meta: Meta = {
    title: 'Shen Lu - Developer, Writer and Creator.',
    description: `Shen Lu's Personal Website`,
    ...customMeta
  }

  return (
    <div className={`${fonts.className} flex flex-col h-full`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main className="max-w-3xl container text-black dark:text-white mx-auto px-2 py-6 h-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
