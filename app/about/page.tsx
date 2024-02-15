import { Metadata } from "next";
import Link from "next/link";

import { FaNodeJs, FaReact, FaRust, FaUbuntu } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import { SiVim, SiPrisma, SiRedis, SiPostgresql } from "react-icons/si";

import { AboutPage } from "@/data/meta-data";

export const metadata: Metadata = AboutPage.metadata;

const techStackIcons = [
  {
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <IoLogoJavascript className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "Rust",
    href: "https://www.rust-lang.org/",
    icon: <FaRust className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "React",
    href: "https://react.dev/",
    icon: <FaReact className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "Prisma",
    href: "https://www.prisma.io/",
    icon: <SiPrisma className="w-6 h-6" />,
    target: "_blank",
  },

  {
    title: "Node",
    href: "https://nodejs.org/en",
    icon: <FaNodeJs className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "Vercel",
    href: "https://vercel.com/",
    icon: <IoLogoVercel className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: <SiPostgresql className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: <SiRedis className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "Ubuntu",
    href: "https://ubuntu.com/",
    icon: <FaUbuntu className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "VSCode",
    href: "https://code.visualstudio.com/",
    icon: <TbBrandVscode className="w-6 h-6" />,
    target: "_blank",
  },
  {
    title: "Vim",
    href: "https://www.vim.org/",
    icon: <SiVim className="w-6 h-6" />,
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
            Hi, I’m Shen Lu 👋, a software developer with passion on web
            development and data visualization, especially in bioinformatics.
          </p>
        </div>
        <hr />
        <h2>Tech Stack</h2>
        <ul className="flex items-center space-x-2 pl-0">
          {techStackIcons.map((tech) => (
            <Link
              title={tech.title}
              key={tech.title}
              className="text-inherit hover:text-black dark:text-slate-200 dark:hover:text-white"
              href={tech.href}
              target={"_blank"}
            >
              {tech.icon}
            </Link>
          ))}
        </ul>
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
        <h2>Publications</h2>
        <strong>
          Searching large-scale scRNA-seq databases via unbiased cell embedding
        </strong>
        <p>
          Zhi-Jie Cao, Lin Wei, <strong>Shen Lu</strong>, De-Chang Yang, Ge Gao{" "}
          {` `}
          <Link
            target="_blank"
            href="https://doi.org/10.1038/s41467-020-17281-7"
          >
            [Nature Communications]
          </Link>
        </p>
        <strong>
          Genomic Architecture of Cells in Tissues (GeACT): Study of Human
          Mid-gestation Fetus
        </strong>
        <p>
          Feng Tian, Fan Zhou, Xiang Li, Wenping Ma, Honggui Wu, Ming Yang, Alec
          R. Chapman, David F. Lee, Longzhi Tan, Dong Xing, Guangjun Yin, Ayjan
          Semayel, Jing Wang, Jia Wang, Wenjie Sun, Runsheng He, Siwei Zhang,
          Zhijie Cao, Lin Wei, <strong>Shen Lu </strong>, Dechang Yang, Yunuo
          Mao, Yuan Gao, Kexuan Chen, Yu Zhang, Xixi Liu, Jun Yong, Liying Yan,
          Yanyi Huang, Jie Qiao, Fuchou Tang, Ge Gao, X. Sunney Xie {` `}
          <Link
            target="_blank"
            href="https://www.biorxiv.org/content/10.1101/2020.04.12.038000v1"
          >
            [bioRxiv]
          </Link>
        </p>
      </div>
    </div>
  );
}
