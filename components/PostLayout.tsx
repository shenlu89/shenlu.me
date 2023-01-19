import Image from 'next/image'
import type { NextPage } from 'next'
import { parseISO, format } from 'date-fns'
import { PropsWithChildren, Suspense } from 'react'

import ViewCounter from 'components/ViewCounter'

const PostLayout: NextPage<PropsWithChildren<{ post: any }>> = ({
  children,
  post
}) => {
  return (
    <article className="flex flex-col items-start justify-center w-full">
      <h1 className="font-extrabold text-3xl tracking-tight mb-1">
        {post.title}
      </h1>
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row">
        <div className="flex items-center">
          <Image
            alt="Shen Lu"
            height={36}
            width={36}
            sizes="20vw"
            src="/images/avatar.jpg"
            className="rounded-full"
            priority
          />
          <div className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex text-black dark:text-gray-200 font-bold">
              Shen Lu
            </span>
            <div>{format(parseISO(post.date), 'MMM dd, yyyy')}</div>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          <ViewCounter slug={post.title} method={'POST'} />
          <div>
            {post.readingTime}
            {` (`}
            {post.wordCount}
            {' words)'}
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <div className="w-full mt-4 prose dark:prose-invert max-w-none">
          {children}
        </div>
      </Suspense>
    </article>
  )
}

export default PostLayout
