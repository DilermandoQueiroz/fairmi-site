'use client';

import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import FootNote from "@/components/FootNote";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isBlogSlugPage = pathname?.startsWith('/blog/');

  return (
    <html lang="en">
      <head>
        <title>🏥 FairMI</title>
        <meta name="description" content="Welcome to FairMI" />
      </head>
      <body className={`${isBlogSlugPage ? "text-black" : ""} min-h-screen flex flex-col`}>
        <header>
          <Header />
        </header>
        <main className="flex-grow max-w-screen-2xl mx-auto lg:px-24 md:px-12 px-6">
          {children}
        </main>
        <footer>
          <FootNote />
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}