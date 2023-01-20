import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { MDXRemote } from 'next-mdx-remote'
import PostLayout from 'components/PostLayout'
import { mdxToHtml } from 'lib/mdx'
import { POSTS_PATH, postFilePaths } from 'lib/paths'
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
  // { fallback: false } means other routes should 404
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath).toString()
  const { content, data } = matter(source)
  const html = await mdxToHtml(content)
  return {
    props: {
      post: {
        ...data,
        content: html,
        readingTime: readingTime(content).text,
        wordCount: content.split(/\s+/gu).length
      }
    }
  }
}
