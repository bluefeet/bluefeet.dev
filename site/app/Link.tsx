import NextLink from 'next/link'
import { ReactNode } from 'react'

const Link = ({
  href,
  className = '',
  children,
  external = false,
}: {
  href: string,
  className?: string,
  children: ReactNode,
  external?: boolean,
}) =>
  <NextLink
    href={href}
    prefetch={!external}
    passHref={external}
    className={`text-sky-400 underline decoration-sky-800 hover:decoration-sky-400 print:text-black print:no-underline ${className}`}
  >
    {children}
  </NextLink>

export default Link
