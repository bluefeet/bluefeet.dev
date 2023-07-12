import { ReactNode } from "react";

const Details = ({ children, className = '' }: { children: ReactNode, className?: string }) =>
  <p className={`text-zinc-300 text-sm ${className}`}>{children}</p>

export default Details
