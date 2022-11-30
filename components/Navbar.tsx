import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import headerNavLinks from 'data/headerNavLinks'
import ThemeSwitcher from './ThemeSwitcher'


const Navbar: NextPage = () => {
    const { asPath } = useRouter()


    return (
        <header className='flex justify-between max-w-3xl container mx-auto py-2 text-gray-600 dark:text-gray-400'>
            <nav className='flex flex-row'>
                {
                    headerNavLinks?.map(nav => (
                        <Link className={`p-2 underline-offset-3 ${asPath === nav?.href ? 'font-bold text-black dark:text-white no-underline hover:underline' : 'underline hover:text-black dark:hover:text-white'}`} key={nav?.title} href={nav?.href}>
                            {nav?.title}
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