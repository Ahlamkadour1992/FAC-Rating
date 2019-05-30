BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS facampus CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL
);

CREATE TABLE facampus (
  id SERIAL PRIMARY KEY,
  location VARCHAR(100),
  cohort_name VARCHAR(100),
  rate INTEGER NOT NULL CHECK (rate BETWEEN 0 AND 10),
  student_id INTEGER REFERENCES students(id)
);


INSERT INTO students (first_name, last_name) VALUES ('Ahlam', 'Kadour');
INSERT INTO students (first_name, last_name) VALUES ('Nareman', 'Ferro');

COMMIT;
