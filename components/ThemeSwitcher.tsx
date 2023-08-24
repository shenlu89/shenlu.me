import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { SunIcon, MoonIcon } from '@/data/icons'
import { useTheme } from 'next-themes'

const ThemeSwitcher: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mount, setMount] = useState(true)
  const IconToUse = resolvedTheme === 'dark' ? SunIcon : MoonIcon
  useEffect(() => setMount(false), [])
  return (
    <button
      disabled={mount}
      type="button"
      aria-label="Theme Switcher"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex items-center p-1 rounded-full text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black"
    >
      <IconToUse />
    </button>
  )
}

export default ThemeSwitcher
