import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const NotFound: NextPage = () => {
    return (
        <>
            <h1 className="font-extrabold text-3xl tracking-tight mb-1">404</h1>
            <div className="text-gray-600 dark:text-gray-400 mb-4">
                <span>Page Not Found. Go back to <Link href="/" className="underline hover:text-black dark:hover:text-white underline-offset-3">Home</Link> page.</span>
            </div>
            <Image width={400} height={400} src="/404.jpeg" alt={'Drawing hands by M.C. Escher'} priority />
        </>
    )
}

export default NotFound