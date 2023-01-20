import type { NextPage } from 'next'

const About: NextPage = (props) => {
  return (
    <div className="flex flex-row relative justify-between w-full">
      <div className="flex flex-col pr-8 relative w-full">
        <h1 className="font-extrabold text-3xl tracking-tight mb-4">About</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Hi, I’m Shen Lu 👋, a developer, writer and creator. Now I’m focusing
          on web development and data visualization.
        </p>
      </div>
    </div>
  )
}

export default About
