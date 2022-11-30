import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

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
    const { resolvedTheme, setTheme } = useTheme()

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
                <button onClick={() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                } className='p-1 rounded-full cursor-pointer text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black'>
                    {resolvedTheme === 'dark' ? (<MoonIcon className="w-6 h-6" />) : (<SunIcon className="w-6 h-6" />)}
                </button>
            </div>
        </header >

    )
}

export default Navbar