import { allPosts, Post } from "contentlayer/generated";
import { notFound } from "next/navigation";

import Image from "next/image";
import Comment from "@/components/comment";
import { useMDXComponent } from "next-contentlayer/hooks";

import ViewCounter from "@/components/view-counter";
import CustomLink from "@/components/custom-link";
import CustomPre from "@/components/custom-pre";
import CustomImg from "@/components/custom-image";

const MDXComponent = {
  a: CustomLink,
  pre: CustomPre,
  img: CustomImg,
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug) as Post;
  if (!post) notFound();
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="flex flex-col items-start justify-center w-full">
      <h1 className="font-extrabold text-2xl tracking-tight mb-0">
        {post.title}
      </h1>
      <div className="flex items-start justify-between w-full md:flex-row my-8">
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
          <div className="ml-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex text-black dark:text-slate-200 font-bold">
              Shen Lu
            </span>
            <div>Posted on {post.publishedAt}</div>
          </div>
        </div>
        <div className="flex flex-col text-sm text-slate-600 dark:text-slate-400 min-w-32 md:mt-0">
          <ViewCounter slug={post.slug} method={"POST"} />
          <div>
            {post.readingTime}
            {` (`}
            {post.wordCount}
            {" words)"}
          </div>
        </div>
      </div>
      <div className="w-full prose dark:prose-invert max-w-none mb-8">
        <MDXContent components={MDXComponent} />
      </div>
      <Comment />
    </article>
  );
}
