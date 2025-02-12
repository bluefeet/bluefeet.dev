import zResume from "./zResume";
import rawResume from "@/public/resume.json";
import { z } from "zod";

/**
 * The full, from JSON, {@link rawResume} cast as a {@link Resume}.
 */
export const resume = zResume.parse(rawResume);

export type Resume = z.infer<typeof zResume>;

const zExperience = zResume.shape.experiences.unwrap().element;
export type Experience = z.infer<typeof zExperience>;

const zRecommendation = zResume.shape.recommendations.unwrap().element;
export type Recommendation = z.infer<typeof zRecommendation>;
