

// var myotest = require('./myotest.js');
// var Myo = require('myo');
// var myMyo = Myo.create();
// var test = require('../public/myotest.js')

var express = require('express');
var app = express();

// var http = require('http')
  // , server = http.createServer(app)
// var io = require('socket.io').listen(server);

// var io = require('socket.io').listen(app.listen(8888));

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
// server.listen(8888)
console.log('Listening on port 8888');


process.on('uncaughtException', function (err) {
    console.log(err);
}); 



// io.on('connection', function(socket){
// 	console.log('a user connected');
// 	socket.on('disconnect', function(){
// 		console.log('user disconnected');
// 	});
// 	socket.on('test', function(msg){
// 		io.emit('test', msg) ;
// 		console.log(msg) ;
// 	});
// 	// socket.on('osc off', function(msg){
// 	// 	io.emit('osc off', msg) ;
// 	// 	console.log(msg) ;
// 	// });
// 	// 	socket.on('sample on', function(msg){
// 	// 	io.emit('sample on', msg) ;
// 	// 	console.log(msg) ;
// 	// });

// });

// io.sockets.on('connection', function (socket) {
// 	console.log(socket)
//     socket.emit('message', { message: 'welcome to the chat' });
//     socket.on('send', function (data) {
//         io.sockets.emit('message', data);
//     });
// });

// io.sockets.on('connection', function (socket) { // First connection
// 	// users += 1; // Add 1 to the count
// 	// reloadUsers(); // Send the count to all the users
// 	socket.on('message', function (data) { // Broadcast the message to all
// 			socket.broadcast.emit('message', "hi");
// 	});
// 	socket.on('disconnect', function () { // Disconnection of the client
// 		// users -= 1;
// 		// reloadUsers();
// 	});
// });