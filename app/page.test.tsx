import Page from "./page";
import { render } from "@testing-library/react";

it("Page", () => {
  render(<Page />);
  expect(document.body).toMatchSnapshot();
});
