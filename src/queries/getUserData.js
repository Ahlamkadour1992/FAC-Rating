// The code below to query your database
const dbConnection = require('../database/db_connection.js');

const getUserData = (cb) => {
  dbConnection.query('SELECT first_name, last_name, location, cohort_name, rate FROM students INNER JOIN campuses ON students.id = campuses.student_id;', (err, res) => {
  // dbConnection.query('SELECT first_name, last_name FROM students;', (err, res) => {
    console.log('this is the response from students: ', res);
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
  // dbConnection.query('SELECT * FROM campuses;', (err, res) => {
  //   console.log('this is the response from campuses: ', res);
  //   if(err) return cb(err);
  //   console.log('res.rows: ', res.rows);
  //   cb(null, res.rows);
  // });
  // dbConnection.query('SELECT * FROM rating;', (err, res) => {
  //   console.log('this is the response from rating: ', res);
  //   if(err) return cb(err);
  //   console.log('res.rows: ', res.rows);
  //   cb(null, res.rows);
  // });

//   dbConnection.query('SELECT * FROM students', (err, res) => {
//     console.log('this is the response from students: ', res);
//     if(err) return cb(err);
//     // console.log('res.rows for students: ', res.rows);
//     // let resArray = JSON.stringify(res.rows);
//     // console.log('resArray is ->  ', resArray);
//     //save the response somewhere and run the next query
//     const resArray = res.rows;
//     // console.log('this is the resArray -> ', resArray);
//     dbConnection.query('SELECT * FROM campuses;', (err, res) => {
//         console.log('this is the response from campuses: ', res);
//         if(err) return cb(err);
//     //     // console.log('res.rows for campuses: ', res.rows);
//     //     // resArray += JSON.stringify(res.rows);
//     //     // console.log('resArray after campuses is : ', resArray);
//         const resArray2 = res.rows ;
//         console.log('this is the resArray2 -> ', resArray2);
//
//         dbConnection.query('SELECT * FROM rating;', (err, res) => {
//             console.log('this is the response from rating: ', res);
//             if(err) return cb(err);
//     //         // console.log('res.rows for rating: ', res.rows);
//     //         // resArray += JSON.stringify(res.rows);
//     //         // console.log('resArray after rating is : ', resArray);
//             const resArray3 = res.rows;
//             const result = resArray.concat(resArray2.concat(resArray3));
//            cb(null, result);
//             //SELECT students.first_name, students.last_name, campuses.location, campuses.cohort_name FROM campuses INNER JOIN students ON campuses.student_id = students.id WHERE VALUES ($1, $2, $3, $4);
//     });
//   });
//   });
};

module.exports = getUserData;
