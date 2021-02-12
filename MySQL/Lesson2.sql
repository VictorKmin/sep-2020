SELECT students.name,
       ratings.rating
FROM students
         JOIN ratings ON students.id = ratings.student_id;


SELECT s.name,
       r.rating,
       l.label
FROM ratings r
         JOIN lesson l ON l.id = r.rating
         JOIN students s ON s.id = r.lesson_id;


SELECT s.name,
       r.rating,
       l.label
FROM ratings r
         JOIN lesson l ON l.id = r.rating
         JOIN students s ON s.id = r.lesson_id
WHERE r.rating = 2;


SELECT COUNT(gender), gender, age
FROM students
GROUP BY gender, age;


SELECT AVG(rating), s.name
FROM ratings JOIN students s ON s.id = ratings.student_id
GROUP BY s.id;


SELECT CONCAT(students.name, '_', l.label)
FROM students
         JOIN ratings r on students.id = r.student_id
         JOIN lesson l on l.id = r.lesson_id;



SELECT * FROM students JOIN ratings r on students.id = r.student_id WHERE r.rating = 5;

SELECT * FROM students WHERE id IN (SELECT student_id FROM ratings WHERE rating = 5);
SELECT * FROM students WHERE id IN ( 5, 6, 5, 3 );

SELECT DISTINCT(name), COUNT(name) FROM students GROUP BY name;



SELECT AVG(rating), s.name
FROM ratings JOIN students s ON s.id = ratings.student_id
GROUP BY s.id;


SELECT * FROM students WHERE age NOT IN(25, 30, 35);
