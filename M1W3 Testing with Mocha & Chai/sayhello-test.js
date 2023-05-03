const assert = require('assert');
const sayHello = require('./sayhello');

// console.log(sayHello('joe', 123, true, 'more stuff'));
console.log(sayHello);

const actual = sayHello('Ryan');
const expected = 'Hello there Ryan';
assert.strictEqual(actual, expected)

// const actual = sayHello('Ryan');
// const expected = 'Hello there Steve';

// // console.log(actual === expected)
// // if(actual !== expected) {
// //   throw new Error('the actual and expect was not matching');
// // }

// console.log('some more test');



// console.log(assert.equal(1, "1")); // ==
// console.log(assert.strictEqual(1, "1")); // ===
