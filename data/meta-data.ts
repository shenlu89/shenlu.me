const HeaderNavLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Works",
    href: "/works",
  },
  {
    title: "About",
    href: "/about",
  },
];

const HomePage = {
  metadata: {
    metadataBase: new URL("https://shenlu.me"),
    title: {
      default: "Shen Lu's Blog",
      template: `%s | Shen Lu's Blog`,
    },
    description: "A full-stack developer and data visualisation enthusiast.",
    openGraph: {
      title: "Shen Lu",
      description: "A full-stack developer and data visualisation enthusiast.",
      url: "https://shenlu.me",
      siteName: "Shen Lu",
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "Shen Lu",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    icons: {
      shortcut: "/icon.svg",
    },
  },
  title: "Shen Lu",
  description: "A full-stack developer and data visualisation enthusiast",
  motto: "Thinking merely poses questions, action will bring all answers.",
  url: "https://shenlu.me",
  avatar_url: "/images/avatar.jpg",
};

const WorksPage = {
  metadata: {
    title: "Works",
    description: "The works I had made over the years.",
  },
};

const AboutPage = {
  metadata: { title: "About", description: "That is all about me." },
};

export { HeaderNavLinks, HomePage, WorksPage, AboutPage };
