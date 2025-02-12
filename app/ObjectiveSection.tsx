import { Details } from "./Details";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { useResume } from "./resumeContext";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  PhotoIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { format as formatDate } from "date-fns/format";
import { isPast as isDateInPast } from "date-fns/isPast";
import { parseISO as parseISODate } from "date-fns/parseISO";
import upperFirst from "lodash/upperFirst";

const startDateFormat = "PPP";

const Overview = () => {
  const resume = useResume();
  if (!resume.objective?.overview) return <></>;

  return (
    <>
      <ListItem Icon={PhotoIcon}>
        Dream Job Traits
        <Details>{resume.objective.overview}</Details>
      </ListItem>
    </>
  );
};

const StartDate = () => {
  const resume = useResume();
  if (!resume.objective) return <></>;

  if ((resume.objective.intention || "passive") === "passive") return <></>;

  let startDate = resume.objective.startDate
    ? parseISODate(resume.objective.startDate)
    : null;

  // Don't display if in the past.
  if (startDate && isDateInPast(startDate)) startDate = null;

  return (
    <>
      <ListItem Icon={RocketLaunchIcon}>
        {resume.objective.intention === "casual"
          ? "Open to new opportunities"
          : "Actively searching for an opportunity"}
        {
          <Details>
            Available{" "}
            {startDate ? (
              <>starting on {formatDate(startDate, startDateFormat)}</>
            ) : (
              <>immediately</>
            )}
          </Details>
        }
      </ListItem>
    </>
  );
};

const Roles = () => {
  const resume = useResume();
  if (!resume.objective?.roles?.length) return <></>;

  return (
    <>
      <ListItem Icon={Cog6ToothIcon}>
        {resume.objective.roles.length > 1 ? "These roles" : "This role"} would
        be a great match
        <Details>
          {resume.objective.roles.map((role) => (
            <div key={role}>{role}</div>
          ))}
        </Details>
      </ListItem>
    </>
  );
};

const WorkModes = () => {
  const resume = useResume();
  if (!resume.objective?.workModes?.length) return <></>;

  return (
    <>
      <ListItem Icon={BuildingOffice2Icon}>
        In{" "}
        {resume.objective.workModes.length > 1
          ? "any of these capacities"
          : "this capacity"}
        <Details>
          {resume.objective.workModes
            .map((workMode) => upperFirst(workMode))
            .join(", ")}
        </Details>
      </ListItem>
    </>
  );
};

const EmploymentTypes = () => {
  const resume = useResume();
  if (!resume.objective?.employmentTypes?.length) return <></>;

  return (
    <>
      <ListItem Icon={CalendarDaysIcon}>
        With{" "}
        {resume.objective.employmentTypes.length > 1
          ? "one of these commitments"
          : "this commitment"}
        <Details>
          {resume.objective.employmentTypes
            .map((employmentType) => upperFirst(employmentType))
            .join(", ")}
        </Details>
      </ListItem>
    </>
  );
};

export const ObjectiveSection = ({
  className = "",
}: {
  className?: string;
}) => (
  <>
    <section className={className}>
      <List>
        <Overview />
        <StartDate />
        <Roles />
        <EmploymentTypes />
        <WorkModes />
      </List>
    </section>
  </>
);
