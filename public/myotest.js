

// Myo.on('connected', function(){
//     console.log('connected!', this.id)
// });

var ready = false;

console.log("Display message here: Calibrate your Myo!");
myMyo.on('fingers_spread', function(edge){
    if(!edge) return;
    if(ready == false) {
	    myMyo.vibrate();
	    myMyo.zeroOrientation();
	    console.log("zeroed");
	    ready = true;
	    callback();
	}
});

function callback() {
	myMyo.on('orientation', function(data){
	    if(Math.abs(data.x) > 0.4){
	    	console.log(Math.abs(data.x));
	        console.log('BANG!');
	    }
	});
}
// 	myMyo.on('imu', function(data){
// 		console.log(data);
// 	});
// }
console.log("hello world");