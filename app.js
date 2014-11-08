
 
// var http = require("http");
// var fs = require('fs');
// var port = 8888;
// // var serverUrl = "127.0.0.1";
// var serverUrl = "54.213.132.53"
// var counter = 0;

// var server = http.createServer(function(req, res) {

//   counter++;
//   console.log("Request: " + req.url + " (" + counter + ")");
  
//   // if(req.url == "index.html") {

//     fs.readFile("index.html", function(err, text){
//       res.setHeader("Content-Type", "text/html");
//       res.end(text);
//     });
//     return;

//   // }

//   // res.setHeader("Content-Type", "text/html");
//   // res.end("<p>Hello World. Request counter: " + counter + ".</p>");

// });

// console.log("Starting web server at " + serverUrl + ":" + port);
// server.listen(port);

var http = require('http')
, url  = require('url')
, fs   = require('fs');
var neededstats = [];
//var p = __dirname + '/' + req.params.filepath; //there is some error here you haven't defined req yet
http.createServer(function (req,res) {
    if(req.url=='/index.html' || req.url=='/') {
    fs.readFile('./index.html',function(err,data){
        res.end(data);
    });
    } else {
        var p = __dirname + '/' + req.params.filepath;
        fs.stat(p, function(err, stats) {
            if (err) {
                throw err;
            }
        neededstats.push(stats.mtime);
        neededstats.push(stats.size);
        res.send(neededstats);
   });

}).listen(8888);
console.log('Server running.');




// var express = require('express');
// var app = express();
// var http = require('http').Server(app) ;
// var io = require('socket.io')(http) ;
// // var ADSR = require('adsr');
// //var net = require('net') ;
// //var fs = require('fs');
// var path = require('path');

// var createUser = require('./users.js');
// //var webrtc = require('./webrtc.js')

// // var assert = require('assert')
// // describe('Array', function(){
// //   describe('#indexOf()', function(){
// //     it('should return -1 when the value is not present', function(){
// //       assert.equal(-1, [1,2,3].indexOf(5));
// //       assert.equal(-1, [1,2,3].indexOf(0));
// //     })
// //   })
// // })

// module.exports = function(config) {
//   config.set({
//     frameworks: ['jasmine'],

//     files: [
//       'public/js/*.js'
//     ]
//   });
// };

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res){
// 	res.sendfile('index.html');
// });

// // app.get('/', function(req, res){
// // 	res.sendfile('html/peerjsex.html');
// // });

// io.on('connection', function(socket){
// 	console.log('a user connected');
// 	socket.on('disconnect', function(){
// 		console.log('user disconnected');
// 	});
// 	socket.on('osc on', function(msg){
// 		io.emit('osc on', msg) ;
// 		console.log(msg) ;
// 	});
// 	socket.on('osc off', function(msg){
// 		io.emit('osc off', msg) ;
// 		console.log(msg) ;
// 	});
// 		socket.on('sample on', function(msg){
// 		io.emit('sample on', msg) ;
// 		console.log(msg) ;
// 	});
// 		socket.on('midi on', function(msg){
// 		io.emit('midi on', msg) ;
// 		console.log(msg) ;
// 	});
// 		socket.on('latency', function(msg){
// 		io.emit('latency', msg) ;
// 		console.log(msg) ;
// 	});
// 		socket.on('latencySend', function(msg){
// 		io.emit('latencySend', msg) ;
// 		console.log(msg) ;
// 	});
// 		socket.on('latencyReturn', function(msg){
// 		io.emit('latencyReturn', msg) ;
// 		console.log(msg) ;
// 	});
// });

// http.listen(8888, function(){
// 	console.log('listening on *:8888');
// });

// // var http = require("http");


// // var net = require("net");

// // var server=net.createServer(function(socket){
// //     socket.on('connection',function(socket){
// //         console.log('socket connection...');
// //     });
// //     socket.on('data',function(message){
// //         console.log('socket message:'+message);
// //         socket.write('You wrote:'+message); 
// //         socket.end(); // <-- :)    
// //     });
// //     socket.on('error',function(error){
// //         console.log('error on socket message:'+error);      
// //     });
// // }).listen(1024);