import { Details } from "./Details";
import { useRenderMarkdown } from "./RenderMarkdownContext";
import { SectionTitle } from "./SectionTitle";
import type { Recommendation } from "./resume";
import { useResume } from "./resumeContext";

const Recommendation = ({
  recommendation,
}: {
  recommendation: Recommendation;
}) => {
  const RenderMarkdown = useRenderMarkdown();

  return (
    <div className="pt-4 pb-4 last:pb-0">
      <div className="flex">
        <div className="pr-4 text-6xl text-sky-400">“</div>
        <div className="typography">
          <RenderMarkdown>{recommendation.message}</RenderMarkdown>
        </div>
      </div>
      <div className="pl-16">
        <p className="text-xl">{recommendation.author}</p>
        <Details className="">{recommendation.relationship}</Details>
      </div>
    </div>
  );
};

export const RecommendationsSection = ({
  className = "",
}: {
  className?: string;
}) => {
  const resume = useResume();
  if (!resume.recommendations?.length) return <></>;

  return (
    <>
      <section className={className}>
        <SectionTitle>Recommendations</SectionTitle>

        {resume.recommendations.map((recommendation) => (
          <Recommendation
            recommendation={recommendation}
            key={`${recommendation.author}`}
          />
        ))}
      </section>
    </>
  );
};
