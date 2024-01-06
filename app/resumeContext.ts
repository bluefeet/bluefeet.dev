import { createContext, useContext } from 'react'
import { Resume } from '@/types/Resume'

/**
 * The default resume if none is set in the context. Exported so that tests can
 * use this as a foundation for building test resumes.
 */
export const emptyResume: Resume = {
  $schema: 'resume.schema.json',
}

const resumeContext = createContext<Resume>(emptyResume)

/**
 * Used to avoid prop drilling since the resume is accessed everywhere.
 */
export const ResumeProvider = resumeContext.Provider

/**
 * Provides access to the current resume as set by the {@link ResumeProvider}.
 */
export const useResume = () => useContext(resumeContext)
