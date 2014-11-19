var canvasvert = document.getElementById('canvasVertical');
var canvashor = document.getElementById('canvasHorizontal')
var drawvert = canvasvert.getContext('2d');
var drawhor = canvashor.getContext('2d');

var xcss = 100, ycss = 150

function moveCircle(x, y){
	if (xcss >= 0 && xcss <= 1050) {
		xcss += (x*1.5)*(-1)
	}
	else if (xcss < 0){
		xcss = 0
	}
	else if (xcss > 1050){
		xcss = 1050
	}
	if (ycss >= 0 && ycss <= 500){
		ycss += (y*1.5)
	}
	else if (ycss < 0){
		ycss = 0
	}
	else if (ycss > 500){
		ycss = 500
	}
			$('.full-circle').css('left', xcss)
			$('.full-circle').css('top', ycss)
			$('#canvasVertical').css('left', xcss)
			$('#canvasVertical').css('top', ycss)
			$('#canvasHorizontal').css('left', xcss)
			$('#canvasHorizontal').css('top', ycss)
			clearRect()
			rectVert()
			rectHor()
}


function rectVert() {
drawvert.beginPath();
drawvert.rect(78,18,1,152);
drawvert.fillStyle = '#222';
drawvert.fill();
drawvert.strokeStyle = '#222';
drawvert.closePath();
drawvert.stroke();
}

function rectHor() {
drawhor.beginPath();
drawhor.rect(3,96,151,1);
drawhor.fillStyle = '#222';
drawhor.fill();
drawhor.strokeStyle = '#222';
drawhor.closePath();
drawhor.stroke();
}

function clearRect() {
drawvert.clearRect(0, 0, 160, 180);
drawhor.clearRect(0, 0, 160, 180);
}




// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all?true:false

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0
var tempY = 0

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
    xcss = e.pageX
    ycss = e.pageY

			$('.full-circle').css('left', xcss)
			$('.full-circle').css('top', ycss)
			$('#canvasVertical').css('left', xcss)
			$('#canvasVertical').css('top', ycss)
			$('#canvasHorizontal').css('left', xcss)
			$('#canvasHorizontal').css('top', ycss)
			clearRect()
			rectVert()
			rectHor()

}


