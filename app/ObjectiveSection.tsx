import { Details } from "./Details";
import { List } from "./List";
import { ListItem } from "./ListItem";
import type { Resume } from "./resume";
import {
  BuildingOfficeIcon,
  CalendarDotsIcon,
  GearSixIcon,
  ImageIcon,
  RocketIcon,
} from "@phosphor-icons/react";
import { format as formatDate } from "date-fns/format";
import { isPast as isDateInPast } from "date-fns/isPast";
import { parseISO as parseISODate } from "date-fns/parseISO";
import { capitalize } from "remeda";

const startDateFormat = "PPP";

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
  if (!objective) return <></>;

  if ((objective.intention || "passive") === "passive") return <></>;

  let startDate = objective.startDate ? parseISODate(objective.startDate) : null;

  // Don't display if in the past.
  if (startDate && isDateInPast(startDate)) startDate = null;

  return (
    <>
      <ListItem Icon={RocketIcon}>
        {objective.intention === "casual"
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

const Roles = ({ objective }: { objective?: Objective }) => {
  if (!objective?.roles?.length) return <></>;

  return (
    <>
      <ListItem Icon={GearSixIcon}>
        {objective.roles.length > 1 ? "These roles" : "This role"} would be a
        great match
        <Details>
          {objective.roles.map((role) => (
            <div key={role}>{role}</div>
          ))}
        </Details>
      </ListItem>
    </>
  );
};

const WorkModes = ({ objective }: { objective?: Objective }) => {
  if (!objective?.workModes?.length) return <></>;

  return (
    <>
      <ListItem Icon={BuildingOfficeIcon}>
        In{" "}
        {objective.workModes.length > 1
          ? "any of these capacities"
          : "this capacity"}
        <Details>
          {objective.workModes.map((workMode) => capitalize(workMode)).join(", ")}
        </Details>
      </ListItem>
    </>
  );
};

const EmploymentTypes = ({ objective }: { objective?: Objective }) => {
  if (!objective?.employmentTypes?.length) return <></>;

  return (
    <>
      <ListItem Icon={CalendarDotsIcon}>
        With{" "}
        {objective.employmentTypes.length > 1
          ? "one of these commitments"
          : "this commitment"}
        <Details>
          {objective.employmentTypes
            .map((employmentType) => capitalize(employmentType))
            .join(", ")}
        </Details>
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
