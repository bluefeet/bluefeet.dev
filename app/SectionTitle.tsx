import { ReactNode } from "react";

import { headerFont } from "./headerFont";

export const SectionTitle = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-center print:text-left md:text-left text-sky-300 text-4xl print:text-3xl font-bold print:font-semibold mt-3 mb-4 ${headerFont.className} ${className}`}
  >
    {children}
  </h2>
);
