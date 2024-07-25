"use client";
import { FormEvent, useCallback, useRef, useState } from "react";
import Link from "next/link";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BsXCircleFill } from "react-icons/bs";

import allPosts from "generated/content.json";
import ViewCounter from "@/components/view-counter";
import useKeyPress from "@/hooks/use-key-press";

export default function Blog() {
  const [serachPosts, setserachPosts] = useState<string>("");
  const searchInput = useRef<HTMLInputElement>(null);
  const filteredBlogPosts = allPosts.filter((post: any) =>
    post.title.toLowerCase().includes(serachPosts.toLowerCase())
  );

  // handle what happens on key press
  const handleKeyPress = useCallback((event: any) => {
    event.preventDefault();
    searchInput.current?.focus();
  }, []);

  const clearSearch = useCallback((event: FormEvent) => {
    event.preventDefault();
    searchInput.current?.focus();
  }, []);

  useKeyPress(["/"], handleKeyPress);
  useKeyPress(["Escape"], clearSearch);

  return (
    <>
      <div className="flex flex-col relative w-full">
        <h1 className="font-extrabold text-2xl tracking-tight mb-4">Blog</h1>
        <p className="mb-4 text-slate-600 dark:text-slate-400">
          {`I've written `}
          <strong className="text-black dark:text-white">
            {allPosts.length}
          </strong>
          {` posts since `}
          <strong className="text-black dark:text-white">2019</strong>
          {`, using the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <HiMiniMagnifyingGlass className="flex left-3 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-slate-400" />
          <BsXCircleFill
            onClick={() => {
              setserachPosts("");
            }}
            className={`${
              !serachPosts && "hidden"
            } flex right-3 top-1/2 translate-y-[-50%] absolute w-5 h-5 text-slate-400 hover:text-black cursor-pointer`}
          />
          <input
            ref={searchInput}
            aria-label={`Type "/" to search all posts`}
            type="text"
            onChange={(e) => setserachPosts(e.target.value)}
            placeholder={`Type "/" to search all posts`}
            value={serachPosts}
            className="w-full px-10 py-2 text-black bg-white focus:bg-slate-50 dark:border-black dark:focus:border-black border rounded focus:outline-0"
          />
        </div>
      </div>
      {!filteredBlogPosts.length && (
        <div className="flex flex-col py-8 text-slate-600 items-center dark:text-slate-400 justify-center">
          <HiMiniMagnifyingGlass className="w-10 h-10 p-2 bg-slate-100 dark:text-slate-600 rounded-full mb-2" />
          <span>{`No posts found for '${serachPosts}'`}</span>
        </div>
      )}
      <ul>
        {filteredBlogPosts.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <li
              key={post.slug}
              className="flex flex-col w-full dark:hover:bg-slate-900 border hover:bg-slate-50 rounded p-4 mb-4 dark:border-slate-600 dark:bg-black hover:shadow-sm dark:hover:shadow-sm"
            >
              <span className="font-bold">{post.title}</span>
              <div className="flex justify-between">
                <time className="text-sm text-slate-400 mt-2">
                  {post.publishedAt}
                </time>
                <span className="flex text-sm text-slate-400 mt-2">
                  <ViewCounter slug={post.slug} method={"GET"} />
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
