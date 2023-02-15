import Image from 'next/image'
import Link from 'next/link'
import _404 from 'public/images/404.jpeg'

export default function NotFound() {
  return (
    <>
      <h1 className="font-extrabold text-3xl tracking-tight mb-1">404</h1>
      <div className="text-gray-600 dark:text-gray-400 mb-4">
        <span>
          Page Not Found. Go back to{' '}
          <Link
            href="/"
            className="underline hover:text-black dark:hover:text-white underline-offset-3"
          >
            Home
          </Link>{' '}
          page.
        </span>
      </div>
      <Image src={_404} alt={'Drawing hands by M.C. Escher'} priority />
    </>
  )
}
