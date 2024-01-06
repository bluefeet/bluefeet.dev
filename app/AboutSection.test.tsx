import { render } from "@testing-library/react";

import { emptyResume, ResumeProvider } from "./resumeContext";
import { Resume } from "@/types/Resume";

import { AboutSection } from "./AboutSection";

const testResume = (resume: Partial<Resume>) => {
  render(
    <ResumeProvider value={{ ...emptyResume, ...resume }}>
      <AboutSection />
    </ResumeProvider>,
  );
  expect(document.body).toMatchSnapshot();
};

describe("AboutSection", () => {
  it("empty resume produces no text content", () => {
    testResume({});
  });

  it("displays markdown", () => {
    testResume({ profile: { about: "Foo bar." } });
  });
});
