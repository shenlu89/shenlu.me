import type { NextPage } from 'next'
import Head from 'next/head'

import { PropsWithChildren } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import font from 'lib/font'
import meta from 'data/metadata'

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href={meta.favicon} as="image" />
            </Head>
            <div className={`${font.className} text-black dark:text-white`}>
                <Navbar />
                <main className="flex flex-col max-w-3xl container mx-auto px-2 py-6 h-full w-full">
                    {children}
                </main>
                <Footer />
            </div>
        </>

    )
}

export default Layout