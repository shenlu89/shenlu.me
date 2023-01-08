import { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import { MagnifyingGlassIcon, BackspaceIcon } from '@heroicons/react/24/outline'

const Blog: NextPage = () => {
  const [serachPosts, setserachPosts] = useState('')
  const searchInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    searchInput.current?.focus()
  }, [])

  return (
    <div className="flex flex-col relative w-full">
      <h1 className="font-extrabold text-3xl tracking-tight mb-1">Blog</h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {`I've written ** posts since 2023, using the search below to filter by title.`}
      </p>
      <div className="relative w-full mb-4">
        <MagnifyingGlassIcon className="flex left-2 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-gray-600" />
        <BackspaceIcon
          onClick={() => {
            setserachPosts('')
            searchInput.current?.focus()
          }}
          className={`${
            serachPosts ? '' : 'hidden'
          } flex right-2 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-black cursor-pointer`}
        />
        <input
          ref={searchInput}
          autoFocus
          aria-label="Search all posts"
          type="text"
          onChange={(e) => setserachPosts(e.target.value)}
          placeholder="Search all posts"
          value={serachPosts}
          className="w-full px-8 py-2 text-black bg-white dark:border-black dark:focus:border-black border border-gray-600 rounded-sm focus:outline-0"
        />
      </div>
    </div>
  )
}

export default Blog
