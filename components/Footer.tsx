import React from "react";

export function Footer() {
  return (
    <footer>
      <div className="container flex items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose md:text-left">
          &copy; {new Date().getFullYear()}{" "} YuNing&apos;s Portfolio
        </p>
      </div>
    </footer>
  );
}