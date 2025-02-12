import { clsx } from "clsx/lite";
import { ReactNode } from "react";

export const Details = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={clsx("text-sm text-zinc-300", className)}>{children}</div>
);
