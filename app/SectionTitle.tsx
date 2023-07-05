import { ReactNode } from 'react'
import headerFont from './headerFont'

const SectionTitle = ({ children }: { children: ReactNode }) =>
  <h2 className={`text-section text-4xl font-bold mt-3 mb-4 ${headerFont.className}`}>{children}</h2>

export default SectionTitle
