import ReactMarkdown from 'react-markdown'
import resume from './resume'
import SectionTitle from './SectionTitle'

const AboutSection = ({ className = '' }: { className?: string }) => {
  if (!resume.profile?.about) return <></>

  return <>
    <section className={`md:flex lg:block pt-2 md:pt-0 ${className}`}>
      <SectionTitle className='text-center lg:text-left md:pr-8 lg:pr-0 print:hidden'>About</SectionTitle>

      <div className='typography'>
        <ReactMarkdown>{resume.profile.about}</ReactMarkdown>
      </div>
    </section>
  </>
}

export default AboutSection
