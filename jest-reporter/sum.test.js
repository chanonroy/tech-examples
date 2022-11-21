const sum = require("./sum.js");

describe("sum", () => {
  it("can add two numbers together", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
