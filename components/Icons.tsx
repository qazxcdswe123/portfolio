import { Binary, Github, Link, LucideProps, Star } from "lucide-react";

import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense } from "react";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return (
    <Suspense fallback={<Icons.link />}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export const Icons = {
  GitHub: Github,
  binary: Binary,
  star: Star,
  link: Link,
};