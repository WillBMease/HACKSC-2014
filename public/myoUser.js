/*
 * Main user module for Myo.js
 */

var s,
myo_ = {
	//Global Variables for our Myo Users
	globals: {
		myoUser: Myo.create(),
		threshHold: 0.3,
		myoActive: false,
		drawTime: [3],
		userReady: [1, false],
		opponentReady: false,
		gameover: false,
		countdown: 5,
		done: false
	},
	init: function() {
		//init function
		s = this.globals;
		s.myoUser.on('connected', function(){
    		console.log('Connected! Myo: ', this.id);
    		myo_.primeMyo();
    	});
	},
	primeMyo: function() {
		console.log('primeMyo Function');
		s.myoUser.on('fingers_spread', function(edge){
		    if(!edge) return;
		    if (s.userReady[1] == false) {
			    s.myoUser.vibrate();
			    s.myoUser.zeroOrientation();
			    console.log("Gun Loaded!");
			    s.userReady[1] = true;
			    // send s.user.userReady Array to Data Process
			   for (var i = 0 ; i < 2 ; i++){
	    			if (user[i] != 0){
	    				user[i].send(s.userReady)
	    			}
	    		}
			    if (ready2 == true) {
			    	myo_.countDown();
			    }
			}
		});
	},
	countDown: function() {
		//change this function to display on screen
		console.log('countDown Function');
		var i = s.countdown;
	    setInterval(function(){
	        if (i == 0) {
	        	console.log("GO!");
				myo_.startGame();
				clearInterval(this);
	        }
	        else console.log( 'Countdown: ' + (i--) );
	    }, 1000);
	},
	startGame: function() {
		console.log('startGame Function');
		var s1 = new Date();
		var startTime = s1.getTime();
		s.myoUser.on('orientation', function(data){
		    if(Math.abs(data.x) > s.threshHold && s.gameover == false){
		    	s.gameover = true;
		    	var e1 = new Date();
		    	var endTime = e1.getTime();
		    	s.drawTime[1] = endTime - startTime;
		    	console.log('X Position: ' + Math.abs(data.x));
		        console.log('BANG!');
		        console.log('Fire Time: ' + s.drawTime[1]);
		       	for (var i = 0 ; i < 2 ; i++){
	    			if (user[i] != 0){
	    				user[i].send(s.drawTime);
	    			}
	    		}
		    }
		});
	},
	debug: function() {
		s.myoUser.on('pose', function(poseName){
			console.log(poseName);
		});
	}

};

myo_.init();

// var myMyo = Myo.create();
// var threshHold = 0.3;
// var myoActive = false
// var drawTime = []
// var ready1 = []
// ready1[0] = 1
// ready1[1] = false;
// var ready2 = false;
// var gameover1 = false;

// function connect() {
// myMyo.on('connected', function(){
//    console.log('connected!', this.id);
//    myoActive = true
// });
// }

// my2Myo.on('connected', function(){
//     console.log('connected!', this.id)
// });

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

// function getReady() {
// 	myMyo.on('fingers_spread', function(edge){
// 	    if(!edge) return;
// 	    if (ready1[1] == false) {
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
// // }

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

// myMyo.on('pose', function(poseName){
// 			console.log(poseName);
// 		})

// getReady()

// // var Myo = require('myo');
// // var myMyo = Myo.create();
// // // var exports = module.exports = {};
         
// // // exports.first = function() {
  

// // Myo.on('connected', function(){
// //     console.log('connected!', this.id)
// // });

// // var ready = false;

// // console.log("Display message here: Calibrate your Myo!");
// // myMyo.on('fingers_spread', function(edge){
// //     if(!edge) return;
// //     if(ready == false) {
// // 	    myMyo.vibrate();
// // 	    myMyo.zeroOrientation();
// // 	    console.log("zeroed");
// // 	    ready = true;
// // 	    callback();
// // 	}
// // });

// // function callback() {
// // 	myMyo.on('orientation', function(data){
// // 	    if(Math.abs(data.x) > 0.4){
// // 	    	console.log(Math.abs(data.x));
// // 	        console.log('BANG!');
// // 	    }
// // 	});
// // }
// // // 	myMyo.on('imu', function(data){
// // // 		console.log(data);
// // // 	});
// // // }
// // console.log("hello world");



// // // };


// var myo = Myo.create(0);
// 		myo.on('pose', function(poseName){
// 			console.log(poseName);
// 			var msg = []
// 			msg[0] = 2
// 			msg[1] = poseName
// 	for (var i = 0 ; i < 4 ; i++){
// 		if (user[i] != 0){
// 			user[i].send(msg)
// 		}
// 	}
// 		})
// 		myo.on('arm_recognized', function(){
// 			console.log('good!', this.id);
// 		})
// 		myo.on('arm_lost', function(){
// 			console.log('bad', this.id);
// 		})
// 		myo.on('wave_left', function(){
// 			console.log('wave Left!');
// 		})
// 		myo.on('fist', function(){
// 			console.log('BT PLZ');
// 			// myo.requestBluetoothStrength();
// 		})
// 		// myo.on('connected', function(){
// 		// 	setInterval(function(){
// 		// 		myo.requestBluetoothStrength();
// 		// 	}, 100);
// 		// })
// 		myo.on('bluetooth_strength', function(BTS){
// 			var width = ((BTS * -1 - 40 ) / 50 ) * 100  + '%';
// 			$('#log').width(width);
// 			console.log(width);
// 		})
// 		myo.on('double_tap', function(){
// 			this.zeroOrientation();
// 			console.log('double tap') ;
// 		});
// 		myo.on('gyroscope', function(data){
// 			if(data.y < -2) console.log('hit!');
// 		});
