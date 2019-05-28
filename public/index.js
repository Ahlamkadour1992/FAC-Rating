const addButton = document.getElementById('button');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
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
});
