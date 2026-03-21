import {
  formatExperienceDateRange,
  formatExperienceDetails,
  formatExperienceSkillsText,
  formatObjectiveAvailability,
  formatObjectiveEmploymentTypesDetails,
  formatObjectiveEmploymentTypesHeading,
  formatObjectiveRolesHeading,
  formatObjectiveWorkModesDetails,
  formatObjectiveWorkModesHeading,
} from "./resumeFormatting";
import type { Resume } from "./resume";
import { describe, expect, it } from "vitest";

describe("resumeFormatting", () => {
  describe("experience", () => {
    it("formats date ranges", () => {
      expect(formatExperienceDateRange("2024-01-02", "2024-03-04")).toBe(
        "Jan 2024  - Mar 2024",
      );
      expect(formatExperienceDateRange("2024-01-02")).toBe("Jan 2024  - Now");
      expect(formatExperienceDateRange()).toBeNull();
    });

    it("formats the experience details line", () => {
      expect(
        formatExperienceDetails({
          companyName: "Example Co",
          title: "Engineer",
          startDate: "2024-01-02",
          endDate: "2024-03-04",
          employmentType: "full-time",
          workMode: "hybrid",
          location: "Portland, OR",
        }),
      ).toBe(
        "Engineer | Jan 2024  - Mar 2024 | Full-time | Hybrid | Portland, OR",
      );
    });

    it("formats skills text for current and past roles", () => {
      expect(
        formatExperienceSkillsText({
          companyName: "Example Co",
          skills: ["TypeScript", "React"],
        }),
      ).toBe(
        "Skills I am using during this time include TypeScript, and React.",
      );

      expect(
        formatExperienceSkillsText({
          companyName: "Example Co",
          endDate: "2024-03-04",
          skills: ["TypeScript", "React"],
        }),
      ).toBe("Skills I used during this time included TypeScript, and React.");

      expect(
        formatExperienceSkillsText({
          companyName: "Example Co",
        }),
      ).toBeNull();
    });
  });

  describe("objective", () => {
    it("formats availability for active or casual searches", () => {
      expect(formatObjectiveAvailability({ intention: "passive" })).toBeNull();
      expect(formatObjectiveAvailability({ intention: "casual" })).toEqual({
        title: "Open to new opportunities",
        details: "Available immediately",
      });
      expect(
        formatObjectiveAvailability({
          intention: "active",
          startDate: "2500-11-04",
        }),
      ).toEqual({
        title: "Actively searching for an opportunity",
        details: "Available starting on November 4th, 2500",
      });
    });

    it("omits past objective start dates", () => {
      expect(
        formatObjectiveAvailability({
          intention: "casual",
          startDate: "1905-08-17",
        }),
      ).toEqual({
        title: "Open to new opportunities",
        details: "Available immediately",
      });
    });

    it("formats objective labels and details", () => {
      const objective: NonNullable<Resume["objective"]> = {
        roles: ["Principal Engineer", "Staff Engineer"],
        workModes: ["hybrid", "remote"],
        employmentTypes: ["full-time", "contract"],
      };

      expect(formatObjectiveRolesHeading(objective)).toBe(
        "These roles would be a great match",
      );
      expect(formatObjectiveWorkModesHeading(objective)).toBe(
        "In any of these capacities",
      );
      expect(formatObjectiveWorkModesDetails(objective)).toBe("Hybrid, Remote");
      expect(formatObjectiveEmploymentTypesHeading(objective)).toBe(
        "With one of these commitments",
      );
      expect(formatObjectiveEmploymentTypesDetails(objective)).toBe(
        "Full-time, Contract",
      );
    });
  });
});
