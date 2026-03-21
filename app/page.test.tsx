import Page from "./page";
import { fireEvent, render } from "@testing-library/react";
import { beforeEach, expect, it, vi } from "vitest";

beforeEach(() => {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value: 0,
    writable: true,
  });
});

it("Page", () => {
  render(<Page />);
  expect(document.body).toMatchSnapshot();
});

it("slow-scrolls the display header", () => {
  const requestAnimationFrameSpy = vi
    .spyOn(window, "requestAnimationFrame")
    .mockImplementation((callback) => {
      callback(0);
      return 1;
    });
  const cancelAnimationFrameSpy = vi.spyOn(window, "cancelAnimationFrame");

  const { container, unmount } = render(<Page />);
  const [displayHeader] = container.querySelectorAll("header");

  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value: 120,
    writable: true,
  });
  fireEvent.scroll(window);

  expect(displayHeader).toHaveStyle({
    transform: "translateY(75.6px)",
  });

  unmount();

  expect(cancelAnimationFrameSpy).toHaveBeenCalledWith(1);

  requestAnimationFrameSpy.mockRestore();
  cancelAnimationFrameSpy.mockRestore();
});
