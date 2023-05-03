var assert = require('assert');

// describe() // Groups a bunch of test together
// it() // Is the test itself

describe('To describe a group of test', () => {
  it('A single test for a single part of the function', () => {
    assert.strictEqual('1', '1')
  })
})

// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });