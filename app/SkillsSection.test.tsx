import { render } from "@testing-library/react";

import { emptyResume, ResumeProvider } from "./resumeContext";
import { Resume } from "@/types/Resume";

import { SkillsSection } from "./SkillsSection";

const testResume = (resume: Partial<Resume>) => {
  render(
    <ResumeProvider value={{ ...emptyResume, ...resume }}>
      <SkillsSection />
    </ResumeProvider>,
  );
  expect(document.body).toMatchSnapshot();
};

describe("SkillsSection", () => {
  it("no skills", () => {
    testResume({ profile: { skills: [] } });
  });

  it("some skills", () => {
    testResume({
      profile: {
        skills: [
          { name: "Skill Name One", competencies: ["foo1", "bar1"] },
          { name: "Skill Name Two", competencies: ["foo2"] },
        ],
      },
    });
  });
});
