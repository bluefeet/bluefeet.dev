import { Details } from "./Details";
import { SectionTitle } from "./SectionTitle";
import { useResume } from "./resumeContext";

export const CompetenciesSection = ({
  className = "",
}: {
  className?: string;
}) => {
  const resume = useResume();
  if (!resume.profile?.competencies?.length) return <></>;

  return (
    <>
      <section className={`mb-4 ${className}`}>
        <SectionTitle>Skills</SectionTitle>

        <div className="typography">
          <ul>
            {resume.profile.competencies.map((competency) => (
              <li key={competency.name} className="break-inside-avoid">
                {competency.name}
                <Details>{competency.skills?.join(", ")}</Details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
