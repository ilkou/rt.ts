import { Vector } from "../../../src/libs/vector/Vector";

describe("testing the length() function", () => {
  it("should (1, 0, 0).length() to equal 1", () => {
    expect(new Vector(1, 0, 0).length()).toStrictEqual(1);
  });
});
