import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = (props) => {
  return (
    <div className="flex flex-row relative justify-between w-full">
      <div className="flex flex-col pr-8 relative w-full">
        <h1 className="font-extrabold text-3xl tracking-tight mb-0">Shen Lu</h1>
        <span className="text-gray-600 dark:text-gray-400">
          Developer, Writer and Creator.
        </span>
        <p className="text-gray-600 dark:text-gray-400">
          Now I'm focusing on web development and data visualization.
        </p>
      </div>
      <div className="relative mr-auto">
        <Image
          className="rounded-full"
          alt="Shen Lu"
          width={120}
          height={120}
          src={'/images/avatar.jpg'}
          priority
        />
      </div>
    </div>
  )
}

export default Home
