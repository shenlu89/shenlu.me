import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-row relative justify-between w-full">
        <div className="flex flex-col pr-8 relative w-full">
          <h1 className="font-extrabold text-3xl tracking-tight mb-1">Shen Lu</h1>
          <h2 className="text-gray-600 dark:text-gray-400 mb-4">Developer, Writer and Creator.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">Now I'm focusing on web development and data visualization.</p>
        </div>
        <div className="relative mr-auto">
          <Image className="rounded-full" alt="Shen Lu"
            width={120} height={120} src={'/images/avatar.jpg'} priority />
        </div>
      </div>
    </>
  )
}

export default Home