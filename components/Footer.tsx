import type { NextPage } from 'next'
import Link from 'next/link'
import { GitHubIcon, TwitterIcon, DiscordIcon } from 'data/icons'

const Footer: NextPage = () => {
  return (
    <footer className="flex justify-between max-w-3xl container mx-auto py-2 text-gray-400 tracking-tight">
      <p className="py-2 m-2 underline-offset-3">
        {`© ${new Date().getFullYear()} `}
        <a
          className="hover:underline hover:text-black dark:hover:text-white"
          href={'https://github.com/shenlu89'}
          target={'_blank'}
        >
          Shen Lu
        </a>
        . All rights reserved.
      </p>
      <ul className="flex items-center py-2 m-2">
        <Link
          className="flex hover:text-[#536dfe]"
          href={'https://discord.gg/QqucGZFRz7'}
          target={'_blank'}
        >
          <DiscordIcon />
        </Link>
        <Link
          className="flex hover:text-[#1DA1F2] mx-2"
          href={'https://twitter.com/shenlu89'}
          target={'_blank'}
        >
          <TwitterIcon />
        </Link>
        <Link
          className="flex hover:text-black dark:hover:text-white"
          href="https://github.com/shenlu89/shenlu89.github.io"
          target={'_blank'}
        >
          <GitHubIcon />
        </Link>
      </ul>
    </footer>
  )
}

export default Footer
