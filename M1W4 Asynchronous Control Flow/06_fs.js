const fs = require('fs');


// const fileContent = fs.readFileSync('./data.html', {encoding: 'utf-8'})

// console.log(fileContent);

const fileContent = fs.readFile('./data.html', {encoding: 'utf-8'}, (err, data) => {
  if(err) {
    console.log('err:', err);
    return;
  }

  fs.writeFile('index.html', data, ()=> {
    console.log('the file is done writing');
  })
})

console.log(fileContent);