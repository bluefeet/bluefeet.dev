import { ReactNode } from 'react'

export const List = ({ children }: { children: ReactNode }) =>
  <div className='grid grid-cols-[min-content_auto]'>{children}</div>
