var Myo = require('myo');
var myMyo = Myo.create();
var my2Myo = Myo.create(1);
var threshHold = 0.3;

myMyo.on('connected', function(){
    console.log('connected!', this.id)
});

my2Myo.on('connected', function(){
    console.log('connected!', this.id)
});

var ready1 = false;

function counter() {
    var i = 5;
    // This block will be executed 100 times.
    setInterval(function(){
        if (i == 0) {
        	console.log("GO!");
			callback();
			callback2();
			clearInterval(this);
        }
        else console.log( 'Currently at ' + (i--) );
    }, 1000);
} // End

console.log("Display message here: Calibrate your Myo!");

var done = false;

myMyo.on('fingers_spread', function(edge){
    if(!edge) return;
    if(ready1 == false) {
	    myMyo.vibrate();
	    myMyo.zeroOrientation();
	    console.log("zeroed1");
	    ready1 = true;
	}
	if(ready1 == true && ready2 == true && done == false)
    {
    	done = true
    	counter();
    	console.log("START!");
    }
});

var ready2 = false;

my2Myo.on('fingers_spread', function(edge){
    if(!edge) return;
    if(ready2 == false) {
	    my2Myo.vibrate();
	    my2Myo.zeroOrientation();
	    console.log("zeroed2");
	    ready2 = true;
	}
	if(ready1 == true && ready2 == true && done == false)
    {
    	done = true;
    	counter();
   		console.log("START!");
   	}
});


var gameover1 = false;

function callback() {
	console.log('inside callback1');
	var time1 = new Date();
	var t1 = time1.getTime();
	myMyo.on('orientation', function(data){
	    if(Math.abs(data.x) > threshHold && gameover1 == false){
	    	var time11 = new Date();
	    	var t11 = time11.getTime();
	    	console.log(Math.abs(data.x));
	        console.log('BANG1!');
	        gameover1 = true;
	        console.log(t11 - t1);
	    }
	});
}

var gameover2 = false;

function callback2() {
	console.log('inside callback2');
	var time2 = new Date();
	var t2 = time2.getTime();
	my2Myo.on('orientation', function(data){
	    if(Math.abs(data.x) > threshHold && gameover2 == false){
	    	var time22 = new Date();
	    	var t22 = time22.getTime();
	    	console.log(Math.abs(data.x));
	        console.log('BANG2!');
	        gameover2 = true;
	        console.log(t22 - t2);
	    }
	});
}
	// myMyo.on('imu', function(data){
	// 	console.log(data);
	// });