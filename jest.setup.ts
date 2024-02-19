import "@testing-library/jest-dom";

const nowDate = new Date(2024, 0, 6);
jest.useFakeTimers();
jest.setSystemTime(nowDate);

afterAll(() => {
  jest.useRealTimers();
});
