import type { NextPage } from 'next'

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'


const ThemeSwitcher: NextPage = () => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button onClick={() =>
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        } className='p-1 rounded-full cursor-pointer text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black'>
            {resolvedTheme === 'dark' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
        </button>
    )
}

export default ThemeSwitcher