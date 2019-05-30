const dbConnection = require('../database/db_connection.js');

const postUserData = (first_name, last_name, location, cohort_name, rate, cb) => {
  console.log('hiiiiiiii');
  dbConnection.query('INSERT INTO users (first_name, last_name) VALUES ($1, $2);',
    [first_name, last_name],  (err, res) => {
      let postArray = [];
      if (err) {
        return console.log(err);
      } else {
        postArray.push(res);

      cb(dbConnection.query('INSERT INTO facampus (location, cohort_name, rate) VALUES ($1, $2, $3);',
    [location, cohort_name, rate], (err, res) => {
      if (err) {
        return console.log(err);
      } else {
        postArray.push(res);
        console.log('postArray', postArray);
      cb(null, postArray);
    }
    })
  );
}
});
}
module.exports = postUserData;
