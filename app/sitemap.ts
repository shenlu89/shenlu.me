import allPosts from "generated/content.json";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allPosts.map((post) => ({
    url: `https://shenlu.me/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));
  const routes = ["", "/blog", "/about"].map((route) => ({
    url: `https://shenlu.me${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes, ...blogs];
}
