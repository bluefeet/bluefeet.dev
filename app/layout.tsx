import './globals.css'
import { Open_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import { resume } from './resume'
import { UnjestableProviders } from './UnjestableProviders'

const mainFont = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: `${resume.contact?.fullName}: ${resume.profile?.headline}`,
  description: `${resume.profile?.about}`,
}

const Layout = ({ children }: { children: ReactNode }) =>
  <html lang='en'>
    <body className={`text-white bg-zinc-900 print:text-black print:bg-white ${mainFont.className}`}>
      <UnjestableProviders>
        {children}
      </UnjestableProviders>
    </body>
  </html>

export default Layout
