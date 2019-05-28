const dbConnection = require('../database/db_connection.js');

const postUserData = (first_name, last_name, location, cohort_name, rate, cb) => {
  dbConnection.query(
    'INSERT INTO students (first_name, last_name) VALUES ($1, $2);',
    [first_name, last_name],
    'INSERT INTO campuses (location, cohort_name, rate) VALUES ($1, $2, $3);',
    [location, cohort_name, rate],
    (err, res) => {
      if (err) return (err);
      cb(null, res);
    }
  );

//   dbConnection.query('INSERT INTO students (first_name, last_name) VALUES ($1, $2)',
//     [first_name, last_name], (err, res1) => {
//       let postResArr = [];
//       postResArr += res1;
//        if (err) return console.log(err);
//        console.log('postResArr after students is : ', postResArr);
//        dbConnection.query('INSERT INTO campuses (location, cohort_name) VALUES ($1, $2)',
//        [location, cohort_name], (err, res2) => {
//            if (err) return console.log(err);
//            console.log('postResArr after campuses is : ', postResArr);
//            postResArr += res2;
//            dbConnection.query('INSERT INTO rating (rate) VALUES ($1)',
//            [rate], (err, res3) => {
//                if (err) return console.log(err);
//                console.log('postResArr after rating is : ', postResArr);
//                postResArr += res3;
//            cb(null, postResArr);
//          });
//        });
// });
};



module.exports = postUserData;
