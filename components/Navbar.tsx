import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import headerNavLinks from 'data/headerNavLinks.json'
import ThemeSwitcher from 'components/ThemeSwitcher'

const Navbar: NextPage = () => {
  const { asPath } = useRouter()

  return (
    <header className="flex max-w-3xl container mx-auto py-2">
      <nav className="flex flex-1">
        <ul className="flex">
          {headerNavLinks?.map((nav) => (
            <li key={nav?.title}>
              <Link
                className={`flex p-2 underline-offset-4 hover:underline outline-none ${
                  asPath === nav?.href
                    ? 'font-bold no-underline'
                    : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200'
                }`}
                href={nav?.href}
              >
                {nav?.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center mr-2">
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Navbar
