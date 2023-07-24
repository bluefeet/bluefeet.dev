import NextLink from 'next/link'
import { ReactNode } from 'react'

const Link = ({ href, className = '', children }: { href: string, className?: string, children: ReactNode }) =>
  <NextLink href={href} className={`text-sky-400 underline decoration-sky-800 hover:decoration-sky-400 print:text-black print:no-underline ${className}`}>
    {children}
  </NextLink>

export default Link
