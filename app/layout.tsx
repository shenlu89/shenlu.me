import "./globals.css";
import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import Providers from "@/app/components/providers";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Script from "next/script";

import LocalFont from "@/app/lib/local-font";
import { HomePage } from "@/app/data/meta-data";

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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
