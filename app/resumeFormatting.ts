import type { Experience, Resume } from "./resume";
import { format as formatDate } from "date-fns/format";
import { isPast as isDateInPast } from "date-fns/isPast";
import { parseISO as parseISODate } from "date-fns/parseISO";
import { capitalize } from "remeda";

const experienceDateFormat = "MMM yyyy";
const objectiveStartDateFormat = "PPP";

type Objective = Resume["objective"];

export const formatExperienceDateRange = (
  startDate?: string,
  endDate?: string,
) => {
  if (!startDate) return null;

  const start = formatDate(parseISODate(startDate), experienceDateFormat);
  const end = endDate
    ? formatDate(parseISODate(endDate), experienceDateFormat)
    : "Now";

  return `${start}  - ${end}`;
};

export const formatExperienceDetails = (experience: Experience) => {
  const detailsParts: string[] = [];

  if (experience.title) detailsParts.push(experience.title);

  const dateRange = formatExperienceDateRange(
    experience.startDate,
    experience.endDate,
  );
  if (dateRange) detailsParts.push(dateRange);

  if (experience.employmentType)
    detailsParts.push(capitalize(experience.employmentType));
  if (experience.workMode) detailsParts.push(capitalize(experience.workMode));
  if (experience.location) detailsParts.push(experience.location);

  return detailsParts.join(" | ");
};

export const formatExperienceSkillsText = (experience: Experience) => {
  if (!experience.skills?.length) return null;

  return `Skills I ${
    experience.endDate ? "used" : "am using"
  } during this time include${
    experience.endDate ? "d " : " "
  }${experience.skills.slice(0, experience.skills.length - 1).join(", ")}, and ${experience.skills.slice(-1)}.`;
};

export const formatObjectiveAvailability = (objective?: Objective) => {
  if (!objective || (objective.intention || "passive") === "passive") {
    return null;
  }

  let startDate = objective.startDate
    ? parseISODate(objective.startDate)
    : null;

  if (startDate && isDateInPast(startDate)) startDate = null;

  return {
    title:
      objective.intention === "casual"
        ? "Open to new opportunities"
        : "Actively searching for an opportunity",
    details: startDate
      ? `Available starting on ${formatDate(startDate, objectiveStartDateFormat)}`
      : "Available immediately",
  };
};

export const formatObjectiveRolesHeading = (objective?: Objective) => {
  if (!objective?.roles?.length) return null;

  return `${objective.roles.length > 1 ? "These roles" : "This role"} would be a great match`;
};

export const formatObjectiveWorkModesHeading = (objective?: Objective) => {
  if (!objective?.workModes?.length) return null;

  return `In ${
    objective.workModes.length > 1 ? "any of these capacities" : "this capacity"
  }`;
};

export const formatObjectiveWorkModesDetails = (objective?: Objective) => {
  if (!objective?.workModes?.length) return null;

  return objective.workModes.map((workMode) => capitalize(workMode)).join(", ");
};

export const formatObjectiveEmploymentTypesHeading = (
  objective?: Objective,
) => {
  if (!objective?.employmentTypes?.length) return null;

  return `With ${
    objective.employmentTypes.length > 1
      ? "one of these commitments"
      : "this commitment"
  }`;
};

export const formatObjectiveEmploymentTypesDetails = (
  objective?: Objective,
) => {
  if (!objective?.employmentTypes?.length) return null;

  return objective.employmentTypes
    .map((employmentType) => capitalize(employmentType))
    .join(", ");
};
