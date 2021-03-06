import { add } from "../../../src/libs/vector/Operations";
import { Vector } from "../../../src/libs/vector/Vector";

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
