import Link from "next/link";
import { FaGithub, FaXTwitter, FaDiscord, FaMedium } from "react-icons/fa6";

const SocialIcons = [
  {
    title: "Discord",
    href: "https://discord.gg/QqucGZFRz7",
    icon: <FaDiscord className="size-6" />,
    target: "_blank",
  },
  {
    title: "X",
    href: "https://twitter.com/shenlu89",
    icon: <FaXTwitter className="size-6" />,
    target: "_blank",
  },
  {
    title: "GitHub",
    href: "https://github.com/shenlu89/shenlu.me",
    icon: <FaGithub className="size-6" />,
    target: "_blank",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse md:flex-row space-y-reverse space-y-4 md:space-y-0 text-center justify-between max-w-3xl container mx-auto p-6 text-slate-400 tracking-tight">
      <p className="text-slate-600 dark:text-slate-400">
        {`© ${new Date().getFullYear()}`}
        <Link
          className="hover:underline hover:text-black dark:hover:text-white underline-offset-[3px]"
          href={"https://github.com/shenlu89"}
          target={"_blank"}
        >
          {" "}
          Shen Lu
        </Link>
        . All rights reserved.
      </p>
      <ul className="flex justify-center items-center space-x-2">
        {SocialIcons.map((social) => (
          <Link
            className="flex hover:text-black dark:hover:text-white"
            title={social.title}
            key={social.title}
            href={social.href}
            target={social.target}
          >
            {social.icon}
          </Link>
        ))}
      </ul>
    </footer>
  );
}
