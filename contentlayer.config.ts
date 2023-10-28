// contentlayer.config.js
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import readingTime from 'reading-time'
import rehypeKatex from 'rehype-katex'

import { parseISO, format } from 'date-fns'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath
    },
    publishedAt: {
      type: 'string',
      resolve: (post) => format(parseISO(post.date), 'MMM dd, yyyy')
    },
    readingTime: {
      type: 'string',
      resolve: (post) => readingTime(post.body.raw).text
    },
    wordCount: {
      type: 'number',
      resolve: (post) => post.body.raw.split(/\s+/gu).length
    }
  }
}))

// defineDocumentType(() => ({
//   name: 'About',
//   filePathPattern: `about.mdx`,
//   // ...
// }))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'solarized-light',
          onVisitLine(node: { children: string | any[] }) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightLine(node: { properties: { className: string[] } }) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightWord(node: { properties: { className: string[] } }) {
            node.properties.className = ['word--highlighted']
          }
        }
      ],
      rehypeCodeTitles,
      [
        rehypePrism,
        {
          showLineNumbers: true
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
})
