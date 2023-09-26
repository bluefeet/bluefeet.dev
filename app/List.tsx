import { ReactNode } from 'react'

const List = ({ children }: { children: ReactNode }) =>
  <div className='grid grid-cols-[min-content_auto]'>{children}</div>

export default List
