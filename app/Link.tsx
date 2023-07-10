import NextLink from 'next/link'
import { ReactNode } from 'react'

const Link = ({href,children}:{href:string,children:ReactNode}) =>
  <NextLink href={href} className='text-sky-800 dark:text-sky-400 underline decoration-sky-200 dark:decoration-sky-800 hover:decoration-sky-800 dark:hover:decoration-sky-400 print:text-black print:no-underline'>
    {children}
  </NextLink>

export default Link
