var left = 0

function moveCloud(){
	left += 1
	$('div#itest').css('margin-left', left) 
}

var cloud = setInterval(moveCloud, 50)