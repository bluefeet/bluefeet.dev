import { ObjectiveSection } from "./ObjectiveSection";
import type { Resume } from "./resume";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testSection = (objective?: Resume["objective"]) => {
  render(<ObjectiveSection objective={objective} />);
  expect(document.body).toMatchSnapshot();
};

describe("ObjectiveSection", () => {
  it("empty resume", () => {
    testSection();
  });

  it("overview", () => {
    testSection({ overview: "test-overview" });
  });

  describe("startDate", () => {
    it("objective with no startDate", () => {
      testSection({ intention: "casual" });
    });

    it("casual startDate", () => {
      testSection({ intention: "casual", startDate: "2500-11-04" });
    });

    it("active startDate", () => {
      testSection({ intention: "active", startDate: "2500-11-04" });
    });

    it("historic startDate", () => {
      testSection({ intention: "casual", startDate: "1905-08-17" });
    });
  });

  describe("roles, workModes, and employmentTypes", () => {
    it("single", () => {
      testSection({
        roles: ["foo"],
        workModes: ["on-site"],
        employmentTypes: ["full-time"],
      });
    });

    it("multiple", () => {
      testSection({
        roles: ["foo", "bar"],
        workModes: ["hybrid", "remote"],
        employmentTypes: ["freelance", "internship"],
      });
    });
  });
});
