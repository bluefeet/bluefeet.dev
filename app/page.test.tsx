import { render } from "@testing-library/react";

import Page from "./page";

it("Page", () => {
  render(<Page />);
  expect(document.body).toMatchSnapshot();
});
