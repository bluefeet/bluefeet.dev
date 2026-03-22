import Page from "./page";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, expect, it, vi } from "vitest";

const { MockHowl, howlInstances } = vi.hoisted(() => {
  const howlInstances: MockHowl[] = [];

  class MockHowl {
    onpause?: () => void;
    onplay?: () => void;
    onstop?: () => void;
    pause = vi.fn(() => this.onpause?.());
    play = vi.fn(() => this.onplay?.());
    stop = vi.fn(() => this.onstop?.());
    unload = vi.fn();

    constructor({
      onpause,
      onplay,
      onstop,
    }: {
      onpause?: () => void;
      onplay?: () => void;
      onstop?: () => void;
    }) {
      this.onpause = onpause;
      this.onplay = onplay;
      this.onstop = onstop;
      howlInstances.push(this);
    }
  }

  return { MockHowl, howlInstances };
});

vi.mock("howler", () => ({
  Howl: MockHowl,
}));

beforeEach(() => {
  howlInstances.length = 0;
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value: 0,
    writable: true,
  });
  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: 1000,
    writable: true,
  });
  Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
    configurable: true,
    value: vi.fn(),
    writable: true,
  });
  Object.defineProperty(navigator, "mediaSession", {
    configurable: true,
    value: {
      setActionHandler: vi.fn(),
    },
    writable: true,
  });
});

it("Page", () => {
  render(<Page />);
  expect(document.body).toMatchSnapshot();
});

it("renders the display header with CSS-driven parallax styling", () => {
  const { container } = render(<Page />);
  const [displayHeader] = container.querySelectorAll("header");

  expect(displayHeader).toHaveClass("display-header");
});

it("plays, pauses, and cleans up ambient audio", () => {
  const { unmount } = render(<Page />);
  const setActionHandlerSpy = vi.mocked(
    navigator.mediaSession.setActionHandler,
  );

  const audioButton = screen.getByRole("button", {
    name: "Play Nature Sounds",
  });
  fireEvent.click(audioButton);

  expect(howlInstances).toHaveLength(1);
  const [audio] = howlInstances;

  expect(audio.play).toHaveBeenCalledTimes(1);
  expect(
    screen.getByRole("button", { name: "Pause Nature Sounds" }),
  ).toBeInTheDocument();
  expect(setActionHandlerSpy).toHaveBeenCalledWith(
    "play",
    expect.any(Function),
  );
  expect(setActionHandlerSpy).toHaveBeenCalledWith(
    "pause",
    expect.any(Function),
  );

  fireEvent.click(screen.getByRole("button", { name: "Pause Nature Sounds" }));

  expect(audio.pause).toHaveBeenCalledTimes(1);
  expect(
    screen.getByRole("button", { name: "Play Nature Sounds" }),
  ).toBeInTheDocument();

  unmount();

  expect(audio.stop).toHaveBeenCalledTimes(1);
  expect(audio.unload).toHaveBeenCalledTimes(1);
  expect(setActionHandlerSpy).toHaveBeenCalledWith("play", null);
  expect(setActionHandlerSpy).toHaveBeenCalledWith("pause", null);
});

it("scroll button targets content near the top and scrolls home later", () => {
  const scrollToSpy = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  const scrollIntoViewSpy = vi.mocked(HTMLElement.prototype.scrollIntoView);

  render(<Page />);

  const scrollButtonAtTop = screen.getByRole("button", {
    name: "Scroll to Content",
  });
  fireEvent.click(scrollButtonAtTop);

  expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: "smooth" });
  expect(scrollToSpy).not.toHaveBeenCalled();

  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value: 700,
    writable: true,
  });
  fireEvent.scroll(window);

  const scrollButtonAwayFromTop = screen.getByRole("button", {
    name: "Scroll to Top",
  });
  fireEvent.click(scrollButtonAwayFromTop);

  expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });

  scrollToSpy.mockRestore();
});
