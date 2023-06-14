const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));

// data
const dogs = [
  {
    id: 'abc',
    name: 'Dioji',
    breed: 'german shepherd',
    weight: 100
  },
  {
    id: 'def',
    name: 'Clifford',
    breed: 'big and red',
    weight: 1000
  },
  {
    id: 'ghi',
    name: 'Rusty',
    breed: 'cross labradour and german shepard',
    weight: 60
  },
];

// GET dogs data
app.get('/dogs', (req, res) => {
  res.send(dogs)
});

// POST dog data
app.post('/dogs', (req, res) => {
  console.log(req.body)
  // const name = req.body.name;
  // const breed = req.body.breed;
  // const weight = req.body.weight;
  const {name, breed, weight} = req.body;
  const id = Math.random().toString(36).substring(2, 5);
  const newDog = {
    id,
    name,
    breed,
    weight
  };

  dogs.push(newDog);
})



app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});