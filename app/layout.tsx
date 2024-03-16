import "./globals.css";
import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import Script from "next/script";

import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LocalFont from "@/lib/local-font";
import { HomePage } from "@/data/meta-data";

export const metadata: Metadata = HomePage.metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col h-screen ${LocalFont.className}`}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <main className="max-w-3xl container text-black dark:text-white mx-auto px-6 py-6 flex-1 leading-6">
            {children}
          </main>
          <Footer />
        </Providers>
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            src="https://analytics.shenlu.me/script.js"
            data-website-id="a038f8fd-006e-4094-9507-d62022b175b8"
          />
        )}
      </body>
    </html>
  );
}
