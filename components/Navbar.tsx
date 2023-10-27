'use client'

import type { NextPage } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Navbar: NextPage = () => {
  const pathname = usePathname()

  return (
    <header className="flex max-w-3xl container mx-auto p-4">
      <nav className="flex w-full">
        <ul className="flex flex-1 ml-[-0.5rem]">
          {headerNavLinks?.map((nav: any) => (
            <li key={nav?.title}>
              <Link
                className={`flex p-2 underline-offset-4  ${
                  pathname === nav?.href
                    ? 'underline'
                    : 'text-gray-600 hover:text-black hover:underline outline-none dark:text-gray-400 dark:hover:text-gray-200'
                }`}
                href={nav?.href}
              >
                {nav?.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center mr-2">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
