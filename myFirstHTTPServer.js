// Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var templates = require('./templates/manage_file');
// Lets define a port we want to listen to
var PORT = 8080;

// We need a function which handles requests and send response
function handleRequest (request, response) {
  try {
    console.log(request.url);
    dispatcher.dispatch(request, response);
  } catch(err) {
    console.log(err);
  }
}
dispatcher.setStatic('resources');

// A sample GET request
dispatcher.onGet('/page1', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var body = templates.read('brands.txt'); // readfile
  res.end(body);
});

// A sample POST request
dispatcher.onPost('/page1', function (req, res) {
  var body = templates.write('brands.txt', req.body); // readfile
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Got Post Data');
});

// Create a server
var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT);
});
