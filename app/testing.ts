import { expect } from "vitest";

export const expectToBeVisible = (element: HTMLElement) => {
  expect(element).toBeVisible();
  expect(element).not.toHaveClass("hidden");
};
