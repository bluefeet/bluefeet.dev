import { CompetenciesSection } from "./CompetenciesSection";
import { Resume } from "./resume";
import { emptyResume, ResumeProvider } from "./resumeContext";
import { render } from "@testing-library/react";

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
