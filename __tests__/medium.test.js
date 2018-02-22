const { expect } = require("chai");
const add = require("./../add");
const compose = require("./../compose");

describe("We would like to add up two numbers between themselfs", () => {
  it("The 'add' method should be a function", () => {
    expect(typeof add).to.equal('function');
  });

  it("The 'add' method should be a function and should return a function also", () => {
    expect(typeof add(10)).to.equal('function');
  });

  it("The add method should add up two numbers", () => {
    expect(add(10)(20)).to.equal(30);
    expect(add(5)(10)).to.equal(15);
  });
});

describe("We would like to apply the 'add' method many times on a number without recreating variables", () => {

  /**
   *
   * For example
   *
   * const addTwice = add(5)(add(10)(30)) // return 35 // Not really readable
   *
   * would look like with the 'compose' method
   *
   * const addTwice = compose(
   *   add(10),
   *   add(20)
   * )(5) // return 35 // Much more readable
   */
   it("The 'compose' method should allow to compose two 'add' functions", () => {
     const addTwice = compose(
       add(10),
       add(20)
     )(5);

     expect(addTwice).to.equal(35);
   });

  it("The 'compose' method should allow to compose three 'add' functions", () => {
    const addAll = compose(
      add(10),
      add(20),
      add(50)
    )(5);

    expect(addAll).to.equal(85);
  });
});
