import { Recommendation } from '@/types/Resume'
import Details from './Details'
import ReactMarkdown from 'react-markdown'
import resume from './resume'
import SectionTitle from './SectionTitle'
import SubSectionTitle from './SubSectionTitle'

const Recommendation = ({ recommendation }: { recommendation: Recommendation }) => <>
    <SubSectionTitle>
      {recommendation.author}
    </SubSectionTitle>
    <div className='typography'>
      <Details>{recommendation.relationship}</Details>
      <ReactMarkdown>{recommendation.message}</ReactMarkdown>
    </div>
  </>

const RecommendationsSection = ({ className = '' }: { className?: string }) => {
  if (!resume.recommendations?.length) return <></>

  return <>
    <section className={className}>
      <SectionTitle>Recommendations</SectionTitle>
      {resume.recommendations.map((recommendation) =>
        <Recommendation
          recommendation={recommendation}
          key={`${recommendation.author}`}
        />
      )}
    </section>
  </>
}

export default RecommendationsSection
