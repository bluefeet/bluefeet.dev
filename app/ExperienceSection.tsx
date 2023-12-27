import { Experience } from '@/types/Resume'
import Details from './Details'
import parseISODate from 'date-fns/parseISO'
import formatDate from 'date-fns/format'
import ReactMarkdown from 'react-markdown'
import resume from './resume'
import SectionTitle from './SectionTitle'
import upperFirst from 'lodash/upperFirst'
import SubSectionTitle from './SubSectionTitle'

const dateFormat = 'MMM yyyy'

const SingleExperience = ({ experience }: { experience: Experience }) => {
  const metaParts: string[] = []

  if (experience.title) metaParts.push(experience.title)

  if (experience.startDate) {
    const startDate = parseISODate(experience.startDate)
    const start = formatDate(startDate, dateFormat)
    const endDate = experience.endDate ? parseISODate(experience.endDate) : new Date()
    const end = experience.endDate ? formatDate(endDate, dateFormat) : 'Now'
    metaParts.push(start + (end !== start ? ` - ${end}` : ''))
  }

  if (experience.employmentType) metaParts.push(upperFirst(experience.employmentType))
  if (experience.workMode) metaParts.push(upperFirst(experience.workMode))
  if (experience.location) metaParts.push(experience.location)

  const metaLine = metaParts.join(' | ')

  return <>
    <SubSectionTitle>
      {experience.companyName}
    </SubSectionTitle>

    <div className='typography'>
      <Details>{metaLine}</Details>

      {experience.summary &&
        <ReactMarkdown>{experience.summary}</ReactMarkdown>
      }

      {experience.highlights?.length && <>
        <ul className='text-sm'>
          {experience.highlights.map((highlight) =>
            <li key={highlight}>{highlight}</li>
          )}
        </ul>
      </>}
    </div>
  </>
}

const ExperienceSection = ({ className = '' }: { className?: string }) => {
  if (!resume.experiences?.length) return <></>

  return <>
    <section className={className}>
      <SectionTitle>Experience</SectionTitle>

      {resume.experiences.map((experience) =>
        <SingleExperience
          experience={experience}
          key={`${experience.companyName}:${experience.startDate}`}
        />
      )}
    </section>
  </>
}

export default ExperienceSection
