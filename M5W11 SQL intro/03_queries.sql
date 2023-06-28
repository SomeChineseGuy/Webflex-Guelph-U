SELECT * from users;
SELECT * from pets;

SELECT name, breed from pets;

-- Where
SELECT * from users where age > 10;

-- Limit
SELECT * FROM users where age > 10 limit 3;

-- Offset
SELECT * FROM users OFFSET 3 limit 3;

-- Order By
SELECT * from users 
ORDER BY age DESC;

-- JOIN
Select 
  users.name AS user_name,
  pets.name as pet_name
FROM users -- Left Table 
JOIN pets -- Right Table
on users.id = pets.user_id;

-- Join LEFT
SELECT 
  users.name as user_name,
  pets.name as pet_name
FROM users -- Left Table
LEFT JOIN pets -- Right Table
on users.id = pets.user_id;

-- Aggregate Functions
-- Count()
-- Sum()
-- AVG()