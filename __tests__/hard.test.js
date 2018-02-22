const { expect } = require("chai");
const hard = require("../hard");

describe("We would like to 'currify' a function", () => {
  /**
   * For example with a function named hard
   *
   * const add = (x, y) => x + y;
   * add(1, 2) // return 3
   *
   * const addWithHard = hard(add);
   *
   * addWithHard(1)(2) // return 3
   */
  it("We should work for a two parameters function", () => {
    const add = hard((x, y) => x + y);

    expect(add(2)(3)).to.equal(5);
  });

  it("We should work for a three parameters function", () => {
    const add = hard((x, y, z) => x + y + z);

    expect(add(2)(3)(1)).to.equal(6);
  });

  it("We should work for a four parameters function", () => {
    const add = hard((x, y, z, o) => x + y + z + o);

    expect(add(2)(3)(1)(10)).to.equal(16);
  });
});
