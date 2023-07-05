import AboutSection from './AboutSection'
import Details from './Details'
import ExperienceSection from './ExperienceSection'
import headerFont from './headerFont'
import InfoSection from './InfoSection'
import Link from 'next/link'
import ObjectiveSection from './ObjectiveSection'
import RecommendationsSection from './RecommendationsSection'
import resume from './resume'
import SkillsSection from './SkillsSection'

const Divider = ({ className = '' }: { className?: string }) =>
  <hr className={`w-full border-sky-600 border-solid border-1 mt-2 mb-2 ${className}`} />

const Page = () => <>
  <header className='grid grid-cols-[max-content_max-content] text-white bg-zinc-800 place-content-center text-center fixed w-full h-24 md:h-28 lg:h-32 shadow-lg'>
    <img src='/avatar.jpg' alt={`Photo of ${resume.contact?.fullName}`} className='row-span-2 h-20 md:h-24 lg:h-28 rounded-full border-solid border-4 border-sky-800 mr-6' />
    <h1 className={`text-5xl lg:text-6xl self-end ${headerFont.className}`}>
      {resume.contact?.fullName}
    </h1>
    <p className={`self-start pt-1 ${headerFont.className}`}>
      {resume.profile?.headline} • {resume.contact?.pronouns}
    </p>
  </header>

  <main className='grid lg:grid-cols-[60%_40%] p-4 pt-24 md:pt-28 lg:pt-32 ml-auto mr-auto lg:w-[58rem] xl:w-[68rem]'>
    <div className='flex flex-wrap lg:flex-col lg:order-2 lg:pl-4'>
      <AboutSection className='md:w-full' />
      <Divider />

      <ObjectiveSection className='md:w-1/2 lg:w-full' />
      <Divider className='md:hidden lg:block' />

      <InfoSection className='md:w-1/2 lg:w-full' />
      <Divider className='lg:hidden' />
    </div>
    <div className='lg:order-1'>
      <SkillsSection />
      <Divider className='lg:hidden mb-5' />

      <ExperienceSection />
      <Divider className='lg:hidden mt-5 mb-5' />

      <RecommendationsSection />
    </div>
  </main>

  <footer className='bg-inherit border-zinc-800 border-solid border-t-2 text-center p-4'>
    <Details>
      Site built with <Link href='https://nextjs.org/'>Next.js</Link> and <Link href='https://tailwindcss.com/'>Tailwind CSS</Link>, hosted for free by <Link href='https://pages.cloudflare.com/'>Cloudflare</Link>, source on <Link href='https://github.com/bluefeet/bluefeet.dev'>GitHub</Link>, &copy; {resume.contact?.fullName}
    </Details>
  </footer>
</>

export default Page
