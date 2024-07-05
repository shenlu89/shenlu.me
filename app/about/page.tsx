import { Metadata } from "next";
import Link from "@/components/custom-link";
import { FaNodeJs, FaReact, FaRust, FaUbuntu, FaPython } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiVim,
  SiPrisma,
  SiRedis,
  SiPostgresql,
  SiSqlite,
  SiDrizzle,
} from "react-icons/si";

import { AboutPage } from "@/data/meta-data";

export const metadata: Metadata = AboutPage.metadata;

const techStackIcons = [
  {
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <IoLogoJavascript className="size-6" />,
    target: "_blank",
  },
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: <FaPython className="size-6" />,
    target: "_blank",
  },
  {
    title: "Rust",
    href: "https://www.rust-lang.org/",
    icon: <FaRust className="size-6" />,
    target: "_blank",
  },
  {
    title: "React",
    href: "https://react.dev/",
    icon: <FaReact className="size-6" />,
    target: "_blank",
  },
  {
    title: "Prisma",
    href: "https://www.prisma.io/",
    icon: <SiPrisma className="size-6" />,
    target: "_blank",
  },
  {
    title: "Drizzle",
    href: "https://orm.drizzle.team/",
    icon: <SiDrizzle className="size-6" />,
    target: "_blank",
  },
  {
    title: "Node",
    href: "https://nodejs.org/en",
    icon: <FaNodeJs className="size-6" />,
    target: "_blank",
  },
  {
    title: "Vercel",
    href: "https://vercel.com/",
    icon: <IoLogoVercel className="size-6" />,
    target: "_blank",
  },
  {
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: <SiPostgresql className="size-6" />,
    target: "_blank",
  },
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: <SiRedis className="size-6" />,
    target: "_blank",
  },
  {
    title: "SQLite",
    href: "https://sqlite.org/",
    icon: <SiSqlite className="size-6" />,
    target: "_blank",
  },
  {
    title: "Ubuntu",
    href: "https://ubuntu.com/",
    icon: <FaUbuntu className="size-6" />,
    target: "_blank",
  },
  {
    title: "VSCode",
    href: "https://code.visualstudio.com/",
    icon: <TbBrandVscode className="size-6" />,
    target: "_blank",
  },
  {
    title: "Vim",
    href: "https://www.vim.org/",
    icon: <SiVim className="size-6" />,
    target: "_blank",
  },
];

export default function About() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>About</h1>
      <div>
        <div>
          <p>
            Hi, I’m Shen Lu 👋, a solopreneur and data visualization enthusiast,
            especially in bioinformatics.
          </p>
        </div>
        <hr />
        <h2>Education</h2>
        <p>
          2012-2016,{" "}
          <b>Bachelor Degree in Bioinformatics and Computational Biology</b>,
          College of Liberal Arts and Sciences ,{" "}
          <Link target="_blank" href="https://www.iastate.edu/">
            [Iowa State University]
          </Link>
        </p>
        <hr />
        <h2>Tech Stack</h2>
        <ul className="flex items-center space-x-2 pl-0 flex-wrap">
          {techStackIcons.map((tech) => (
            <Link
              title={tech.title}
              key={tech.title}
              className="text-inherit hover:text-black mb-2 dark:text-slate-200 dark:hover:text-white"
              href={tech.href}
              target={"_blank"}
            >
              {tech.icon}
            </Link>
          ))}
        </ul>
        <hr />
        <h2>Analytics</h2>
        <Link href="https://analytics.shenlu.me/share/apltJrEeXUVit3sP/shenlu.me">
          shenlu.me
        </Link>
      </div>
    </div>
  );
}
