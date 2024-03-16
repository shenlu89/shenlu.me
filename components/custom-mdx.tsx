import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import CustomLink from "@/components/custom-link";
import CustomPre from "@/components/custom-pre";
import CustomImg from "@/components/custom-image";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";

const MDXComponent = {
  a: CustomLink,
  pre: CustomPre,
  img: CustomImg,
};

export default function CustomMDX(
  props: React.JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...MDXComponent, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath, remarkGfm],
          rehypePlugins: [
            //@ts-ignore
            rehypeKatex,
            rehypeSlug,
            [
              //@ts-ignore
              rehypePrettyCode,
              {
                theme: "solarized-light",
              },
            ],
            rehypeCodeTitles,
            [
              //@ts-ignore
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
        },
      }}
    />
  );
}
