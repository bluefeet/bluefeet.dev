import { z } from "zod";

export default z
  .object({
    $schema: z.string(),
    contact: z
      .object({
        fullName: z.string().optional(),
        casualName: z.string().optional(),
        pronouns: z.string().optional(),
        location: z.string().optional(),
        emailAddress: z.string().email().optional(),
        phoneNumber: z
          .string()
          .regex(new RegExp("^[+]?[0-9()\\-\\.\\s]+$"))
          .optional(),
      })
      .strict()
      .optional(),
    profile: z
      .object({
        headline: z.string().optional(),
        about: z.string().optional(),
        skills: z
          .array(
            z
              .object({
                name: z.string(),
                competencies: z.array(z.string()).optional(),
              })
              .strict(),
          )
          .optional(),
        languages: z.array(z.string()).optional(),
        resources: z
          .array(
            z.object({ title: z.string(), uri: z.string().url() }).strict(),
          )
          .optional(),
      })
      .strict()
      .optional(),
    objective: z
      .object({
        overview: z
          .string()
          .describe("A few sentences describing the kind of job is wanted.")
          .optional(),
        startDate: z
          .string()
          .describe(
            "The date when first available for hire. A date in the past or no date is considered to mean immediately.",
          )
          .optional(),
        isCasual: z
          .boolean()
          .describe("Taking extended time to find the best fit.")
          .optional(),
        willingToRelocate: z.boolean().optional(),
        willingToTravel: z.boolean().optional(),
        roles: z.array(z.string()).optional(),
        workModes: z.array(z.enum(["on-site", "hybrid", "remote"])).optional(),
        employmentTypes: z
          .array(
            z.enum([
              "full-time",
              "part-time",
              "self-employed",
              "freelance",
              "contract",
              "internship",
              "apprenticeship",
              "seasonal",
            ]),
          )
          .optional(),
      })
      .strict()
      .optional(),
    experiences: z
      .array(
        z
          .object({
            companyName: z.string(),
            title: z.string().optional(),
            employmentType: z
              .enum([
                "full-time",
                "part-time",
                "self-employed",
                "freelance",
                "contract",
                "internship",
                "apprenticeship",
                "seasonal",
              ])
              .optional(),
            location: z.string().optional(),
            workMode: z.enum(["on-site", "hybrid", "remote"]).optional(),
            startDate: z
              .union([
                z.string().regex(new RegExp("^[0-9]{4}(-(0[1-9]|1[0-2])|)$")),
                z.string(),
              ])
              .optional(),
            endDate: z
              .union([
                z.string().regex(new RegExp("^[0-9]{4}(-(0[1-9]|1[0-2])|)$")),
                z.string(),
              ])
              .optional(),
            summary: z.string().optional(),
            highlights: z.array(z.string()).optional(),
          })
          .strict(),
      )
      .optional(),
    recommendations: z
      .array(
        z
          .object({
            author: z.string(),
            relationship: z.string(),
            message: z.string(),
          })
          .strict(),
      )
      .optional(),
  })
  .strict()
  .describe("The professional experiences and skills of an individual");
