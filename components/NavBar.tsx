import { siteConfig } from "@/config/SiteConfig";
import { ThemeToggle } from "@/components/DarkMode/ThemeToggle";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";
import { buttonVariants } from "@/components/ui/button";

function NavBarEnd() {
  return (
    <div className="flex justify-end">
      <Link className={buttonVariants({ variant: "ghost", size: "icon" })}
            href="https://github.com/qazxcdswe123/portfolio"><Icons.GitHub /></Link>
      <ThemeToggle />
    </div>
  )
    ;
}

interface NavBarProps {
  items?: NavItem[];
}

function NavBarStart({ items }: NavBarProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.binary className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 overflow-auto sm:justify-between sm:space-x-0">
        <NavBarStart items={siteConfig.navBarStartItems} />
        <NavBarEnd />
      </div>
    </header>
  );
}
