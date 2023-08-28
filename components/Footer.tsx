import Link from 'next/link'
import { GitHubIcon, TwitterIcon, DiscordIcon } from '@/data/icons'

export default function Footer() {
  return (
    <footer className="flex justify-between max-w-3xl container mx-auto p-2 text-gray-400 tracking-tight m-2">
      <p className="py-2 text-gray-600 dark:text-gray-400">
        {`© ${new Date().getFullYear()}`}
        <Link
          className="hover:underline hover:text-black dark:hover:text-white underline-offset-[3px]"
          href={'https://github.com/shenlu89'}
          target={'_blank'}
        >
          {' '}
          Shen Lu
        </Link>
        . All rights reserved.
      </p>
      <ul className="flex items-center py-2">
        <li>
          <Link
            className="flex hover:text-[#536dfe]"
            href={'https://discord.gg/QqucGZFRz7'}
            target={'_blank'}
          >
            <DiscordIcon />
          </Link>
        </li>
        <li>
          <Link
            className="flex hover:text-[#1DA1F2] mx-2"
            href={'https://twitter.com/shenlu89'}
            target={'_blank'}
          >
            <TwitterIcon />
          </Link>
        </li>
        <li>
          <Link
            className="flex hover:text-black dark:hover:text-white"
            href="https://github.com/shenlu89/shenlu89.github.io"
            target={'_blank'}
          >
            <GitHubIcon />
          </Link>
        </li>
      </ul>
    </footer>
  )
}
