const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const languages = require('./languages.json'); //JSON.parse()
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const languageChoice = req.cookies.languageChoice;
  const templateVars = {
    heading: languages.homeHeadings[languageChoice],
    body: languages.homeBodies[languageChoice]
  }

  res.render('home', templateVars);
});

app.get('/languages/:languagePref', (req, res) => {
  const languagePref = req.params.languagePref;
  res.cookie('languageChoice', languagePref);
  console.log(languagePref);
  res.redirect('/')
});

app.get('/about', (req, res) => {
  const languageChoice = req.cookies.languageChoice
  const templateVars = {
    heading: languages.aboutHeadings[languageChoice],
    body: languages.aboutBodies[languageChoice],
  }
  res.render('about', templateVars);
});

// Login
app.get('/login', (req, res) => {
  res.render('login');
});

const users = {
  abcd: {
    id: "abcd",
    email: "a@a.com",
    password: "1234",
  },
  efgh: {
    id: "efgh",
    email: "b@b.com",
    password: "1234",
  },
};

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // if user does NOT put in a password or email
  if(!email || !password) {
    return res.status(400).send('You must provide an email AND a password');
  }

  let foundUser = null;

  for(let userId in users) {
    if(users[userId].email === email) {
      foundUser = users[userId]
    }
  }

  console.log(foundUser);

  // Did no find a user
  if(!foundUser) {
    return res.status(400).send('no user with that email');
  }

  // If the password is incorrect
  if(foundUser.password !== password) {
    return res.status(400).send('You got the wrong password')    
  }

  res.cookie('userId', foundUser.id);
  res.redirect('/protected');
});

app.get('/protected', (req, res) => {
  const userId = req.cookies.userId;
  console.log(req.cookies);
  console.log(userId);
  if(userId) {
    return res.render('protected');
  }
  res.send('You need to be login to see this page')
})

app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/')
})

app.listen(PORT, ()=> {
  console.log(`The server is listening on PORT: ${PORT}`);
})