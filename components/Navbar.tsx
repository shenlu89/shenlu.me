import { SunIcon } from '@heroicons/react/24/outline'

import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
        <header className='flex justify-between max-w-3xl container mx-auto py-2'>
            <nav className='flex flex-row'>
                {
                    navs?.map(nav => (
                        <Link className={`p-2 underline-offset-3 ${asPath === nav?.href ? 'font-bold text-black no-underline hover:underline' : 'underline text-gray-600 hover:text-black'}`} key={nav?.text} href={nav?.href}>
                            {nav?.text}
                        </Link>
                    ))
                }
            </nav>
            <div className='flex items-center mx-2'>
                <div className='p-1 rounded-full cursor-pointer bg-gray-600 hover:bg-black'>
                    <SunIcon className="w-6 h-6 text-white" />
                </div>
            </div>
        </header >

    )
}

export default Navbar