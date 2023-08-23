
// map - creates a new array based on the callback (num) => num + 1 
// filter - creates a new filter array based on the callback 
// reduce - reduce the array down to one value, this value can be a number or obj or string 
// includes - checks the array to see if the value exist arr.includes(2) === true
// find - find will return the first item that matches the callback, mostly used in array of objects

// arr.forEach(num => {
//   console.log(num + 10);
//   // do not put a return here
// })

// for(let num of arr){}
const arr = [1,2,3,4];

//some 
let something = arr.some((num) => {
  return num === 5
})

console.log(something);

//every
let every = arr.every((num) => {
  return num !== 5
})

console.log(every);