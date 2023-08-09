// const numArr = [1,2,3,4,5,6]

// const sumOfArr = (arr) => {
//   let startingNum = 0;
//   for(let num of arr) {
//     startingNum += num;
//   }

//   const newNumVal = arr.reduce((acc, num) => {
//     return acc + num
//   }, 0);

//   // console.log(newNumVal);
//   return newNumVal;

//   // return startingNum;
// }

// console.log(sumOfArr(numArr));










// const strSentence = "Hello from Lighthouselabs!"
// // {H: 1, e: 2, l:4....}

// const letterCounter = (sentence) => {
//   // let obj = {}
//   const newSen = sentence.toLowerCase().split('');
//   // // // console.log(newSen);
//   // for(let letter of newSen) {
//   //   // if(obj[letter]) {
//   //   //   obj[letter] += 1
//   //   // } else {
//   //   //   obj[letter] = 1;
//   //   // }

//   //   obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
//   // }

//   const newObj = newSen.reduce((obj, letter) => {
//     obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
//     return obj;
//   }, {})

// //   console.log(newObj);

// //   // console.log(obj)

// // }

// // console.log(letterCounter(strSentence));


// let myName  = "Alvin";

// let myName2 = myName;

// myName2 = "Joe"

// console.log(myName);
// console.log(myName2);


// let obj = {
//   myName: "Alvin",
//   age: 100,
//   // myName: "Steve"
// }

// let obj2 = {
//   ...obj,
//   // myName: "Alvin",
//   // age: 100
//   myName: "Steve"
// }

// console.log(obj);
// console.log(obj2);

const arr1 = [1,2,3,4,5];

// let arr2 = arr1;
let arr2 = [...arr1, 6]

arr2[0] = 100;

console.log(arr1);
console.log(arr2);