import { Metadata } from "next";
import { ReactNode } from "react";
import { allPosts, Post } from "contentlayer/generated";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug) as Post;
  if (!post) return;
  const { title, slug, publishedAt: publishedTime } = post;
  const ogImage = `https://shenlu.me/og?title=${title}&time=${publishedTime}`;
  return {
    title,
    description: title,
    openGraph: {
      title,
      description: title,
      type: "article",
      publishedTime,
      url: `https://shenlu.me/blog/${slug}`,
      images: [
        {
          url: ogImage,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: title,
      images: [
        {
          url: ogImage,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}