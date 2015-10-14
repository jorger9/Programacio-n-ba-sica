
var dibujo, canvas;
function inicio(){
	dibujo = document.getElementById("dibujo");
	canvas = dibujo.getContext("2d");
	canvas.moveTo(0,0);
	canvas.lineTo(0,300);
	canvas.lineTo(300,300);
	canvas.lineTo(300,0);
	canvas.lineTo(0,0);
	canvas.strokeStyle="#F00";
	canvas.stroke();

	canvas.beginPath();
	canvas.strokeStyle = "#00F";
	canvas.arc(150,150,100,(2*Math.PI),false);
	canvas.closePath();
	canvas.stroke();
}