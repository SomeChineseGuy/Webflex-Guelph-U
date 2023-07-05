console.log('hello everyone!');

const {Pool, Client} = require('pg');

console.log(Pool);
console.log(Client);

const pool = new Pool({
  password: 'alvinng',
  port: 5432,
  user: 'alvinng',
  database: 'intro',
  host: 'localhost',
});



const client = new Client({
  password: process.env.DB_PASSWORD,
  port: 5432,
  user: 'alvinng',
  database: 'intro',
  host: 'localhost',
})

client.connect()

// client.query('SELECT * FROM pets;',  ((err, res) => {
//   if(err) throw err;

//   console.log('This is from the client');
//   console.log(res.rows);
// }));


console.log(pool.query('SELECT * FROM pets;', (err, res) => {
  if(err) throw err;

  console.log('This is from the pool======================');
  console.log(res.rows);
}))


const getAll = (item) => {
  return pool.query(`SELECT * FROM ${item};`)
  .then(res => {
    console.log('This is from our promise!==========================');
    // console.log(res.rows);
    return res.rows
  })
  .catch(err => {
    console.log(err);
  })
}

console.log(getAll('pets'));
console.log(getAll('users'));