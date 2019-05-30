//fetch 1:
fetch("/getStudentData")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(' this is the data in the fetch function', data);

  var table = document.getElementById('students-table');
  data.forEach(function(user) {
    var row = document.createElement('tr');

    var firstName = document.createElement('td');
    firstName.textContent = user.first_name;
    row.appendChild(firstName);

    var lastName = document.createElement('td');
    lastName.textContent = user.last_name;
    row.appendChild(lastName);

    var location = document.createElement('td');
    location.textContent = user.location;
    row.appendChild(location);

    var cohortName = document.createElement('td');
    cohortName.textContent = user.cohort_name;
    row.appendChild(cohortName);

    var cohortRate = document.createElement('td');
    cohortRate.textContent = user.rate;
    row.appendChild(cohortRate);

    table.appendChild(row);
  });
  })
  .catch((err) => {
console.log(err);
  })

// fetch 2:
const addButton = document.getElementById('button');
addButton.addEventListener('click', (event) => {
  event.preventDefault();

  let myfirstName = document.getElementById('F.name').value;
  console.log(myfirstName);
  let mylastName = document.getElementById('L.name').value;
  console.log(mylastName);
  let mylocation = document.getElementById('locat').value;
  console.log(mylocation);
  let mycohortName = document.getElementById('cohortN').value;
  console.log(mycohortName);
  let myrate = document.getElementById('rate').value;
  console.log(myrate);

  fetch('/postStudentData'+myfirstName+mylastName+mylocation+mycohortName+myrate, {
    method: 'POST',

  })
    .then((response2) => {
      console.log('hiii i am in the second fetch');
      return response2.json();
    })
    .then((data2) => {
      console.log(' this is the data in the fetch function', data2);

    var table = document.getElementById('students-table');
    data2.forEach(function(user) {
      var row = document.createElement('tr');

      var firstName = document.createElement('td');
      firstName.textContent = user.first_name;
      row.appendChild(firstName);

      var lastName = document.createElement('td');
      lastName.textContent = user.last_name;
      row.appendChild(lastName);

      var location = document.createElement('td');
      location.textContent = user.location;
      row.appendChild(location);

      var cohortName = document.createElement('td');
      cohortName.textContent = user.cohort_name;
      row.appendChild(cohortName);

      var cohortRate = document.createElement('td');
      cohortRate.textContent = user.rate;
      row.appendChild(cohortRate);

      table.appendChild(row);
    });
    })
    .catch((err) => {
    console.log(err);
    })
});
// const myForm = document.getElementById('form');
// myForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // const formData = new FormData();
//
//   fetch('/postStudentData', {
//     method: 'POST',
//     // body: formData
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log('this is my form data:', data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// })
