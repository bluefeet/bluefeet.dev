import { Recommendation } from '@/types/Resume'
import Details from './Details'
import ReactMarkdown from 'react-markdown'
import SectionTitle from './SectionTitle'
import { useResume } from './resumeContext'

const Recommendation = ({ recommendation }: { recommendation: Recommendation }) => <>
  <div className='pt-4 pb-4 last:pb-0'>
    <div className='flex'>
      <div className={`text-6xl pr-4 text-sky-400`}>“</div>
      <div className='typography'>
        <ReactMarkdown>{recommendation.message}</ReactMarkdown>
      </div>
    </div>
    <div className='pl-16'>
      <p className='text-xl'>{recommendation.author}</p>
      <Details className=''>{recommendation.relationship}</Details>
    </div>
  </div>
</>

const RecommendationsSection = ({ className = '' }: { className?: string }) => {
  const resume = useResume()
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
