import { AboutSection } from "./AboutSection";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testSection = (about?: string) => {
  render(<AboutSection about={about} />);
  expect(document.body).toMatchSnapshot();
};

describe("AboutSection", () => {
  it("empty resume produces no text content", () => {
    testSection();
  });

  it("displays markdown", () => {
    testSection("Foo bar.");
  });
});
