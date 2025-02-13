import { ObjectiveSection } from "./ObjectiveSection";
import { Resume } from "./resume";
import { emptyResume, ResumeProvider } from "./resumeContext";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testResume = (resume: Partial<Resume>) => {
  render(
    <ResumeProvider value={{ ...emptyResume, ...resume }}>
      <ObjectiveSection />
    </ResumeProvider>,
  );
  expect(document.body).toMatchSnapshot();
};

describe("ObjectiveSection", () => {
  it("empty resume", () => {
    testResume({});
  });

  it("overview", () => {
    testResume({ objective: { overview: "test-overview" } });
  });

  describe("startDate", () => {
    it("objective with no startDate", () => {
      testResume({ objective: { intention: "casual" } });
    });

    it("casual startDate", () => {
      testResume({
        objective: { intention: "casual", startDate: "2500-11-04" },
      });
    });

    it("active startDate", () => {
      testResume({
        objective: { intention: "active", startDate: "2500-11-04" },
      });
    });

    it("historic startDate", () => {
      testResume({
        objective: { intention: "casual", startDate: "1905-08-17" },
      });
    });
  });

  describe("roles, workModes, and employmentTypes", () => {
    it("single", () => {
      testResume({
        objective: {
          roles: ["foo"],
          workModes: ["on-site"],
          employmentTypes: ["full-time"],
        },
      });
    });

    it("multiple", () => {
      testResume({
        objective: {
          roles: ["foo", "bar"],
          workModes: ["hybrid", "remote"],
          employmentTypes: ["freelance", "internship"],
        },
      });
    });
  });
});
