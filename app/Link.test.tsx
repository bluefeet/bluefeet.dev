import { render, screen } from "@testing-library/react";
import { expectToBeVisible } from "./testing";

import { Link } from "./Link";

describe("Link", () => {
  it("renders", () => {
    render(<Link href="foo.html">Bar</Link>);
    const link = screen.getByRole<HTMLLinkElement>("link");
    expectToBeVisible(link);
    expect(link.href).toBe("http://localhost/foo.html");
    expect(link.innerHTML).toBe("Bar");
  });

  it("merges custom and built-in classes", () => {
    render(
      <Link href="foo.html" className="test-foo">
        Bar
      </Link>,
    );
    const link = screen.getByRole("link");
    expect(link.className).toMatch(/\btest-foo\b/); // Custom, from above
    expect(link.className).toMatch(/\bunderline\b/); // Built-in, provided by Link
    expect(link.className).not.toMatch(/\btest-does-not-exist\b/); // Negative test, just in case
  });
});
