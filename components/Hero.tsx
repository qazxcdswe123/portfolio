import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/SiteConfig";

export function Hero() {
  return (
    <>
      <div className="container my-8 flex h-52 w-52 items-center justify-center">
        <Avatar className="h-52 w-52">
          <AvatarImage src={`https://github.com/${siteConfig.githubUserNames}.png`} />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
      </div>
      <div className=" text-center">
        <h1 className="mb-8 text-5xl font-bold">
          YuNing Chen
        </h1>
        <p className="mb-3 text-3xl">
          Student, Hacker, and a <span className="italic">Life Long Learner</span>.
        </p>
        <p className="mb-1 text-xl">
          Aiming to be a world class <span className="italic">backend</span> and <span
          className="italic">system</span> developer.
        </p>
        <p className="text-lg line-through decoration-from-font">
          Probably also a Programming Language Theory enthusiast.
        </p>
      </div>
    </>
  );
}