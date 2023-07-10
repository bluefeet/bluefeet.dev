import ReactMarkdown from 'react-markdown'
import resume from './resume'
import SectionTitle from './SectionTitle'

const AboutSection = ({ className = '' }: { className?: string }) => {
  if (!resume.profile?.about) return <></>

  return <>
    <section className={className}>
      <SectionTitle className='print:hidden'>About</SectionTitle>

      <div className='typography'>
        <ReactMarkdown>{resume.profile.about}</ReactMarkdown>
      </div>
    </section>
  </>
}

export default AboutSection
