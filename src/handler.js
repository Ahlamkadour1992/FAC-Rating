const path = require('path');
const fs = require('fs');
const querystring = require('query-string');
const url = require('url');

const getUserData = require('./queries/getUserData');
const postUserData = require('./queries/postUserData');

const handlerHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1> Sorry, there is Error </h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlerPublic = ((request, response, url) => {
  const extension = url.split('.')[1];
  const extenstionTypes = {
    html: 'text/html',
    js: 'application/javascript',
    css: 'text/css',
    jpg: 'image/jpg',
    png: 'image/png'
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('<h1> Sorry , I can not find the file </h1>');
    } else {
      response.writeHead(200, { 'Content-Type': extenstionTypes[extension] });
      response.end(file);
    }
  });
});
const handlerGetDB = (response) => {
    getUserData((err, users) => {
      console.log('this is the users in the handlerGetDB : ', users);
      if (err) throw err;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(users));
    });
};

const handlerPostDB = ((request, response) => {
  console.log('this is the request url in handlerPostDB : ', request.url);
  let data = '';
  request.on('data', chunk => {
    data += chunk;
    console.log('this is the data after chunk : ', data);
  });
  request.on('end', () => {
    console.log('the data', data);
    const parseFirstName = querystring.parse(data).first_name;
    const parseLastName = querystring.parse(data).last_name;
    const parseLocation = querystring.parse(data).location;
    const parseCohort = querystring.parse(data).cohort_name;
    const parseRate = querystring.parse(data).rate;

    console.log('the parseFirstName', parseFirstName);
    console.log('the parseLastName', parseLastName);
    console.log('the parseLocation', parseLocation);
    console.log('the parseCohort', parseCohort);
    console.log('the parseRate', parseRate);

    postUserData(parseFirstName, parseLastName, parseLocation, parseCohort, parseRate, (err, res) => {
      console.log('res is in postUserData :', res);
      if (err) throw err;
      response.writeHead(302, { 'Location': '/' });
      response.end(parseFirstName,parseLastName,parseLocation,parseCohort,parseRate);
    });
  });
});

module.exports = {
  handlerHome,
  handlerPublic,
  handlerGetDB,
  handlerPostDB
}
