import Details from './Details'
import SectionTitle from './SectionTitle'
import { useResume } from './resumeContext'

const SkillsSection = ({ className = '' }: { className?: string }) => {
  const resume = useResume()
  if (!resume.profile?.skills?.length) return <></>

  return <>
    <section className={`mb-4 ${className}`}>
      <SectionTitle>Skills</SectionTitle>

      <div className='typography'>
        <ul>{resume.profile.skills.map((skill) => <li key={skill.name} className='break-inside-avoid'>
          {skill.name}
          <Details>{skill.competencies?.join(', ')}</Details>
        </li>)}</ul>
      </div>
    </section>
  </>
}

export default SkillsSection
