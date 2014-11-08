var Myo = require('myo');
var myMyo = Myo.create();

myMyo.on('connected', function(){
console.log('connected!', this.id);
});

myMyo.on('fingers_spread', function(edge){
    console.log("spread");
});

myMyo.on('fist', function(edge) {
	myMyo.off('fingers_spread');
});