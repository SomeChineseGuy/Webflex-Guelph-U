const higherOrderFunc = (callback) => {
  const user = {username: 'joe'}
  console.log('1. before setTimeout');
  setTimeout(() => {
    user.username = 'steve';
    console.log('3. inside of settimeout');
    callback(user);
  }, 500)
  console.log('2. after the settimeout');
  return user;
}

console.log('4. before calling the func');

const newUser = higherOrderFunc((user) => {
  console.log('5. inside the callback');
  console.log(user);
});

console.log(newUser);