/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type UniqueStrings = string[];
export type WorkMode = "on-site" | "hybrid" | "remote";
export type EmploymentType =
  | "full-time"
  | "part-time"
  | "self-employed"
  | "freelance"
  | "contract"
  | "internship"
  | "apprenticeship"
  | "seasonal";
export type ApproximateDate = string | string;
export type Experiences = Experience[];
export type Recommendations = Recommendation[];

/**
 * The professional experiences and skills of an individual
 */
export interface Resume {
  $schema: string;
  contact?: Contact;
  profile?: Profile;
  objective?: Objective;
  experiences?: Experiences;
  recommendations?: Recommendations;
}
export interface Contact {
  fullName?: string;
  casualName?: string;
  pronouns?: string;
  location?: string;
  emailAddress?: string;
  phoneNumber?: string;
}
export interface Profile {
  headline?: string;
  about?: string;
  skills?: Skill[];
  languages?: UniqueStrings;
  resources?: Resource[];
}
export interface Skill {
  name: string;
  competencies?: UniqueStrings;
}
export interface Resource {
  title?: string;
  uri: string;
}
export interface Objective {
  /**
   * The date when first available for hire. A date in the past or no date is considered to mean immediately.
   */
  startDate?: string;
  /**
   * Taking extended time to find the best fit.
   */
  isCasual?: boolean;
  willingToRelocate?: boolean;
  roles?: UniqueStrings;
  workModes?: WorkMode[];
  employmentTypes?: EmploymentType[];
}
export interface Experience {
  companyName?: string;
  title?: string;
  employmentType?: EmploymentType;
  location?: string;
  workMode?: WorkMode;
  startDate?: ApproximateDate;
  endDate?: ApproximateDate;
  summary?: string;
  highlights?: UniqueStrings;
}
export interface Recommendation {
  author: string;
  relationship: string;
  message: string;
}
