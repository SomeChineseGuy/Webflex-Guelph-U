const values = [
  {
    username: 'Kevin',
    age: 50
  },
  {
    username: 'Jessica',
    age: 30
  },
  {
    username: 'Sarah',
    age: 34
  },
  {
    username: 'Sam',
    age: 40
  },
]

const findByName = (arr, userName) => {
  return arr.find((users) => {
    return users.username === userName
  })
}

// console.log(findByName(values, 'Sam'));
// console.log(findByName(values, 'Jessica'));

// map
// filter

// reduce

// includes
// find

// const arr = [1,2,3,4,5];

// const newItem = arr.find((num) => {
//   if(num > 3) {
//     return num;
//   }
// })

// console.log(newItem);

// console.log(arr.includes(10));

// if(arr.includes(10)) {
//   console.log('there is a ten');
// } else {
//   console.log('there is no ten');
// }


// const obj = {
//   username: 'Alvin',
//   profileAge: 50
// }

// const {username, profileAge} = obj

// console.log(obj.username);
// console.log(username);
// console.log(obj.profileAge);
// console.log(profileAge);

// const num = [1,2,3,4,5];

// const [first,  third, second] = num;

// console.log(first);
// console.log(second);
// console.log(third);

const input = (props) => {
  const newData = {
    ...props,
    username: "Ryan"
  }

  return newData;
}

const app = () => {
  let data = {
    username: "Alvin",
    isHungry: false
  }

  const info = input(data)
  data = {
    ...info
  }
  console.log(data);
}

app();