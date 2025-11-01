import "./globals.css";
import { resume } from "./resume";
import { clsx } from "clsx/lite";
import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";

const mainFont = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: `${resume.contact?.fullName}: ${resume.profile?.headline}`,
  description: `${resume.profile?.about}`,
};

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body
      className={clsx(
        "bg-zinc-900 text-white print:bg-white print:text-black",
        mainFont.className,
      )}
    >
      {children}
    </body>
  </html>
);

export default Layout;
