import Link from "@/components/custom-link";
import SpeciesItem from "@/components/species-item";

export const runtime = 'edge';

export default function NotFound() {
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
      <SpeciesItem />
    </>
  );
}
