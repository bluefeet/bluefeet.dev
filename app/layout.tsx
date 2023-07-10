import './globals.css'
import { Open_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import resume from './resume'

const mainFont = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: `${resume.contact?.fullName}: ${resume.profile?.headline}`,
  description: `${resume.profile?.about}`,
}

const Layout = ({ children }: { children: ReactNode }) =>
  <html lang='en'>
    <body className={`dark:text-white dark:bg-zinc-900 ${mainFont.className}`}>
      {children}
    </body>
  </html>

export default Layout
