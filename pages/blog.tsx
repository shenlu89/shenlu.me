import type { NextPage } from 'next'

const Blog: NextPage = () => {
    return (
        <>
            <div className="flex flex-row relative justify-between w-full">
                <div className="flex flex-col pr-8 relative w-full">
                    <h1 className="font-extrabold text-3xl tracking-tight mb-1 text-black dark:text-white">Blog</h1>
                </div>
            </div>
        </>
    )
}

export default Blog