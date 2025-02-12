import { AboutSection } from "./AboutSection";
import { Resume } from "./resume";
import { emptyResume, ResumeProvider } from "./resumeContext";
import { render } from "@testing-library/react";

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
