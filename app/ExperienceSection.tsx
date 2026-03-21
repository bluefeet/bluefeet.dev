import { Details } from "./Details";
import { RenderMarkdown } from "./RenderMarkdown";
import { SectionTitle } from "./SectionTitle";
import { SubSectionTitle } from "./SubSectionTitle";
import {
  formatExperienceDetails,
  formatExperienceSkillsText,
} from "./resumeFormatting";
import type { Experience } from "./resume";

const SingleExperience = ({ experience }: { experience: Experience }) => {
  const detailsLine = formatExperienceDetails(experience);
  const skillsText = formatExperienceSkillsText(experience);

  return (
    <>
      <SubSectionTitle>{experience.companyName}</SubSectionTitle>

      {detailsLine && <Details className="mb-3">{detailsLine}</Details>}

      {experience.summary && (
        <RenderMarkdown className="mb-3">{experience.summary}</RenderMarkdown>
      )}

      {experience.highlights?.length && (
        <>
          <div className="typography mb-3 text-sm">
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {skillsText && <div className="typography mb-3">{skillsText}</div>}
    </>
  );
};

export const ExperienceSection = ({
  experiences,
  className = "",
}: {
  experiences?: Experience[];
  className?: string;
}) => {
  if (!experiences?.length) return <></>;

  return (
    <>
      <section className={className}>
        <SectionTitle className="print:break-before-page">
          Experience
        </SectionTitle>

        {experiences.map((experience) => (
          <SingleExperience
            experience={experience}
            key={`${experience.companyName}:${experience.startDate}`}
          />
        ))}
      </section>
    </>
  );
};
