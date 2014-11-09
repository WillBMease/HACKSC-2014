var left = 0

function moveTumbleweed(){
	left += 1
	$('div#itest').css('margin-left', left) 
}

var tumbleweed = setInterval(moveTumbleweed, 50)