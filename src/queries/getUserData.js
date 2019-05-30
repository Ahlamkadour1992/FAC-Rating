// The code below to query your database
const dbConnection = require('../database/db_connection.js');

const getUserData = (cb) => {
  // dbConnection.query('SELECT first_name, last_name, location, cohort_name, rate FROM students INNER JOIN campuses ON students.id = campuses.student_id;', (err, res) => {
  // dbConnection.query('(SELECT first_name, last_name FROM students) UNION (SELECT location, cohort_name FROM campuses);', (err, res) => {
      // dbConnection.query('SELECT * FROM students ;', (err, res) => {
dbConnection.query(`SELECT first_name, last_name, location, cohort_name, rate
   FROM users
   INNER JOIN facampus
   ON users.id = facampus.id;`, (err, res) => {
    console.log('this is the response from users: ', res);
    if(err) return cb(err);

    // dbConnection.query('SELECT location, cohort_name, rate FROM campuses;', (err, res) => {
      // console.log('this is the response from campuses: ', res);
    // if(err) return cb(err);
//     dbConnection.query('SELECT * FROM rating;', (err, res) => {
//       console.log('this is the response from rating: ', res);
//       if(err) return cb(err);
    console.log('res.rows: ', res.rows);
    cb(null, res.rows);
  // });
// });
});
};

module.exports = getUserData;
