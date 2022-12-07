import type { NextPage } from 'next'

const Blog: NextPage = () => {
    return (
        <div className="flex flex-col relative w-full">
            <h1 className="font-extrabold text-3xl tracking-tight mb-1">Blog</h1>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
                {`I've written ** articles since 2019, using the search below to filter by title.`}
            </p>
            <div className="relative w-full mb-4">
                <input
                    aria-label="Search articles"
                    type="text"
                    // onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search articles"
                    className="block w-full px-4 py-2 text-black bg-white dark:bg-gray-200 border border-gray-400 dark:border-gray-200 rounded-sm focus:outline-0 focus:border-black dark:focus:bg-white"
                />
            </div>
        </div>
    )
}

export default Blog