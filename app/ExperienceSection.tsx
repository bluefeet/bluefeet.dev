import formatDate from "date-fns/format";
import parseISODate from "date-fns/parseISO";
import upperFirst from "lodash/upperFirst";

import { Details } from "./Details";
import { Experience } from "@/types/Resume";
import { SectionTitle } from "./SectionTitle";
import { SubSectionTitle } from "./SubSectionTitle";
import { useRenderMarkdown } from "./RenderMarkdownContext";
import { useResume } from "./resumeContext";

const dateFormat = "MMM yyyy";

const SingleExperience = ({ experience }: { experience: Experience }) => {
  const RenderMarkdown = useRenderMarkdown();

  const detailsParts: string[] = [];

  if (experience.title) detailsParts.push(experience.title);

  if (experience.startDate) {
    const startDate = parseISODate(experience.startDate);
    const start = formatDate(startDate, dateFormat);
    const endDate = experience.endDate
      ? parseISODate(experience.endDate)
      : null;
    const end = endDate ? formatDate(endDate, dateFormat) : "Now";
    detailsParts.push(start + (end !== start ? ` - ${end}` : ""));
  }

  if (experience.employmentType)
    detailsParts.push(upperFirst(experience.employmentType));
  if (experience.workMode) detailsParts.push(upperFirst(experience.workMode));
  if (experience.location) detailsParts.push(experience.location);

  const detailsLine = detailsParts.join(" | ");

  return (
    <>
      <SubSectionTitle>{experience.companyName}</SubSectionTitle>

      {detailsLine && <Details className="mb-3">{detailsLine}</Details>}

      {experience.summary && (
        <RenderMarkdown>{experience.summary}</RenderMarkdown>
      )}

      {experience.highlights?.length && (
        <>
          <div className="typography text-sm">
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export const ExperienceSection = ({
  className = "",
}: {
  className?: string;
}) => {
  const resume = useResume();
  if (!resume.experiences?.length) return <></>;

  return (
    <>
      <section className={className}>
        <SectionTitle>Experience</SectionTitle>

        {resume.experiences.map((experience) => (
          <SingleExperience
            experience={experience}
            key={`${experience.companyName}:${experience.startDate}`}
          />
        ))}
      </section>
    </>
  );
};
