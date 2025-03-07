import { AboutSection } from "./AboutSection";
import { Resume } from "./resume";
import { ResumeProvider } from "./resumeContext";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testResume = (resume: Resume) => {
  render(
    <ResumeProvider value={resume}>
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
