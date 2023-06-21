const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;

// middleware
const sassMiddleware = require('./lib/sass-middleware');
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});