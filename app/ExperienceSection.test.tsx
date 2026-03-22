import { ExperienceSection } from "./ExperienceSection";
import type { Experience } from "./resume";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testSection = (experiences?: Experience[]) => {
  render(<ExperienceSection experiences={experiences} />);
  expect(document.body).toMatchSnapshot();
};

describe("ExperienceSection", () => {
  it("empty resume", () => {
    testSection();
  });

  it("multiples with required fields only", () => {
    testSection([
      { companyName: "Foo LLC" },
      { companyName: "Bar and Daughters" },
    ]);
  });

  it("startDate", () => {
    testSection([{ companyName: "Foo LLC", startDate: "1978-10-05" }]);
  });

  it("startDate and endDate", () => {
    testSection([
      {
        companyName: "Foo LLC",
        startDate: "2004-04-05",
        endDate: "2007-02-07",
      },
    ]);
  });

  it("all details", () => {
    testSection([
      {
        companyName: "Foo LLC",
        title: "Head Muffin Licker",
        startDate: "2004-04-05",
        endDate: "2007-02-07",
        employmentType: "seasonal",
        workMode: "hybrid",
      },
    ]);
  });

  it("summary", () => {
    testSection([{ companyName: "Foo LLC", summary: "I did things." }]);
  });

  it("highlights", () => {
    testSection([
      { companyName: "Foo LLC", highlights: ["Jumped.", "Rolled."] },
    ]);
  });

  it("skills", () => {
    testSection([{ companyName: "Foo LLC", skills: ["This", "That"] }]);
  });

  it("full", () => {
    testSection([
      {
        companyName: "Foo LLC",
        title: "Head Muffin Licker",
        startDate: "2004-04-05",
        endDate: "2007-02-07",
        employmentType: "seasonal",
        workMode: "hybrid",
        summary: "I did things.",
        highlights: ["Jumped.", "Rolled."],
        skills: ["This", "That"],
      },
    ]);
  });
});
