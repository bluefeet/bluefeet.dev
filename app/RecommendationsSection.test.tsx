import { RecommendationsSection } from "./RecommendationsSection";
import type { Resume } from "./resume";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testSection = (recommendations?: Resume["recommendations"]) => {
  render(<RecommendationsSection recommendations={recommendations} />);
  expect(document.body).toMatchSnapshot();
};

describe("RecommendationsSection", () => {
  it("empty resume", () => {
    testSection();
  });

  it("multiples with required fields only", () => {
    testSection([
      {
        message: "Foo Message",
        author: "Foo Author",
        relationship: "Foo Foo",
      },
    ]);
  });
});
