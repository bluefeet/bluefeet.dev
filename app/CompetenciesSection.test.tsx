import { CompetenciesSection } from "./CompetenciesSection";
import { Resume } from "./resume";
import { ResumeProvider } from "./resumeContext";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testResume = (resume: Resume) => {
  render(
    <ResumeProvider value={resume}>
      <CompetenciesSection />
    </ResumeProvider>,
  );
  expect(document.body).toMatchSnapshot();
};

describe("SkillsSection", () => {
  it("no skills", () => {
    testResume({ profile: { competencies: [] } });
  });

  it("some skills", () => {
    testResume({
      profile: {
        competencies: [
          { name: "Skill Name One", skills: ["foo1", "bar1"] },
          { name: "Skill Name Two", skills: ["foo2"] },
        ],
      },
    });
  });
});
