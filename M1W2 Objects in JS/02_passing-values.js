let num = 5

const changeNum = function(number) {
  number = 10;
  console.log('inside the function', number)
}

console.log('num before', num)
changeNum(num)
console.log('num after', num);


const student = {
  myName: 'alice',
  cohort: 'uGuelph'
}

const changeobj = function(obj) {
  obj.myName = 'steve'
  console.log('inside func', obj.myName);
}

console.log(student.myName)
changeobj(student)
console.log(student.myName);

const arr = [1,2,3]

const changeArr = function(arrInner) {
  arrInner[1] = 10;
  console.log('inside func', arrInner);
}

console.log(arr);
changeArr(arr)
console.log(arr);