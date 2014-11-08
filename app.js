

// var http = require('http')
// , url  = require('url')
// , fs   = require('fs');
// var neededstats = [];
// //var p = __dirname + '/' + req.params.filepath; //there is some error here you haven't defined req yet
// http.createServer(function (req,res) {
//     if(req.url=='/index.html' || req.url=='/') {
//     fs.readFile('./index.html',function(err,data){
//         res.end(data);
//     });
//     } 
//     else {
//         var p = __dirname + '/' + req.params.filepath;
//         fs.stat(p, function(err, stats) {
//             if (err) {
//                 throw err;
//             }
//         neededstats.push(stats.mtime);
//         neededstats.push(stats.size);
//         res.send(neededstats);
//    });
//    }

// }).listen(8888, '127.0.0.1');
// console.log('Server running.');

var express = require('express');
var app = express();

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'public/*.js'
    ]
  });
};

app.get('/', function(req, res) {
   res.sendfile('./index.html');
});

app.use(express.static('public'));

app.listen(8888);
console.log('Listening on port 8888');




// var http = require("http");
// var url = require("url");

// function start() {
// function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log("Server has started.");
// }

// exports.start = start;