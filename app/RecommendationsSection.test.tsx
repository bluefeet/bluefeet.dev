import { RecommendationsSection } from "./RecommendationsSection";
import { Resume } from "./resume";
import { emptyResume, ResumeProvider } from "./resumeContext";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testResume = (resume: Partial<Resume>) => {
  render(
    <ResumeProvider value={{ ...emptyResume, ...resume }}>
      <RecommendationsSection />
    </ResumeProvider>,
  );
  expect(document.body).toMatchSnapshot();
};

describe("RecommendationsSection", () => {
  it("empty resume", () => {
    testResume({});
  });

  it("multiples with required fields only", () => {
    testResume({
      recommendations: [
        {
          message: "Foo Message",
          author: "Foo Author",
          relationship: "Foo Foo",
        },
      ],
    });
  });
});
