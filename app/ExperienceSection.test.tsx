import { ExperienceSection } from "./ExperienceSection";
import { Resume } from "./resume";
import { ResumeProvider } from "./resumeContext";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testResume = (resume: Partial<Resume>) => {
  render(
    <ResumeProvider value={resume}>
      <ExperienceSection />
    </ResumeProvider>,
  );
  expect(document.body).toMatchSnapshot();
};

describe("ExperienceSection", () => {
  it("empty resume", () => {
    testResume({});
  });

  it("multiples with required fields only", () => {
    testResume({
      experiences: [
        { companyName: "Foo LLC" },
        { companyName: "Bar and Daughters" },
      ],
    });
  });

  it("startDate", () => {
    testResume({
      experiences: [
        {
          companyName: "Foo LLC",
          startDate: "1978-10-05",
        },
      ],
    });
  });

  it("startDate and endDate", () => {
    testResume({
      experiences: [
        {
          companyName: "Foo LLC",
          startDate: "2004-04-05",
          endDate: "2007-02-07",
        },
      ],
    });
  });

  it("all details", () => {
    testResume({
      experiences: [
        {
          companyName: "Foo LLC",
          title: "Head Muffin Licker",
          startDate: "2004-04-05",
          endDate: "2007-02-07",
          employmentType: "seasonal",
          workMode: "hybrid",
        },
      ],
    });
  });

  it("summary", () => {
    testResume({
      experiences: [
        {
          companyName: "Foo LLC",
          summary: "I did things.",
        },
      ],
    });
  });

  it("highlights", () => {
    testResume({
      experiences: [
        {
          companyName: "Foo LLC",
          highlights: ["Jumped.", "Rolled."],
        },
      ],
    });
  });

  it("skills", () => {
    testResume({
      experiences: [
        {
          companyName: "Foo LLC",
          skills: ["This", "That"],
        },
      ],
    });
  });

  it("full", () => {
    testResume({
      experiences: [
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
      ],
    });
  });
});
