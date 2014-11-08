// var Myo = require('myo');
// var myMyo = Myo.create();
// // var my2Myo = Myo.create(1);
// var threshHold = 0.3;
// var myoActive = false
// var drawTime = []

// function connect() {
// 	myMyo.on('connected', function(){
//     console.log('connected!', this.id);
//     myoActive = true
//     // send partner connected

// 	});
// }

// // my2Myo.on('connected', function(){
// //     console.log('connected!', this.id)
// // });

// var ready1 = []
// ready1[0] = 1
// ready1[1] = false;

// function counter() {
//     var i = 5;
//     // This block will be executed 100 times.
//     setInterval(function(){
//         if (i == 0) {
//         	console.log("GO!");
// 			callback();
// 			clearInterval(this);
//         }
//         else console.log( 'Currently at ' + (i--) );
//     }, 1000);
// } // End

// console.log("Display message here: Calibrate your Myo!");

// var done = false;

// function getReady () {
// 	myMyo.on('fingers_spread', function(edge){
// 	    if(!edge) return;
// 	    if (ready1 == false) {
// 		    myMyo.vibrate();
// 		    myMyo.zeroOrientation();
// 		    console.log("zeroed1");
// 		    ready1[1] = true;
// 		    // send user.ready1    
// 		   for (var i = 0 ; i < 2 ; i++){
//     			if (user[i] != 0){
//     				user[i].send(ready1)
//     			}
//     		}
// 		    if (ready2 == true) {
// 		    	counter();
// 		    }
// 		}
// 	});
// }

// var ready2 = false;

// var gameover1 = false;

// function callback() {
// 	console.log('inside callback1');
// 	var time1 = new Date();
// 	var t1 = time1.getTime();
// 	myMyo.on('orientation', function(data){
// 	    if(Math.abs(data.x) > threshHold && gameover1 == false){
// 	    	var time11 = new Date();
// 	    	var t11 = time11.getTime();
// 	    	console.log(Math.abs(data.x));
// 	        console.log('BANG1!');
// 	        gameover1 = true;
// 	        console.log(t11 - t1);
// 	        drawTime[0] = 3
// 	        drawTime[1] = t11 - t1
// 	       	for (var i = 0 ; i < 2 ; i++){
//     			if (user[i] != 0){
//     				user[i].send(drawTime)
//     			}
//     		}

// 	    }
// 	});
// }

// 	// myMyo.on('imu', function(data){
// 	// 	console.log(data);
// 	// });