import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

import { NavBar } from "@/components/NavBar";
import { siteConfig } from "@/config/SiteConfig";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { ThemeProvider } from "@/components/DarkMode/ThemeProvider";
import React from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Links } from "@/components/Links";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "white" },
    { media: "(prefers-color-scheme: light)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="container">
          <NavBar />
          <section id="hero" className="h-screen space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <Hero />
          </section>
          <section id="projects" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
            <h1 className="font-heading flex justify-center text-3xl leading-[1.1] sm:text-2xl md:text-4xl">
              Links
            </h1>
            <Links />
          </section>
          <section id="links"
                   className="container space-y-16 bg-neutral-50 py-16 dark:bg-transparent md:py-12 lg:py-24">
            <h1 className="font-heading flex justify-center text-3xl leading-[1.1] sm:text-2xl md:text-4xl">
              Projects
            </h1>
            <Projects />
          </section>
          <Footer />
        </div>
      </ThemeProvider>
      </body>
      </html>
    </>
  );
}
