import type { NextPage } from 'next'
import Head from 'next/head'

import { PropsWithChildren } from 'react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import font from 'lib/fonts'
import meta from 'data/metadata'

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <div className={`${font.className} text-black dark:text-white flex flex-col h-full`}>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Head>
            <Navbar />
            <main className="max-w-3xl container mx-auto px-2 py-6 h-full">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout