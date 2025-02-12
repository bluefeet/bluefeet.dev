import { headerFont } from "./headerFont";
import { clsx } from "clsx/lite";
import { ReactNode } from "react";

export const SubSectionTitle = ({ children }: { children: ReactNode }) => (
  <h3 className={clsx("mt-5 mb-0 text-3xl text-sky-400", headerFont.className)}>
    {children}
  </h3>
);
