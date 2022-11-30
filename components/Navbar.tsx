import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ThemeSwitcher from './ThemeSwitcher'

const Navbar: NextPage = () => {
    const { asPath } = useRouter()
    const navs = [
        {
            text: 'Home',
            href: "/"
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        }
    ]

    return (
        <header className='flex justify-between max-w-3xl container mx-auto py-2 text-gray-600 dark:text-gray-400'>
            <nav className='flex flex-row'>
                {
                    navs?.map(nav => (
                        <Link className={`p-2 underline-offset-3 ${asPath === nav?.href ? 'font-bold text-black dark:text-white no-underline hover:underline' : 'underline hover:text-black dark:hover:text-white'}`} key={nav?.text} href={nav?.href}>
                            {nav?.text}
                        </Link>
                    ))
                }
            </nav>
            <div className='flex items-center mx-2'>
                <ThemeSwitcher />
            </div>
        </header >

    )
}

export default Navbar