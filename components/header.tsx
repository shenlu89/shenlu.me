"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HeaderNavLinks } from "@/data/meta-data";
import ThemeSwitcher from "@/components/theme-switcher";

const Header: NextPage = () => {
  const pathname = usePathname();

  return (
    <header className="flex max-w-3xl container mx-auto px-6 py-4">
      <nav className="flex w-full">
        <ul className="flex flex-1 ml-[-0.5rem] justify-center md:flex-row md:justify-start space-x-4 md:space-x-0">
          {HeaderNavLinks?.map((nav: any) => (
            <li key={nav?.title}>
              <Link
                className={`flex p-2 underline-offset-4  ${
                  pathname === nav?.href
                    ? "underline"
                    : "text-slate-600 hover:text-black hover:underline outline-none dark:text-slate-400 dark:hover:text-slate-200"
                }`}
                href={nav?.href}
              >
                {nav?.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="fixed md:relative left-6 md:!left-0 bottom-6 md:!bottom-0 z-50">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
