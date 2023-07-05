CREATE TABLE users (
  id SERIAL PRIMARY KEY, -- serial tells the db to auto increment
  name VARCHAR,
  age INTEGER,
  email TEXT
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY, -- serial tells the db to auto increment
  name TEXT,
  species TEXT,
  breed TEXT,
  sex TEXT,
  age INTEGER,
  user_id INTEGER
);