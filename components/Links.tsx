import { SocialItem } from "@/types/social";
import Link from "next/link";
import { siteConfig } from "@/config/SiteConfig";
import { Icon } from "@/components/Icons";


interface LinkProps {
  items?: SocialItem[];
}


function LinkItems({ items }: LinkProps) {
  return (
    <div className="container flex flex-col items-center">
      {items?.length ? (
        items?.map(
          (item, index) => {
            return (
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="mb-5 flex w-full max-w-3xl items-center rounded-md bg-gray-200 p-1 transition-all hover:scale-110"
                >
                  <span className="flex w-full items-center justify-center text-lg font-semibold text-gray-700">
                    {item.name} <Icon name={"link"} />
                  </span>
                </Link>
              )
            );
          })
      ) : null}

    </div>
  )
    ;
}

export function Links() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
      <LinkItems items={siteConfig.socials} />
    </div>
  );
}