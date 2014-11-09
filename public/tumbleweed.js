// $(function() {
//   setInterval(function() {
//     $('.tumbleweed-image').animate({ left: $(window).width() + 'px' }, 6000, 'linear', function() {
//       $(this).css({ left: - $(this).width() + 'px' });
//     });
//   }, 6000);
// });

var left1 = 0
var rotate1 = 0

function moveTumbleweed(){
	if (left1 > 12000)
		left1 = -30
	left1 += 50
	// rotate
	$('.tumbleweed-image').css('margin-left', left1)
	// $('.tumbleweed-image').css('transform', 'rotate(7deg)') 
	// -webkit-transform: rotate(7deg);
}

var tumble = setInterval(moveTumbleweed, 50)

var left2 = 0

function moveTumbleweed2(){
	if (left2 > 6000)
		left2 = -20
	left2 += 30
	$('.tumbleweed-image2').css('margin-left', left2) 
}

var tumble = setInterval(moveTumbleweed2, 100)