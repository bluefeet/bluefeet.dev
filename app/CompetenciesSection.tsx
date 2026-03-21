import { Details } from "./Details";
import { SectionTitle } from "./SectionTitle";
import type { Resume } from "./resume";
import { clsx } from "clsx/lite";

type Competencies = NonNullable<Resume["profile"]>["competencies"];

type CompetenciesSectionProps = {
  competencies?: Competencies;
  className?: string;
};

export const CompetenciesSection = ({
  competencies,
  className = "",
}: CompetenciesSectionProps) => {
  if (!competencies?.length) return <></>;

  return (
    <>
      <section className={clsx("mb-4", className)}>
        <SectionTitle>Skills</SectionTitle>

        <div className="typography">
          <ul>
            {competencies.map((competency) => (
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
