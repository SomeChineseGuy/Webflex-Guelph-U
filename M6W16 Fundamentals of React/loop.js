const arr = [1,2,3,4,5];

const obj = {
  username: 'joe',
  age: 10
}

const newKeys = Object.keys(obj)
console.log(newKeys);
const newValues = Object.values(obj)
console.log(newValues);
const bothKeyValue = Object.entries(obj);
console.log(bothKeyValue);

// const newArr = arr.map((num) => {
//   console.log(num);
//   return num + 10
// })
// console.log(newArr);
// const filterArr = arr.filter((num) => {
//   if(num % 2 === 0) {
//     return num
//   }
// })

// console.log(filterArr);

