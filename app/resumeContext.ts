import { Resume } from "./resume";
import { createContext, useContext } from "react";

const resumeContext = createContext<Resume>({});

/**
 * Used to avoid prop drilling since the resume is accessed everywhere.
 */
export const ResumeProvider = resumeContext.Provider;

/**
 * Provides access to the current resume as set by the {@link ResumeProvider}.
 */
export const useResume = () => useContext(resumeContext);
