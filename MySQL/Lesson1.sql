INSERT INTO `sep-2020`.cars VALUE (DEFAULT, 'Mazda'); # id = DEFAULT

SELECT * FROM students;

SELECT name FROM students;

SELECT * FROM students WHERE age = 15;

SELECT * FROM students WHERE name = 'rOmAn';

SELECT * FROM students WHERE name LIKE '%n';

SELECT * FROM students WHERE name LIKE 'o%';

SELECT * FROM students WHERE name LIKE '%e%';

SELECT * FROM students WHERE name LIKE '___a%';

SELECT * FROM students WHERE LENGTH(name) = 4;

SELECT * FROM students WHERE name LIKE 'o%' ORDER BY age DESC;

SELECT * FROM students ORDER BY age ASC;

SELECT * FROM students WHERE age != 20;
SELECT * FROM students WHERE age <> 20;

SELECT * FROM students WHERE age >= 20;

SELECT * FROM students WHERE age BETWEEN 20 AND 30;

SELECT * FROM students WHERE  age >= 20 AND age < 30;

SELECT * FROM students WHERE age > 18 AND name LIKE 'o%'; # WILDCARD

SELECT * FROM students WHERE age = 18 OR (name LIKE 'o%' AND gender LIKE 'f%');

SELECT * FROM students WHERE age BETWEEN 20 AND 30 OR name LIKE 'o%';

SELECT * FROM students where age = 25 OR age = 30 OR age = 35;
SELECT * FROM students WHERE age IN(20, 25, 30, 35);

# AGGREGATE FUNCTIONS

SELECT MAX(age) AS maxAge from students;

SELECT MIN(age) AS minAge from students;

SELECT AVG(age) FROM students;

SELECT COUNT(id) FROM students;

SELECT COUNT(id) FROM students WHERE age > 50;

SELECT SUM(age) FROM students;

SELECT
       AVG(rating) AS avgRat,
       COUNT(rating) as count
FROM ratings WHERE student_id = 5;


SELECT * FROM students ORDER BY age LIMIT 3;

# limit = 20, page = 5

SELECT * FROM students LIMIT 3 OFFSET 9;


UPDATE students SET name = 'VALENTIN', gender = 'chubaka' WHERE age = 20;

UPDATE students SET name = 'Moroz' WHERE age = 25;

UPDATE students SET age = 20 WHERE age > 40;

DELETE FROM students WHERE gender = 'chubaka';
