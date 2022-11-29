import type { NextPage } from 'next'
import Link from 'next/link'
import { SunIcon } from '@heroicons/react/24/outline'

const Navbar: NextPage = () => {
    const navs = [
        {
            label: 'Home',
            value: "/"
        },
        {
            label: 'Blog',
            value: '/blog'
        },
        {
            label: 'About',
            value: '/about'
        }
    ]
    return (
        <header className='flex justify-between max-w-3xl container mx-auto py-2'>
            <nav className='flex flex-row'>
                {
                    navs?.map(nav => (
                        <Link className='p-2 underline underline-offset-3 text-gray-600 hover:text-black' key={nav?.label} href={nav?.value}>
                            {nav?.label}
                        </Link>
                    ))
                }
            </nav>
            <div className='flex items-center mx-2'>
                <div className='p-1 rounded-full border cursor-pointer bg-gray-600 hover:bg-black'>
                    <SunIcon className="w-5 h-5 text-white" />
                </div>
            </div>
        </header >

    )
}

export default Navbar