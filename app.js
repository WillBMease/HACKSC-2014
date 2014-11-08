// // Load the http module to create an http server.
// var http = require('http');

// // Configure our HTTP server to respond with Hello World to all requests.
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World\n");
// });

// app.get('/', function(req, res){
// 	res.sendfile('index.html');
// });

// // Listen on port 8000, IP defaults to 127.0.0.1
// server.listen(8000);

// // Put a friendly message on the terminal
// console.log("Server running at http://127.0.0.1:8000/");


// A very basic web server in node.js
// Stolen from: Node.js for Front-End Developers by Garann Means (p. 9-10) 
 
var http = require("http");
var fs = require('fs');
var port = 3000;
var serverUrl = "127.0.0.1";
var counter = 0;

var server = http.createServer(function(req, res) {

  counter++;
  console.log("Request: " + req.url + " (" + counter + ")");
  
  if(req.url == "/index.html") {

    fs.readFile("index.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;

  }

  res.setHeader("Content-Type", "text/html");
  res.end("<p>Hello World. Request counter: " + counter + ".</p>");

});

console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);