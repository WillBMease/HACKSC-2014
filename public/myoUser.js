/*
 * Main user module for Myo.js
 */
var movect = 0
var s
// random = 0,
myo_ = {
	//Global Variables for our Myo Users
	globals: {
		myoUser: Myo.create(),
		threshHold: 0.4,
		cheatThreshold: 0.2,
		myoActive: false,
		drawTime: [3],
		userReady: [1, false],
		opponentReady: false,
		gameover: false,
		done: false,
		redSignal: $('#redSignal'),
		yellowSignal: $('#yellowSignal'),
		greenSignal: $('#greenSignal'),
		opponentTime: -1,
		opponentPlayAgain: false,
		userPlayAgain: [4, false],
		playAgainDone: false,
		cheatPlayAgain: [5, false],
		opponentCheatPlayAgain: false,
		yellowLight: 0,
		redLight: 0,
		userFired: false,
		oppFired: false,
		random: 0,
		lives: 3,
		myLives: 3,
		opponentLives: 3
	},
	init: function() {
		//init function
		s = this.globals;

		// s.myoUser.on('pose', function(poseName){
		// 	console.log(poseName);
		// 	playSound('gunshot')
		// })
		// console.log('here')
		   // myo_.debugAll();
		s.myoUser.on('connected', function(){
    		console.log('Connected! Myo: ', this.id);

    	s.myoUser.on('gyroscope', function(data){
    		movect++
    		if (movect > 30 && movect % 3 == 0)
				moveCircle(data.z, data.y)
		});

		s.myoUser.on('fist', function() {
				$('.playButton').trigger('click');
    		});
    	});
	},
	primeMyo: function() {
		console.log('primeMyo Function');
		$('#set').text('COCK YOUR WEAPON!').show();
		s.myoUser.on('fingers_spread', function(edge){
			$('#set').text('GET READY!');
		    if(!edge) return;
		    if (s.userReady[1] == false) {
			    s.myoUser.vibrate();
			    s.myoUser.zeroOrientation();
			    console.log("Gun Loaded!");
			    playSound('shotgunload')
			    s.userReady[1] = true;
			    // s.userReady[2] = +new Date()
			    // send s.user.userReady Array to Data Process
			    for (var i = 1 ; i < userLimit ; i++){
	    			if (user[i] != 0){
	    				user[i].send(s.userReady)
	    			}
	    		}
			    if (s.opponentReady == true) {
			    	console.log("I'm Ready 2nd");
			    	// myo_.redCountDown();
			    }
			}
		});
	},
	redCountDown: function() {
		//change this function to display on screen
		//console.log('countDown Function');
		//var i = s.countdown;
		$('#set').show();
		$('#set').text('GET READY!');
		var i = 1;
	    s.redLight = setInterval(function(){
	    	s.redSignal.css('background-color','red');
	    	// myo_.cheated(s.redLight);
	        if (i == 0) {
				s.yellowSignal.css('background-color','yellow');
				clearInterval(s.redLight);
				myo_.yellowCountDown();
	        }
	        else console.log( 'Countdown: ' + (i--) );
	    }, 1000);
	},
	yellowCountDown: function() {
		console.log('new yellowcountdown')
		// var j = Math.floor((Math.random() * 4) + 1);;
		var j = s.random
	    s.yellowLight = setInterval(function(){
	    	// myo_.cheated(s.yellowLight);
	        if (j == 0) {
	        	$('#set').text('DRAW!');
	        	console.log("GO!");
				s.greenSignal.css('background-color','green');
				s.myoUser.off('orientation');
				clearInterval(s.yellowLight);
				myo_.startGame();
				console.log('yellow')
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
		    	s.userFired = true;
		    	var e1 = new Date();
		    	var endTime = e1.getTime();
		    	s.drawTime[1] = endTime - startTime;
		    	$('#yourTimeSeconds').text(s.drawTime[1]);
		    	console.log('Position: ' + hypot);
		        console.log('BANG!');
		        playSound('gunshot')
		        console.log('Fire Time: ' + s.drawTime[1]);
		       	for (var i = 1 ; i < userLimit ; i++){
	    			if (user[i] != 0){
	    				user[i].send(s.drawTime);
	    			}
	    		}

	    		// if(s.oppFired == true){
	    		// 	// if(s.myLives > 0 && s.opponentLives > 0) {
				   //    if (s.drawTime[1] < s.opponentTime) {
				   //      console.log("Good job!")
				   //      // --s.opponentLives;
				   //    }
				   //    else {
				   //      console.log("You lost a life!")
				   //      // --s.myLives;
				   //    }
				   // // }
			    // }
			    if(s.myLives > 0 && s.opponentLives > 0) {
			    	// console.log('My Lives hi:' + s.myLives + ', Opp Lives:' + s.opponentLives)
			    	myo_.endSequence();
			    } else {
					if(s.myLives > 0) {
						console.log("you won!");
						$('#set').text('YOU WON!');
					} else {
						console.log("you lost!");
						$('#set').text('YOU LOSE!');
					}
				}
	    		s.myoUser.off('orientation');
	    		
		    }
		});
	},
	endSequence: function() {
		console.log("Send result to db (TODO)");
		console.log("Make a fist to play again!");
		clearInterval(s.yellowLight);
		clearInterval(s.redLight);
		setTimeout(100);
		if (s.opponentTime == -1) { // opponent lost; you won
			--s.opponentLives;
			console.log("You survived");
			$('#oppHealthContainer img').last().remove();
			$('#set').text('YOU SURVIVED!');
		} else {
			--s.myLives;
			console.log("You lost a life");
			$('#yourHealthContainer img').last().remove();
			$('#set').text('YOU LOST A LIFE!');
		}
		console.log('My Lives:' + s.myLives + ', Opp Lives:' + s.opponentLives)
		if(s.myLives > 0 && s.opponentLives > 0) {
			$('#set').text('RELOAD YOUR WEAPON!');
			s.myoUser.on('fist', function(edge) {
				playSound('holster')
				s.userPlayAgain[1] = true;
		       	for (var i = 1 ; i < userLimit ; i++){
					if (user[i] != 0) {
						user[i].send(s.userPlayAgain);
					}
				}
			    if (s.opponentPlayAgain == true) {
			    	console.log("Playing again second!");
					myo_.reset();
					myo_.primeMyo();
			    }
			});
		} else {
			if(s.myLives > 0) {
				console.log("you won!");
				$('#set').text('GUNSLINGER CHAMPION!');
			} else {
				console.log("you lost!");
				$('#set').text('YOU\'RE DEAD!');
			}
			setTimeout(function(){
				myo_.reset();
			    clearInterval(s.yellowLight);
			    clearInterval(s.redLight);	
			    $('#yourHealthContainer').html('<img src="img/Heartfull.png"><img src="img/Heartfull.png"><img src="img/Heartfull.png">');
			    $('#oppHealthContainer').html('<img src="img/Heartfull.png"><img src="img/Heartfull.png"><img src="img/Heartfull.png">');	
				s.myLives = 3;
				s.opponentLives = 3;
				myo_.primeMyo();
			},5000);
		}
		
	},
	cheated: function(light) {

		s.myoUser.on('orientation', function(data) {
			var hypot = Math.sqrt(data.x * data.x + data.y * data.y + data.z * data.z);
			if (hypot > s.cheatThreshold && s.gameover == false) {
				clearInterval(light);
				console.log('Cheater! Position: ' + hypot);
				s.myoUser.off('orientation');
				s.cheatPlayAgain[1] = true;
				s.cheatPlayAgain[2] = light;
			    for (var i = 1 ; i < userLimit ; i++){
	    			if (user[i] != 0){
	    				user[i].send(s.cheatPlayAgain);
	    			}
	    		}
	    		myo_.reset();
				myo_.primeMyo();
			}
		});
	},
	reset: function() {
		//
		s.drawTime[1] = 0;
		s.opponentTime = -1;

		s.userFired = false;
		s.oppFired = false;
		s.userReady[1] = false;
		s.cheatPlayAgain[1] = false;
		s.opponentReady = false;
		s.gameover = false;
		s.done = false;
		s.playAgainDone = false;
		s.opponentPlayAgain = false;
		s.userPlayAgain = [4, false];
		s.cheatPlayAgain = [5, false];
		s.opponentCheatPlayAgain = false;
		s.yellowLight = 0;
		s.redLight = 0;
		benchmark[0] = 0;
		synchronize[2] = 0;

		s.redSignal.css('background-color','white');
		s.yellowSignal.css('background-color','white');
		s.greenSignal.css('background-color','white');

		s.myoUser.off('orientation');
		s.myoUser.off('fist');
		s.myoUser.off('imu');
		s.myoUser.off('fingers_spread');
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
