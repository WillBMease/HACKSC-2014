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
		opponentReady: true,
		gameover: false,
		countdown: 5,
		done: false,
		redSignal: $('#redSignal'),
		yellowSignal: $('#yellowSignal'),
		greenSignal: $('#greenSignal'),
		opponentTime: 0,
	},
	init: function() {
		//init function
		s = this.globals;
		s.myoUser.on('connected', function(){
    		console.log('Connected! Myo: ', this.id);
    		myo_.primeMyo();
    		// myo_.debugAll();
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
			    if (s.opponentReady == true) {
			    	console.log("I'm Ready 2nd");
			    	myo_.redCountDown();
			    }
			}
		});
	},
	redCountDown: function() {
		//change this function to display on screen
		//console.log('countDown Function');
		//var i = s.countdown;
		var i = 1;
	    var redLight = setInterval(function(){
	    	s.redSignal.css('background-color','red');
	        if (i == 0) {
				s.yellowSignal.css('background-color','yellow');
				clearInterval(redLight);
				myo_.yellowCountDown();
	        }
	        else console.log( 'Countdown: ' + (i--) );
	    }, 1000);
	},
	yellowCountDown: function() {
		var j = Math.floor((Math.random() * 4) + 1);;
	    var yellowLight = setInterval(function(){
	        if (j == 0) {
	        	console.log("GO!");
				s.greenSignal.css('background-color','green');
				myo_.startGame();
				clearInterval(yellowLight);
	        }
	        else console.log( 'Countdown: ' + (j--) );
	    }, 1000);
	},
	startGame: function() {
		console.log('startGame Function');
		var s1 = new Date();
		var startTime = s1.getTime();
		s.myoUser.on('orientation', function(data){
			var hypot = Math.sqrt(data.x * data.x + data.y * data.y + data.z * data.z);
		    if(hypot > s.threshHold && s.gameover == false) {
		    	s.gameover = true;
		    	var e1 = new Date();
		    	var endTime = e1.getTime();
		    	s.drawTime[1] = endTime - startTime;
		    	console.log('Position: ' + hypot);
		        console.log('BANG!');
		        console.log('Fire Time: ' + s.drawTime[1]);
		       	for (var i = 0 ; i < 2 ; i++){
	    			if (user[i] != 0){
	    				user[i].send(s.drawTime);
	    			}
	    		}
	    		s.myoUser.off('orientation');
	    		// myo_.endSequence();
		    }
		});
	},
	endSequence: function() {
		console.log("Send result to db (TODO)");
		console.log("Make a fist to play again!");
		s.myoUser.on('fist', function(edge) {
			myo_.reset();
			myo_.primeMyo();
			s.myoUser.off('fist');
		});
	},
	reset: function() {
		s.drawTime[1] = 0;
		s.userReady[1] = false;
		s.opponentReady = false;
		s.gameover = false;
		s.countdown = 5;
		s.done = false;
	},
	debugPoses: function() {
		s.myoUser.on('pose', function(poseName){
			console.log(poseName);
		});
	},
	debugAll: function() {
		s.myoUser.on('fingers_spread', function(edge) {
			s.myoUser.zeroOrientation();
		});
		s.myoUser.on('imu', function(data){
			data = data.orientation;
			var hypot = Math.sqrt(data.x * data.x + data.y * data.y + data.z * data.z);
			console.log(hypot);
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
