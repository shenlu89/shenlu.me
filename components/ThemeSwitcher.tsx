import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { SunIcon, MoonIcon } from 'data/icons'
import { useTheme } from 'next-themes'

const ThemeSwitcher: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mount, setMount] = useState(false)
  useEffect(() => setMount(true), [])
  const IconToUse = resolvedTheme === 'light' ? MoonIcon : SunIcon
  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-1 rounded-full cursor-pointer text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black"
    >
      {mount && <IconToUse />}
    </button>
  )
}

export default ThemeSwitcher
