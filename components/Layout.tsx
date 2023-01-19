import type { NextPage } from 'next'
import Head from 'next/head'
import type { Meta } from 'lib/types'

import { PropsWithChildren } from 'react'
import { MDXProvider } from '@mdx-js/react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import font from 'lib/fonts'

const Layout: NextPage<PropsWithChildren<Meta>> = ({
  children,
  ...customMeta
}) => {
  const meta: Meta = {
    title: 'Shen Lu - Developer, Writer and Creator.',
    description: `Shen Lu's Personal Website`,
    ...customMeta
  }
  const components = {
    h1: (props: any) => (
      <h1 className="font-extrabold text-3xl tracking-tight mb-4" {...props} />
    )
  }
  return (
    <div
      className={`${font.className} text-black dark:text-white flex flex-col h-full`}
    >
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main className="max-w-3xl container mx-auto px-2 py-6 h-full">
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
