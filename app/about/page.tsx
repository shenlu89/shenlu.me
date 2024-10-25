import { Metadata } from "next";
import Link from "@/components/custom-link";
import Image from "next/image"
import { FaNodeJs, FaReact, FaRust, FaUbuntu, FaPython, FaDocker } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { TbBrandVscode, TbBrandThreejs } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { DiRedis } from "react-icons/di";

import {
  SiVim,
  SiPrisma,
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
  },
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: <FaPython className="size-6" />,
  },
  {
    title: "Rust",
    href: "https://www.rust-lang.org/",
    icon: <FaRust className="size-6" />,
  },
  {
    title: "React",
    href: "https://react.dev/",
    icon: <FaReact className="size-6" />,
  },
  {
    title: "Three.js",
    href: "https://threejs.org/",
    icon: <TbBrandThreejs className="size-6" />,
  },
  {
    title: "Prisma",
    href: "https://www.prisma.io/",
    icon: <SiPrisma className="size-6" />,
  },
  {
    title: "Drizzle",
    href: "https://orm.drizzle.team/",
    icon: <SiDrizzle className="size-6" />,
  },
  {
    title: "Node",
    href: "https://nodejs.org/en",
    icon: <FaNodeJs className="size-6" />,
  },
  {
    title: "Vercel",
    href: "https://vercel.com/",
    icon: <IoLogoVercel className="size-6" />,
  },
  {
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: <SiPostgresql className="size-6" />,
  },
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: <DiRedis className="size-9" />,
  },
  {
    title: "SQLite",
    href: "https://sqlite.org/",
    icon: <SiSqlite className="size-6" />,
  },
  {
    title: "Docker",
    href: "https://docker.com/",
    icon: <FaDocker className="size-7" />,
  },
  {
    title: "Ubuntu",
    href: "https://ubuntu.com/",
    icon: <FaUbuntu className="size-6" />,
  },
  {
    title: "VSCode",
    href: "https://code.visualstudio.com/",
    icon: <TbBrandVscode className="size-7" />,
  },
  {
    title: "Vim",
    href: "https://www.vim.org/",
    icon: <SiVim className="size-6" />,
  },
];

export default function About() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>About</h1>
      <div>
        <div>
          <p>
            Hi👋. I'm Shen Lu, an indie developer and data visualization enthusiast, especially in bioinformatics.
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
            >
              {tech.icon}
            </Link>
          ))}
        </ul>
        <hr />
        <h2>Contact</h2>
        <li className="flex items-center space-x-2 mb-4" title="Email">
          <TfiEmail className="w-5 h-5" />
          <Link
            href="mailto: shelu89dev@gmail.com"
            className="underline-offset-[3px] hover:underline hover:text-black"
          >
            shenlu89dev@gmail.com
          </Link>
        </li>
      </div>
    </div>
  );
}
