import { Resume } from "@/types/Resume";
import { createContext, useContext } from "react";

const emptyResume = {
  $schema: 'resume.schema.json',
}

const resumeContext = createContext<Resume>(emptyResume)

export const ResumeProvider = resumeContext.Provider

export const useResume = () => useContext(resumeContext)
