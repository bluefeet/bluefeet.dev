import { render } from "@testing-library/react";

import { emptyResume, ResumeProvider } from "./resumeContext";
import { Resume } from "./resume";

import { CompetenciesSection } from "./CompetenciesSection";

const testResume = (resume: Partial<Resume>) => {
  render(
    <ResumeProvider value={{ ...emptyResume, ...resume }}>
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
