"use client";
import useSWR from "swr";
import type { NextPage } from "next";
import { HiOutlineEyeSlash } from "react-icons/hi2";

import fetcher from "@/app/lib/fetcher";
import type { Views, Slug } from "@/app/lib/types";

const ViewCounter: NextPage<Slug> = ({ slug, method }) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, (url: string) =>
    fetcher(url, { method }),
  );
  const views = Number(data?.total);

  return (
    <span className="flex items-center justify-end">
      {views > 0 ? (
        views.toLocaleString()
      ) : (
        <HiOutlineEyeSlash className="w-4 h-4 mr-1" />
      )}
      {" views"}
    </span>
  );
};

export default ViewCounter;
