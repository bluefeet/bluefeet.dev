import { headerFont } from "./headerFont";
import { clsx } from "clsx/lite";
import { ReactNode } from "react";

export const SectionTitle = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={clsx(
      "mt-3 mb-4 text-center text-4xl font-bold text-sky-300 md:text-left print:text-left print:text-3xl print:font-semibold",
      headerFont.className,
      className,
    )}
  >
    {children}
  </h2>
);
