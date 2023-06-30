import Details from './Details'
import resume from './resume'
import SectionTitle from './SectionTitle'

const SkillsSection = ({ className = '' }: { className?: string }) => {
  if (!resume.profile?.skills?.length) return <></>

  return <>
    <section className={className}>
      <SectionTitle>Skills</SectionTitle>

      <div className='typography mb-6'>
        <ul>{resume.profile.skills.map((skill) => <li key={skill.name}>
          {skill.name}
          <Details>{skill.competencies?.join(', ')}</Details>
        </li>)}</ul>
      </div>
    </section>
  </>
}

export default SkillsSection
