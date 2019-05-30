const handlers = require('./handler');

const router = (request, response) => {
  if (request.url === '/') {
    handlers.handlerHome(request, response);
  } else if (request.url === '/getStudentData') {
    handlers.handlerGetDB(response);
  } else if (request.url === '/postStudentData') {
    handlers.handlerPostDB(request, response);
  } else if (request.url.indexOf('/public') !== -1) {
    handlers.handlerPublic(request, response, request.url);
  } else {
    response.writeHead(404, { 'Content-Type' : 'text/html' });
    response.end('<h1> 404 , Page Not Found</h1>');
  }
};


module.exports = router;
