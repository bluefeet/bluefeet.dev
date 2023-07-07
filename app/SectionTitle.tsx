import { ReactNode } from 'react'
import headerFont from './headerFont'

const SectionTitle = ({ children, className='' }: { children: ReactNode, className?:string }) =>
  <h2 className={`text-section text-4xl printable:text-3xl font-bold printable:font-semibold mt-3 mb-4 ${headerFont.className} ${className}`}>{children}</h2>

export default SectionTitle
