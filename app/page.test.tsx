import Page from "./page";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";

it("Page", () => {
  render(<Page />);
  expect(document.body).toMatchSnapshot();
});
