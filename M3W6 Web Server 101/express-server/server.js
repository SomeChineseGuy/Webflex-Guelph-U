const express = require('express');
const app = express();
const PORT = 3000;

// middleware
app.set('view engine', 'ejs');

// Database: Objects, Arrays
const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  4: 'https://i.imgur.com/drvA0ew.jpg'
}

const users = {
  abc : {
    email: 'a@a.com',
    password: '123'
  }
}

// Restful state;
app.get('/', (req, res) => {
  // res.send(`
  // <div>
  //   <h1 style="color: tomato;">Welcome to my page! </h1>
  // </div>
  // `)
  res.render('home');
});

app.get('/cats', (req,res) => {
  const obj = {
    a: [1,3,4],
    b: 'Name is something',
    c: true,
    d: null, 
    e: {
      username: 'joe'
    }
  }
  const templateVars = {
    cats: catsDatabase,
    users: users
  }
  
//   a: [1,3,4],
//   b: 'Name is something',
//   c: true,
//   d: null

  // console.log(obj.b)
  // console.log(obj.a[2])
  // console.log(e.username);
  res.render('cats', templateVars);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});