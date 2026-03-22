import { InfoSection } from "./InfoSection";
import type { Resume } from "./resume";
import { expectToBeVisible } from "./testing";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const testSection = ({ contact, objective, profile }: Partial<Resume>) => {
  render(
    <InfoSection contact={contact} objective={objective} profile={profile} />,
  );
  expect(document.body).toMatchSnapshot();
};

describe("InfoSection", () => {
  it("empty resume produces no text content", () => {
    testSection({});
  });

  describe("location", () => {
    it("displays location", () => {
      testSection({ contact: { location: "Foo, Bar" } });
    });
    it("willing", () => {
      testSection({
        contact: { location: "Foo, Bar" },
        objective: { willingToRelocate: true, willingToTravel: true },
      });
      expectToBeVisible(screen.getByText(/Willing to relocate/));
      expectToBeVisible(screen.getByText(/Willing to travel/));
    });
    it("unwilling", () => {
      testSection({
        contact: { location: "Foo, Bar" },
        objective: { willingToRelocate: false, willingToTravel: false },
      });
      expectToBeVisible(screen.getByText(/Not available to relocate/));
      expectToBeVisible(screen.getByText(/Not willing to travel/));
    });
    it("no location precludes rendering of willing", () => {
      testSection({
        objective: { willingToRelocate: true, willingToTravel: true },
      });
      expect(screen.queryByText(/Willing to relocate/)).toBeNull();
      expect(screen.queryByText(/Willing to travel/)).toBeNull();
    });
  });

  it("everything else", () => {
    testSection({
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
