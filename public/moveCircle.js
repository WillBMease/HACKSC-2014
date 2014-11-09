var xcss = 100, ycss = 150

function moveCircle(x, y){
	if (x > 0)
	xcss += (x*1.5)*(-1)
	if (y > 0)
	ycss += (y*1.5)*(-1)
		if (x > 0){
			$('.full-circle').css('left', xcss)
		}
		else if (x < 0){
			$('.full-circle').css('left', xcss)
		}
		if (y > 0){
			$('.full-circle').css('top', ycss)
		}
		else if (y < 0){
			$('.full-circle').css('top', ycss)
		}
}