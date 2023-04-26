// for(let i = 0; i < str.length; i++ )
// c-style loop, for...of, for...in, forEach, map, include, find,

// for..of
// use for..of with everything expect objects because of and object start with the letter "O"


// const arr = ["black", 'green', 'blue']

// // for(let item in arr) {
// //   console.log(item);
// //   console.log(arr[item]);
// // }

// for (let item of arr) {
//   console.log(item);
// }


const myObj = {
  color: 'green',
  favFood: 'sushi',
  time: 1500,
  age: 99,
  isSleepy: true,
  arr: [1,2,3],
  anotherObj: {
    item1: 'bread',
    item2: 'cheese'
  }
}

for(let item in myObj) {
  console.log(item, myObj[item]);
  if(Array.isArray(myObj[item])) {
    for(let arritem of myObj[item]) {
      console.log(arritem);
    }
  }

  if(typeof myObj[item] === 'object') {
    for(let innerItem in myObj[item]) {
      console.log(myObj[item][innerItem]);
    }
  }
  
}

// myObj.forEach((ele) => {
//   console.log(ele);
// })

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.values(myObj).includes());
// const arrOfObj = Object.values(myObj);
// console.log(arrOfObj);
// console.log(arrOfObj.includes(1500)); 

// const arr = [1,2,3]
// arr.map
// arr.forEach
// arr.includes
// arr.find
// arr.findIndex
// arr.reduce

function myName() {}

const myName = function(name) {
  // if(name === 'Alvin') {
  //   console.log('hello')
  // } else {
  //   console.log('goodbye')
  // }

  // name === 'Alvin' ? console.log('hello') : console.log('goodbye');
  let results = name === 'Alvin' ? 'hello' : 'goodbye'
  console.log(results);
  let something = name === 'Alvin' ? 'my name is Alvin' : name === 'steve' ? 'my name is steve' : 'My name is not steve or alvin'
  console.log(something);
}

myName('steve')