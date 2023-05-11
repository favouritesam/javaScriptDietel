//const { default: test } = require("node:test");
const { sum, substract} = require("./function");

test("sum 2 + 5 is equal 7", () => {
    expect(sum(2, 5)).toBe(7);
});