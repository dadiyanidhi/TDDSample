// StringCalculator.test.js
import { StringCalculator } from "../StringCalculator";

describe("StringCalculator Test cases", () => {
  test("given empty string return 0", () => {
    expect(StringCalculator("")).toBe(0);
  });
  test("given 1 to return 1", () => {
    expect(StringCalculator("1")).toBe(1);
  });
  test("given 1,2 to return 3", () => {
    expect(StringCalculator("1,2")).toBe(3);
  });
  test("given 4,6 to return 10", () => {
    expect(StringCalculator("4,6")).toBe(10);
  });
});
