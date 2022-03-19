var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth*0.25;
canvas.height = canvas.width*2;
const FPS = 1;
const SIZE = canvas.width/matrix[0].length;
const BG_COLOR = "black";

function draw () {
	context.fillStyle = BG_COLOR;
	context.fillRect(0,0,canvas.width,canvas.height);
	drawGrid(matrix);
	drawMatrix(matrix);
}
function drawMatrix (matrix) {
	for (var i = 3; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j]==1) {
				context.fillStyle = "white";
				context.fillRect(j*SIZE, (i-3)*SIZE, SIZE,SIZE);

			}
		}
	}
} 
function drawGrid (matrix) {
	
	for (var i = 3; i < matrix.length; i++) {
		context.strokeStyle  = "red";
		context.beginPath();
		context.moveTo(0, (i-2)*SIZE);
		context.lineTo(canvas.width,(i-2)*SIZE);
		context.stroke();	
	}
	for (var i = 0; i < matrix[0].length; i++) {
		context.strokeStyle  = "red";
		context.beginPath();
		context.moveTo((i)*SIZE,0);
		context.lineTo((i)*SIZE, canvas.height);
		context.stroke();	
	}
}

setInterval(draw, 1000/FPS);
