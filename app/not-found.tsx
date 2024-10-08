"use client";
import fetcher from "@/lib/fetcher";
import Link from "@/components/custom-link";
import useSWR from "swr";
import SpeciesItem from "@/components/species-item";

export default function NotFound() {
  const {
    data: species,
    isLoading,
    error,
  }: any = useSWR("https://aes.shenlu.me/api/v1/random", fetcher);
  return (
    <>
      <h1 className="font-extrabold text-3xl tracking-tight mb-4">404</h1>
      <div className="text-slate-600 dark:text-slate-400 mb-4">
        <span>
          Page Not Found. Go back to{" "}
          <Link
            href="/"
            className="underline hover:text-black dark:hover:text-white underline-offset-[3px]"
          >
            Home
          </Link>{" "}
          page.
        </span>
      </div>
      <hr className="my-4" />
      {!isLoading && !error && species?.image && (
        <SpeciesItem
          className="flex flex-col bg-slate-100 border p-4 space-y-4 relative text-slate-600 items-center rounded w-full"
          key={species.id}
          species={species}
          imageUrl={species.image}
        />
      )}
    </>
  );
}
