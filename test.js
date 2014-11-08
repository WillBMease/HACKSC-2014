var Myo = require('myo');
var myMyo = Myo.create();

Myo.on('connected', function(){
    console.log('connected!', this.id)
});

myMyo.on('connected', function(){
    console.log('connected!', this.id)
});

myMyo.on('fingers_spread', function(edge){
    if(!edge) return;
    console.log('Hello Myo!');
    myMyo.vibrate();
});

// myMyo.on('imu', function(data){
// 	console.log(data);
// }) 

console.log("hello world");