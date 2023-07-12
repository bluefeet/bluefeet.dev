import { ReactNode } from "react";

const Details = ({ children, className = '' }: { children: ReactNode, className?: string }) =>
  <p className={`text-zinc-400 text-sm ${className}`}>{children}</p>

export default Details
