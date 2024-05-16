"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col pt-24 justify-center items-center space-y-8 text-lg text-black dark:text-white">
      <h1 className="text-xl">Oh no, something went wrong... maybe refresh?</h1>
      <button
        className="px-4 py-2 rounded-full font-bold text-sm bg-black hover:opacity-75 text-white dark:bg-white dark:text-black"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
