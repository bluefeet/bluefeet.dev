import { ReactNode } from 'react'

import { headerFont } from './headerFont'

export const SubSectionTitle = ({ children }: { children: ReactNode }) =>
  <h3 className={`text-sky-400 text-3xl mt-5 mb-0 ${headerFont.className}`}>{children}</h3>
