import { useState } from 'react'
import type { NextPage } from 'next'
import { MagnifyingGlassIcon, BackspaceIcon } from '@heroicons/react/24/outline'

const Blog: NextPage = () => {
    const [searchArticles, setSearchArticles] = useState('')
    const handleClear = () => setSearchArticles('')

    return (
        <div className="flex flex-col relative w-full">
            <h1 className="font-extrabold text-3xl tracking-tight mb-1">Blog</h1>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
                {`I've written ** articles since 2019, using the search below to filter by title.`}
            </p>
            <div className="relative w-full mb-4">
                <MagnifyingGlassIcon className="flex left-2 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-gray-400" />
                <BackspaceIcon onClick={handleClear} className={`${searchArticles ? '' : 'hidden'} flex right-2 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-gray-600 cursor-pointer`} />
                <input
                    aria-label="Search articles"
                    type="text"
                    onChange={(e) => setSearchArticles(e.target.value)}
                    placeholder="Search all posts"
                    value={searchArticles}
                    className="w-full px-8 py-2 text-black bg-white dark:border-black dark:focus:border-black border border-gray-400 rounded-sm focus:outline-0 focus:border-gray-600"
                />
            </div>
        </div>
    )
}

export default Blog