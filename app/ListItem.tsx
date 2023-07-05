import { AtSymbolIcon } from '@heroicons/react/24/solid'
import { ReactNode } from 'react'

const ListItem = ({ Icon, children }: {
  Icon: typeof AtSymbolIcon,
  children: ReactNode,
}) => <>
    <div className='p-1 pl-8 pr-8 flex place-items-center'>
      <Icon className='w-6 text-green-400' />
    </div>
    <div className='pt-2 pb-2'>{children}</div>
  </>

export default ListItem
