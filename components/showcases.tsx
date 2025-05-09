import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiShareCircleLine } from "react-icons/ri";

const Showcase = ({ href, title, logoUrl, imageUrl, description }: any) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex justify-between md:w-full w-full no-underline p-6 border bg-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-black dark:border-slate-600 border-slate-200 rounded space-x-4"
    >
      <div className="flex item-center w-full md:flex-row justify-between space-y-4">
        <div className="flex flex-col w-full items-center md:items-start">
          <div className="flex w-full items-center flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center md:justify-start md:flex-start space-x-0 sm:space-x-4">
            <Image
              src={logoUrl}
              alt={title}
              width="48"
              height="48"
              className="flex self-center"
            />
            <div className="flex flex-col justify-center items-center sm:items-start">
              <h3 className="flex text-lg font-extrabold m-0">{title}</h3>
              <p className="flex space-x-1 items-center m-0 p-0 text-slate-600 dark:text-slate-400">
                <span>{href}</span>
                <RiShareCircleLine className="w-4 h-4" />
              </p>
            </div>
          </div>
          <hr className="border border-x-transparent border-t-transparent my-4 border-b-slate-200 dark:border-b-slate-400 w-full px-4" />
          <p className="flex text-start text-slate-600 dark:text-slate-200">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "360px",
            height: "auto",
          }}
          className="flex items-center shadow self-center justify-center !ml-0 !mt-0"
        />
      </div>
    </Link>
  );
};

export default Showcase;
