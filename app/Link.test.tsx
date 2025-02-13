import { Link } from "./Link";
import { expectToBeVisible } from "./testing";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Link", () => {
  it("renders", () => {
    render(<Link href="foo.html">Bar 1</Link>);
    const link = screen.getByRole<HTMLLinkElement>("link");
    expectToBeVisible(link);
    expect(link.href).toBe("http://localhost:3000/foo.html");
    expect(link.innerHTML).toBe("Bar 1");
  });

  it("merges custom and built-in classes", () => {
    render(
      <Link href="foo.html" className="test-foo">
        Bar 2
      </Link>,
    );
    const link = screen.getByRole("link");
    expect(link.className).toMatch(/\btest-foo\b/); // Custom, from above
    expect(link.className).toMatch(/\bunderline\b/); // Built-in, provided by Link
    expect(link.className).not.toMatch(/\btest-does-not-exist\b/); // Negative test, just in case
  });
});
