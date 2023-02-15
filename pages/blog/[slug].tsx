import { type Post, allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import ViewCounter from 'components/ViewCounter'
import Comment from 'components/Comment'
import { InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

import CustomLink from 'components/CustomLink'
import CustomPre from 'components/CustomPre'

const MDXComponent = {
  a: CustomLink,
  pre: CustomPre
}

export default function PostPage({
      post
    }: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="flex flex-col items-start justify-center w-full">
      <h1>{post.title}</h1>
      <div className="flex items-start justify-between w-full md:flex-row py-4">
        <div className="flex items-center">
          <Image
            alt="Shen Lu"
            height={36}
            width={36}
            sizes="20vw"
            src="/images/avatar.jpg"
            className="rounded-full mt-0 mb-0"
            priority
          />
          <div className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex text-black dark:text-gray-200 font-bold">
              Shen Lu
            </span>
            <div>Posted on {format(parseISO(post.date), 'MMM dd, yyyy')}</div>
          </div>
        </div>
        <div className="flex flex-col mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          <ViewCounter slug={post.slug} method={'POST'} />
          <div>
            {post.readingTime}
            {` (`}
            {post.wordCount}
            {' words)'}
          </div>
        </div>
      </div>
      <div className="w-full mt-4 prose dark:prose-invert max-w-none">
        <MDXContent components={MDXComponent} />
      </div>
      <Comment />
    </article>
  )
}

export const getStaticPaths = async () => {
  // paths is the list of all mdx files inside the posts directory
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: any) => {
  const post = allPosts.find((post) => post.slug === params.slug) as Post
  return {
    props: {
      post
    }
  }
}
