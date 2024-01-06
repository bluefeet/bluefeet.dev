import { Resume } from "@/types/Resume";
import rawResume from "@/public/resume.json";

/**
 * The full, from JSON, {@link rawResume} cast as a {@link Resume}.
 */
export const resume = rawResume as Resume;
