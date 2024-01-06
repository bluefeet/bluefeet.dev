import { ReactNode } from "react";

export const Link = ({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    className={`text-sky-400 underline decoration-sky-800 hover:decoration-sky-400 print:text-black print:no-underline ${className}`}
  >
    {children}
  </a>
);
