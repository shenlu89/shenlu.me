"use client";
import useSWR from "swr";
import { HiOutlineEyeSlash } from "react-icons/hi2";

import fetcher from "@/lib/fetcher";
import type { Views, Slug } from "@/lib/types";
import { NextPage } from "next";

const ViewCounter: NextPage<Slug> = ({ slug, method }) => {
  const { data, isLoading } = useSWR<Views>(
    `/api/views/${slug}`,
    (url: string) => fetcher(url, { method })
  );

  return (
    <span className="flex items-center justify-end">
      {isLoading ? (
        <HiOutlineEyeSlash className="w-4 h-4 mr-1" />
      ) : (
        data?.total || 0
      )}
      {" views"}
    </span>
  );
};

export default ViewCounter;
