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
      <body className={isBlogSlugPage ? "text-black" : ""}>
        <div className="flex flex-col gap-4">
          <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-12 px-6">
            <div className="flex flex-col gap-4">
              <Header />
              {children}
            </div>
          </div>
          <FootNote />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}