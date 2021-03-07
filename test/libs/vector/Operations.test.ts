import {
  add,
  divide,
  multiply,
  sub,
} from "../../../src/libs/vector/Operations";
import { Vector } from "../../../src/libs/vector/Vector";
import { DIVIDE_BY_ZERO_EXCEPTION } from "../../../src/libs/vector/Exceptions";

describe("testing the add() function", () => {
  test("adds (1, 2, 3) + (-1, 2, 2) to equal (0, 4, 5)", () => {
    expect(add(new Vector(1, 2, 3), new Vector(-1, 2, 2))).toStrictEqual(
      new Vector(0, 4, 5)
    );
  });

  test("adds (1, 3, 3) + (-1, 2, 2) to equal (0, 4, 5)", () => {
    expect(add(new Vector(1, 3, 3), new Vector(-1, 2, 2))).toStrictEqual(
      new Vector(0, 5, 5)
    );
  });
});

describe("testing the sub() function", () => {
  it("should sub (1, 1, 1) from (-1, -1, -1) to equal (-2, -2, -2)", function () {
    expect(sub(new Vector(-1, -1, -1), new Vector(1, 1, 1))).toStrictEqual(
      new Vector(-2, -2, -2)
    );
  });

  it("should sub (1, 0, 1337) from (-1, -1, -1) to equal (-2, -2, -2)", function () {
    expect(sub(new Vector(-1, 0, 1337), new Vector(1, 1, 1))).toStrictEqual(
      new Vector(-2, -1, 1336)
    );
  });
});

describe("testing the divide() function", () => {
  it("should (1, 1, 1) / (0.5, 1, 0.5) to equal (2, 1, 2)", function () {
    expect(divide(new Vector(1, 1, 1), new Vector(0.5, 1, 0.5))).toStrictEqual(
      new Vector(2, 1, 2)
    );
  });

  it("should (1, 0, 1337) / (0, 0, 0) to throw error", function () {
    expect(() => {
      divide(new Vector(1, 0, 1337), new Vector(0, 0, 0));
    }).toThrow(DIVIDE_BY_ZERO_EXCEPTION);
  });

  it("should (1, 0, 1337) / (0, 0, 0) to equal (1, 0, 1337) when auth == true", function () {
    expect(
      divide(new Vector(1, 0, 1337), new Vector(0, 0, 0), true)
    ).toStrictEqual(new Vector(1, 0, 1337));
  });
});

describe("testing the multiply() function", () => {
  it("should multiply (1, 2, 3) with (-1, -1, -1) to equal (-1, -2, -3)", function () {
    expect(multiply(new Vector(1, 2, 3), new Vector(-1, -1, -1))).toStrictEqual(
      new Vector(-1, -2, -3)
    );
  });
});
