BEGIN;

DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS campuses CASCADE;
DROP TABLE IF EXISTS rating CASCADE;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

CREATE TABLE campuses (
  id SERIAL PRIMARY KEY,
  location VARCHAR(100),
  cohort_name VARCHAR(100),
  rate INTEGER NOT NULL CHECK (rate BETWEEN 0 AND 10),
  student_id INTEGER REFERENCES students(id)
);

CREATE TABLE rating (
  id SERIAL PRIMARY KEY,
  rate INTEGER NOT NULL CHECK (rate BETWEEN 0 AND 10),
  studentrate INTEGER REFERENCES campuses(student_id)
);

INSERT INTO students (first_name, last_name) VALUES ('Ahlam', 'Kadour');
INSERT INTO students (first_name, last_name) VALUES ('Nareman', 'Ferro');

COMMIT;
