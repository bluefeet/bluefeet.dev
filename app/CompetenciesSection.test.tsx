import { CompetenciesSection } from "./CompetenciesSection";
import type { Resume } from "./resume";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

type Competencies = NonNullable<Resume["profile"]>["competencies"];

const testSection = (competencies?: Competencies) => {
  render(<CompetenciesSection competencies={competencies} />);
  expect(document.body).toMatchSnapshot();
};

describe("SkillsSection", () => {
  it("no skills", () => {
    testSection([]);
  });

  it("some skills", () => {
    testSection([
      { name: "Skill Name One", skills: ["foo1", "bar1"] },
      { name: "Skill Name Two", skills: ["foo2"] },
    ]);
  });
});
