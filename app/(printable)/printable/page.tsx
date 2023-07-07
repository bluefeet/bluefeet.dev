import AboutSection from '../../AboutSection'
import Details from '../../Details'
import Divider from '../../Divider'
import ExperienceSection from '../../ExperienceSection'
import headerFont from '../../headerFont'
import InfoSection from '../../InfoSection'
import ObjectiveSection from '../../ObjectiveSection'
import resume from '../../resume'
import SkillsSection from '../../SkillsSection'

const Page = () => <>
  <header className={`pb-4 ${headerFont.className} flex justify-between items-end`}>
    <h1 className='text-5xl font-semibold'>
      {resume.contact?.fullName}
    </h1>
    <p>
      {resume.profile?.headline} • {resume.contact?.pronouns} • https://bluefeet.dev
    </p>
  </header>

  <main className='flex flex-col'>
    <div className='flex flex-wrap'>
      <AboutSection />
      <Divider />

      <ObjectiveSection className='w-1/2' />
      <InfoSection className='w-1/2' />

      <Divider />
    </div>
    <div>
      <SkillsSection />

      <ExperienceSection />
    </div>
  </main>

  <footer className='text-center pt-4'>
    <Details>
      &copy; {resume.contact?.fullName}
    </Details>
  </footer>
</>

export default Page
