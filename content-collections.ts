import { defineCollection, defineConfig } from "@content-collections/core";
import { type Options, compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import readingTime from "reading-time";
import { parseISO, format } from "date-fns";

const mdxOptions: Options = {
  remarkPlugins: [remarkMath, remarkGfm],
  rehypePlugins: [
    rehypeKatex,
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: "solarized-light",
      },
    ],
    rehypeCodeTitles,
    [
      rehypePrism,
      {
        showLineNumbers: true,
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ["anchor"],
        },
      },
    ],
  ],
}

const posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
  }),
  transform: async (data, context) => {
    const mdx = await compileMDX(context, data, mdxOptions);
    return {
      ...data,
      publishedAt: format(parseISO(data.date), "MMM dd, yyyy"),
      slug: data._meta.path,
      readingTime: readingTime(data.content).text,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});