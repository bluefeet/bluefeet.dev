import { Details } from "./Details";
import { List } from "./List";
import { ListItem } from "./ListItem";
import type { Resume } from "./resume";
import {
  formatObjectiveAvailability,
  formatObjectiveEmploymentTypesDetails,
  formatObjectiveEmploymentTypesHeading,
  formatObjectiveRolesHeading,
  formatObjectiveWorkModesDetails,
  formatObjectiveWorkModesHeading,
} from "./resumeFormatting";
import {
  BuildingOfficeIcon,
  CalendarDotsIcon,
  GearSixIcon,
  ImageIcon,
  RocketIcon,
} from "@phosphor-icons/react/ssr";

type Objective = Resume["objective"];

const Overview = ({ objective }: { objective?: Objective }) => {
  if (!objective?.overview) return <></>;

  return (
    <>
      <ListItem Icon={ImageIcon}>
        Dream Job Traits
        <Details>{objective.overview}</Details>
      </ListItem>
    </>
  );
};

const StartDate = ({ objective }: { objective?: Objective }) => {
  const availability = formatObjectiveAvailability(objective);
  if (!availability) return <></>;

  return (
    <>
      <ListItem Icon={RocketIcon}>
        {availability.title}
        <Details>{availability.details}</Details>
      </ListItem>
    </>
  );
};

const Roles = ({ objective }: { objective?: Objective }) => {
  const heading = formatObjectiveRolesHeading(objective);
  const roles = objective?.roles;
  if (!heading || !roles?.length) return <></>;

  return (
    <>
      <ListItem Icon={GearSixIcon}>
        {heading}
        <Details>
          {roles.map((role) => (
            <div key={role}>{role}</div>
          ))}
        </Details>
      </ListItem>
    </>
  );
};

const WorkModes = ({ objective }: { objective?: Objective }) => {
  const heading = formatObjectiveWorkModesHeading(objective);
  const details = formatObjectiveWorkModesDetails(objective);
  if (!heading || !details) return <></>;

  return (
    <>
      <ListItem Icon={BuildingOfficeIcon}>
        {heading}
        <Details>{details}</Details>
      </ListItem>
    </>
  );
};

const EmploymentTypes = ({ objective }: { objective?: Objective }) => {
  const heading = formatObjectiveEmploymentTypesHeading(objective);
  const details = formatObjectiveEmploymentTypesDetails(objective);
  if (!heading || !details) return <></>;

  return (
    <>
      <ListItem Icon={CalendarDotsIcon}>
        {heading}
        <Details>{details}</Details>
      </ListItem>
    </>
  );
};

export const ObjectiveSection = ({
  objective,
  className = "",
}: {
  objective?: Resume["objective"];
  className?: string;
}) => (
  <>
    <section className={className}>
      <List>
        <Overview objective={objective} />
        <StartDate objective={objective} />
        <Roles objective={objective} />
        <EmploymentTypes objective={objective} />
        <WorkModes objective={objective} />
      </List>
    </section>
  </>
);
