
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
