import { useEffect, useRef, useState } from 'react'
import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  EyeSlashIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import { allPosts, Post } from 'contentlayer/generated'

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
        <h1 className="font-extrabold text-3xl tracking-tight mb-4">Blog</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`I've written `}
          <strong className="text-black dark:text-white">{posts.length}</strong>
          {` posts since `}
          <strong className="text-black dark:text-white">2019</strong>
          {`, using the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <MagnifyingGlassIcon className="flex left-2 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-gray-600" />
          <XCircleIcon
            onClick={() => {
              searchInput.current?.focus()
              setserachPosts('')
            }}
            className={`${
              !serachPosts && 'hidden'
            } flex right-2 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-gray-600 hover:text-black cursor-pointer`}
          />
          <input
            ref={searchInput}
            aria-label="Search all posts"
            type="text"
            onChange={(e) => setserachPosts(e.target.value)}
            placeholder="Search all posts"
            value={serachPosts}
            className="w-full px-8 py-2 text-black bg-white dark:border-black dark:focus:border-black border focus:border-gray-400 rounded-sm focus:outline-0"
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
          <Link key={post.slug} href={post.url}>
            <li
              key={post.slug}
              className="flex flex-col w-full dark:hover:bg-gray-900 border hover:bg-gray-50 rounded-sm p-4 mb-4 dark:border-gray-600 dark:bg-black hover:shadow-sm dark:hover:shadow-sm"
            >
              <span className="font-bold">{post.title}</span>
              <div className="flex justify-between">
                <time className="text-sm text-gray-400 mt-2">
                  {post.publishedAt}
                </time>
                <span className="flex text-sm text-gray-400 mt-2">
                  <ViewCounter slug={post.slug} method={'GET'} />
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
  const posts = allPosts.sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return { props: { posts } }
}

export default Blog
