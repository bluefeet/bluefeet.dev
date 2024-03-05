import { render, screen } from "@testing-library/react";
import { expectToBeVisible } from "./testing";

import { emptyResume, ResumeProvider } from "./resumeContext";
import { Resume } from "./resume";

import { InfoSection } from "./InfoSection";

const testResume = (resume: Partial<Resume>) => {
  render(
    <ResumeProvider value={{ ...emptyResume, ...resume }}>
      <InfoSection />
    </ResumeProvider>,
  );
  expect(document.body).toMatchSnapshot();
};

describe("InfoSection", () => {
  it("empty resume produces no text content", () => {
    testResume({});
  });

  describe("location", () => {
    it("displays location", () => {
      testResume({ contact: { location: "Foo, Bar" } });
    });
    it("willing", () => {
      testResume({
        contact: { location: "Foo, Bar" },
        objective: { willingToRelocate: true, willingToTravel: true },
      });
      expectToBeVisible(screen.getByText(/Willing to relocate/));
      expectToBeVisible(screen.getByText(/Willing to travel/));
    });
    it("unwilling", () => {
      testResume({
        contact: { location: "Foo, Bar" },
        objective: { willingToRelocate: false, willingToTravel: false },
      });
      expectToBeVisible(screen.getByText(/Not available to relocate/));
      expectToBeVisible(screen.getByText(/Not willing to travel/));
    });
    it("no location precludes rendering of willing", () => {
      testResume({
        objective: { willingToRelocate: true, willingToTravel: true },
      });
      expect(screen.queryByText(/Willing to relocate/)).toBeNull();
      expect(screen.queryByText(/Willing to travel/)).toBeNull();
    });
  });

  it("everything else", () => {
    testResume({
      contact: {
        emailAddress: "foo@example.com",
        phoneNumber: "867-5309",
      },
      profile: {
        languages: ["This", "That"],
        resources: [{ title: "Example", uri: "http://example.com" }],
      },
    });
  });
});
