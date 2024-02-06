import Image from "next/image";
import Link from "next/link";
import _404 from "public/images/not-found.jpeg";

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
      <Image src={_404} alt={"Drawing hands by M.C. Escher"} priority />
    </>
  );
}
