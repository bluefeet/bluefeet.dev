import { ReactNode } from 'react'
import headerFont from './headerFont'

const SectionTitle = ({ children }: { children: ReactNode }) =>
  <h2 className={`text-zinc-600 dark:text-sky-300 text-4xl print:text-3xl font-bold print:font-semibold mt-3 mb-4 ${headerFont.className}`}>{children}</h2>

export default SectionTitle
