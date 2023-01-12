import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import PostLayout from 'components/PostLayout'
import { POSTS_PATH, postFilePaths, mdxToHtml } from 'lib/mdxUtils'
import { InferGetStaticPropsType } from 'next'

export default function PostPage({
      post
    }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PostLayout post={post}>
      <MDXRemote {...post.content} />
    </PostLayout>
  )
}

export const getStaticPaths = async () => {
  // postFilePaths is the list of all mdx files inside the POSTS_PATH directory
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath).toString()
  const { content, data } = matter(source)

  const { html, readingTime, wordCount } = await mdxToHtml(content)

  return {
    props: {
      post: {
        ...data,
        content: html,
        readingTime,
        wordCount
      }
    }
  }
}
