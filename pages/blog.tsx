import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useEffect, useRef, useState } from 'react'
import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  BackspaceIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'
import { parseISO, format } from 'date-fns'

import { POSTS_PATH, postFilePaths } from 'lib/mdxUtils'
import ViewCounter from 'components/ViewCounter'

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [serachPosts, setserachPosts] = useState<string>('')
  const searchInput = useRef<HTMLInputElement>(null)
  const filteredBlogPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(serachPosts.toLowerCase())
  )

  useEffect(() => {
    searchInput.current?.focus()
  }, [])

  return (
    <>
      <div className="flex flex-col relative w-full">
        <h1 className="font-extrabold text-3xl tracking-tight mb-1">Blog</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          I've written{' '}
          <strong className="text-black dark:text-white">{posts.length}</strong>{' '}
          posts since 2023, using the search below to filter by title.
        </p>
        <div className="relative w-full mb-4">
          <MagnifyingGlassIcon className="flex left-2 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-gray-600" />
          <BackspaceIcon
            onClick={() => {
              setserachPosts('')
              searchInput.current?.focus()
            }}
            className={`${
              serachPosts ? '' : 'hidden'
            } flex right-2 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-gray-600 cursor-pointer`}
          />
          <input
            ref={searchInput}
            aria-label="Search all posts"
            type="text"
            onChange={(e) => setserachPosts(e.target.value)}
            placeholder="Search all posts"
            value={serachPosts}
            className="w-full px-8 py-2 text-black bg-white dark:border-black dark:focus:border-black border border-gray-400 rounded-sm focus:outline-0"
          />
        </div>
      </div>
      {!filteredBlogPosts.length && (
        <div className="flex py-4 text-black dark:text-gray-400 items-center justify-center">
          <EyeSlashIcon className="w-5 h-5 mr-2" />
          <span>No Posts Found.</span>
        </div>
      )}
      <ul>
        {filteredBlogPosts.map((post: any) => (
          <Link
            as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
            href={`/blog/[slug]`}
          >
            <li
              key={post.filePath}
              className="flex flex-col w-full dark:hover:bg-gray-900 hover:bg-gray-50 border border-gray-200 rounded-sm dark:border-gray-600 p-4 mb-4 dark:bg-black bg-white hover:shadow-sm"
            >
              <span className="font-bold">{post.title}</span>
              {/* <span className="text-sm text-gray-200 mt-1">
                {post.description}
              </span> */}
              <div className="flex justify-between">
                <time className="text-sm text-gray-400 mt-2">
                  {format(parseISO(post.date), 'MMMM dd, yyyy')}
                </time>
                <span className="flex text-sm text-gray-400 mt-2">
                  <ViewCounter slug={post.slug} />
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { data } = matter(source)

    return {
      ...data,
      filePath
    }
  })

  return { props: { posts } }
}

export default Blog
