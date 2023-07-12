const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const { Pool } = require('pg');

const app = express();
const PORT = 8080;

const pool = new Pool({
  password: 'alvinng',
  port: 5432,
  user: 'alvinng',
  database: 'intro',
  host: 'localhost',
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');


app.get('/test', (req, res) => {
	res.send('ok');
})

app.get('/sandbox', (req, res) => {
	const templateVars = {};
	console.log(req.query.command);
  pool.query(req.query.command).then(data => {
		templateVars.result = data.rows;
		return res.render('sandbox', templateVars);
	}).catch(e => {
		templateVars.error = e.message;
		return res.render('sandbox', templateVars);
	})
})

app.get('/users', (req, resp) => {

  const templateVars = {};
	pool.query('SELECT * FROM users;')
		.then(res => {
			console.log(res.rows);
			templateVars.results = res.rows;
			// results: [{}]
			return resp.render('users', templateVars);
		})
		.catch(err => {
			console.log(err);
		})
	// return res.render('users', templateVars);
})

app.get('/users/:id', (req, res) => {
	const templateVars = {};
	// localhost::3000/users/11; DROP DATABASE USERS
	const id = req.params.id;
	console.log(id);
	pool.query(`SELECT * FROM users where id = $1`, [id])
		.then(data => {
			templateVars.users = data.rows;
			return res.render('users_index', templateVars);
		})
		.catch(err => {
			console.log(err);
		})
	
})

app.get('/pets', (req, res) => {  // app.get Is HTTP
	const templateVars = {};
	pool.query('SELECT * FROM pets;')
		.then(data => {
			console.log(data.rows);
			templateVars.results = data.rows
			return res.render('pets', templateVars);
		})
		.catch(err => {
			console.log(err);
		})

  
})

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

app.get('/api/:id', (req, res) => {
	const id = req.params.id;
	console.log(id);
  getAll(id)
		.then(results => {
			console.log(results);
			return res.json(results)
		})
		.catch(err => {
			console.log(err);
		})
  
})


app.get('/', (req, res) => {
	res.render('home');
})


app.listen(PORT, () => console.log("Server is listening on:", PORT));