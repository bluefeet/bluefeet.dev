import "@testing-library/jest-dom";
import { afterAll, beforeAll, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Raleway: () => "font-raleway",
}));

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2024, 0, 6));
});

afterAll(() => {
  vi.useRealTimers();
});
