import '../globals.css'
import { ReactNode } from 'react'
import mainFont from '../mainFont'
import resume from '../resume'

export const metadata = {
  title: `${resume.contact?.fullName}: ${resume.profile?.headline}`,
  description: `${resume.profile?.about}`,
}

const Layout = ({ children }: { children: ReactNode }) =>
  <html lang='en'>
    <body className={`printable text-text bg-background ${mainFont.className}`}>
      {children}
    </body>
  </html>

export default Layout
