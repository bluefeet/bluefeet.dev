import { ReactNode } from 'react'
import { Recommendation } from '@/types/Resume'
import Details from './Details'
import ReactMarkdown from 'react-markdown'
import resume from './resume'
import SectionTitle from './SectionTitle'
import SubSectionTitle from './SubSectionTitle'

const Recommendation = ({ recommendation }: { recommendation: Recommendation }) => <>
  <div className='flex pt-8'>
    <div className={`text-6xl pr-4 text-sky-400`}>“</div>
    <div className='typography'>
      <ReactMarkdown>{recommendation.message}</ReactMarkdown>
    </div>
  </div>
  <div className='text-right pt-2 pb-8 pr-2'>
    <p className='text-xl'>- {recommendation.author}</p>
    <Details className='pl-16'>{recommendation.relationship}</Details>
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
