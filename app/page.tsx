import { format as formatDate } from 'date-fns'
import AboutSection from './AboutSection'
import Details from './Details'
import ExperienceSection from './ExperienceSection'
import headerFont from './headerFont'
import InfoSection from './InfoSection'
import Link from './Link'
import ObjectiveSection from './ObjectiveSection'
import RecommendationsSection from './RecommendationsSection'
import resume from './resume'
import SkillsSection from './SkillsSection'

const Divider = ({ className = '' }: { className?: string }) =>
  <hr className={`w-full border-sky-600 border-solid border-1 mt-2 mb-2 print:hidden ${className}`} />

const Page = () => <>
  <header className='bg-robot lg:bg-robot-lg bg-cover bg-fixed h-screen bg-top print:hidden'>
    <div className='bg-gradient-to-b from-zinc-900 text-center md:text-right p-5 md:pr-24'>
      <h1 className='text-6xl lg:text-8xl md:pr-8'>
        {resume.contact?.fullName}
      </h1>
      <p className='pt-2 lg:pt-5 lg:pr-16 text-lg'>
        {resume.profile?.headline} • {resume.contact?.pronouns}
      </p>
    </div>
  </header>

  <header className={`pb-4 ${headerFont.className} hidden print:flex justify-between items-end`}>
    <h1 className='text-5xl font-semibold text-sky-800'>
      {resume.contact?.fullName}
    </h1>
    <p>
      {resume.profile?.headline} • {resume.contact?.pronouns} • https://bluefeet.dev
    </p>
  </header>

  <main className='flex flex-col lg:flex-row p-4 md:p-8 pt-0 lg:pt-8 ml-auto mr-auto lg:w-[58rem] xl:w-[68rem] print:p-0'>
    <div className='lg:w-2/5 flex flex-wrap lg:flex-col lg:order-2 lg:pl-4 print:flex-row print:pl-0 print:pb-2'>
      <AboutSection className='print:pb-2' />
      <Divider />

      <ObjectiveSection className='md:w-1/2 lg:w-full print:w-1/2' />
      <Divider className='md:hidden lg:block' />

      <InfoSection className='md:w-1/2 lg:w-full print:w-1/2' />
      <Divider className='lg:hidden' />
    </div>
    <div className='lg:w-3/5 lg:order-1'>
      <SkillsSection />
      <Divider className='lg:hidden mb-5' />

      <ExperienceSection />
      <Divider className='lg:hidden mt-5 mb-5' />

      <RecommendationsSection className='print:hidden' />
    </div>
  </main>

  <footer className='border-zinc-800 border-solid border-t-2 text-center p-4 print:hidden'>
    <Details>
      Site built with <Link href='https://nextjs.org/'>Next.js</Link> and <Link href='https://tailwindcss.com/'>Tailwind CSS</Link>, hosted for free by <Link href='https://pages.cloudflare.com/'>Cloudflare</Link>, source on <Link href='https://github.com/bluefeet/bluefeet.dev'>GitHub</Link>, &copy; {resume.contact?.fullName}
    </Details>
  </footer>

  <footer className='text-right pt-8 hidden print:flex justify-between'>
    <Details>Generated {formatDate(new Date, 'PPP')}</Details>
    <Details>&copy; {resume.contact?.fullName}</Details>
  </footer>
</>

export default Page
