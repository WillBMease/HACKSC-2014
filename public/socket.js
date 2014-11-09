var socket = io() ;

// var socket = io.connect("http://localhost:8888");
// socket.on('connect', function() {
// 	console.log('connected');
// });

// window.onload = function() {
 
    var messages = [];
    // var socket = io.connect('http://localhost:8888');
    // var field = document.getElementById("field");
    // var sendButton = document.getElementById("send");
    // var content = document.getElementById("content");
    // console.log('maybe')
 console.log('in here')
    socket.on('test', function (data) {
        console.log('data is: ' + data)
        if (data.length == 2) {
            var c = peer.connect(data[0]);
            console.log('this is a TEST: ' + c)
          c.on('open', function(){
            connect(c);
            });
            c.on('error', function(err){ alert(err) }); 
        }
    });
 
    // sendButton.onclick = function() {
    //     var text = field.value;
    //     socket.emit('send', { message: text });
    // };

//         socket.on('message off', function(msgOff){
//     endNote(msgOff, oscillator) ;
// });
 
// }
// var interval = setInterval(sendMsg, 500)
// var yo = "hey"

// function sendMsg(){
//         socket.emit('test', yo)
// }