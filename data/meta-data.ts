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
    description: "Building amazing things in public.",
    openGraph: {
      title: "Shen Lu",
      description: "Building amazing things in public.",
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
  description: "Building amazing things in public.",
  url: "https://shenlu.me",
  avatar_url: "/images/avatar.jpg",
};

const WorksPage = {
  metadata: {
    title: "Works",
    description: "The works I had made over the years.",
  },
  showcase: [
    {
      href: "https://mathcheap.xyz",
      title: "Mathcheap",
      logoUrl: "/images/mathcheap-logo.svg",
      imageUrl: "/images/mathcheap-showcase.png",
      description: "An AI-powered, free alternative to Mathpix Snip.",
    },
    {
      href: "https://gre.shenlu.me",
      title: "GRE GO",
      logoUrl: "/images/grego-logo.svg",
      imageUrl: "/images/grego-showcase.png",
      description:
        "A toolkit that can help you practice and prepare effectively for the GRE Analytical Writing.",
    },
    {
      href: "https://aes.shenlu.me",
      title: "Amazing Endemic Species",
      logoUrl: "/images/aes-logo.svg",
      imageUrl: "/images/aes-showcase.png",
      description:
        "An open-source, community-driven SaaS (Species-as-a-Service) application.",
    },
  ],
};

const AboutPage = {
  metadata: { title: "About", description: "That is all about me." },
};

export { HeaderNavLinks, HomePage, WorksPage, AboutPage };
