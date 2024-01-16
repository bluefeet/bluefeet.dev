import { render } from "@testing-library/react";

import { NowDateProvider } from "./NowDateContext";

import Page from "./page";

it("Page", () => {
  // Mock the current date so that the HTML snapshot doesn't change.
  const nowDate = new Date(2024, 0, 6);

  render(
    <NowDateProvider value={nowDate}>
      <Page />
    </NowDateProvider>,
  );
  expect(document.body).toMatchSnapshot();
});
