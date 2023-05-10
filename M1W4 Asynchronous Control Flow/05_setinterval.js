let i = 10

let interval = setInterval(function() {
  i--
  console.log('hello', i);
  if(i <= 0) {
    clearInterval(this);
  }
}, 500)

