"use client";

import { Details } from "./Details";
import { Link } from "./Link";
import { clsx } from "clsx/lite";
import { format as formatDate } from "date-fns/format";
import { useEffect, useState } from "react";

const copyright = "© Aran Clary";

const FooterForDisplay = ({ className }: { className?: string }) => (
  <footer
    className={clsx(
      "border-t-2 border-solid border-zinc-800 p-4 text-center print:hidden",
      className,
    )}
  >
    <Details>
      Site built with <Link href="https://nextjs.org/">Next.js</Link> and{" "}
      <Link href="https://tailwindcss.com/">Tailwind CSS</Link>, hosted for free
      by <Link href="https://pages.cloudflare.com/">Cloudflare</Link>, source on{" "}
      <Link href="https://github.com/bluefeet/bluefeet.dev">GitHub</Link>.
      <br />
      {copyright}
    </Details>
  </footer>
);

const FooterForPrint = () => {
  const [currentDate, setCurrentDate] = useState("");

  // Delay setting current date until after component mounts on the client side.
  useEffect(() => {
    const formattedDate = formatDate(Date.now(), "PPP");
    setCurrentDate(formattedDate);
  }, []);

  return (
    <footer className="hidden justify-between pt-8 text-right print:flex">
      <Details>Generated {currentDate}</Details>
      <Details>{copyright}</Details>
    </footer>
  );
};

export const Footer = ({ className }: { className?: string }) => (
  <>
    <FooterForDisplay className={className} />
    <FooterForPrint />
  </>
);
