import "./globals.css";
import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`flex flex-col h-screen ${LocalFont.className}`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          <main className="max-w-3xl container text-black dark:text-white mx-auto px-6 py-6 flex-1 leading-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            src={process.env.UMAMI_SCRIPT_URL}
            data-website-id={process.env.UMAMI_DATA_WEBSITE_ID}
          />
        )}
      </body>
    </html>
  );
}
