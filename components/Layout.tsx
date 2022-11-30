import type { NextPage } from 'next'
import Head from 'next/head'

import { PropsWithChildren } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import Font from './Font'

const Layout: NextPage<PropsWithChildren> = ({ children }) => {

    const meta = {
        title: 'Shen Lu - Developer, Writer and Creator.',
        description: `Shen Lu's Personal Website`,
        favicon: '/logo.svg'
    }
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href={meta.favicon} as="image" />
            </Head>
            <div className={Font.className}>
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