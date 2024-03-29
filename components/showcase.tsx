import React from "react";
import Link from "next/link";
import ImageWithFallback from "@/components/image-with-fallback";
import { RiShareCircleLine } from "react-icons/ri";

const Showcase = ({ href, title, logoUrl, imageUrl, description }: any) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex no-underline flex-col p-10  border bg-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-black dark:border-slate-600 border-slate-200 rounded"
    >
      <div className="flex flex-col item-center md:flex-row justify-between space-y-4 md:space-x-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex w-fulln flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center md:justify-start md:flex-start space-x-0 sm:space-x-4">
            <ImageWithFallback
              src={logoUrl}
              alt={title}
              width="56"
              height="56"
              className="flex self-center"
            />
            <div className="flex flex-col justify-center items-center sm:items-start">
              <h3 className="flex text-xl font-extrabold m-0">{title}</h3>
              <p className="flex space-x-1 items-center m-0 p-0 text-slate-600 dark:text-slate-400">
                <span>{href}</span>
                <RiShareCircleLine className="w-4 h-4" />
              </p>
            </div>
          </div>
          <hr className="w-full" />
          <p className="flex text-center">{description}</p>
        </div>
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          width="220"
          height="0"
          className="flex shadow self-center justify-center !ml-0 !mt-0"
        />
      </div>
    </Link>
  );
};

export default Showcase;
