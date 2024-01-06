import { ReactNode } from "react";

export const Details = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`text-zinc-300 text-sm ${className}`}>{children}</div>;
