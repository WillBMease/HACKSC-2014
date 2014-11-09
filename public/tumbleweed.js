// $(function() {
//   setInterval(function() {
//     $('.tumbleweed-image').animate({ left: $(window).width() + 'px' }, 6000, 'linear', function() {
//       $(this).css({ left: - $(this).width() + 'px' });
//     });
//   }, 6000);
// });

var left1 = 0

function moveTumbleweed(){
	left1 += 50
	$('.tumbleweed-image').css('margin-left', left1) 
}

var tumble = setInterval(moveTumbleweed, 50)

var left2 = 0

function moveTumbleweed2(){
	left2 += 30
	$('.tumbleweed-image2').css('margin-left', left2) 
}

var tumble = setInterval(moveTumbleweed2, 100)