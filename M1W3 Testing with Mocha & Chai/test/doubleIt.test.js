// import assert library
const assert = require('assert');
// import the function
const doubleIt = require('../doubleIt');
// describe a block to group all of our test together
describe('Test for my double it function', () => {
  // write our test
  // test #1 returns 8 when given a 4
  it('returns 8 when given a 4', () => {
    const actual = doubleIt(4);
    const expected = 8;
    assert.strictEqual(actual, expected);
  })

  // test #2 returns 5 when give 2.5
  it('returns 5 when give 2.5', () => {
    const actual = doubleIt(2.5);
    const expected = 5;
    assert.strictEqual(actual, expected);
  })

  // test #3 returns undefined when not given a value
  it('returns null when not given a value', () => {
    const actual = doubleIt();
    const expected = null;
    assert.strictEqual(actual, expected)
  })
})