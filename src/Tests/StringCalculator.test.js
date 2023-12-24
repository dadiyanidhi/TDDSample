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
  test("given 1,2,3,4 to return 10", () => {
    expect(StringCalculator("1,2,3,4")).toBe(10);
  });
  test("given 1\n2,3 to return 6", () => {
    expect(StringCalculator("1\n2,3")).toBe(6);
  });
  test("given 2\n7,3\n8 to return 20", () => {
    expect(StringCalculator("2\n7,3\n8")).toBe(20);
  });
  test("given //;\n1;2 to return 3", () => {
    expect(StringCalculator("//;\n1;2")).toBe(3);
  });
});
