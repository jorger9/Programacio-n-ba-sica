//var dibujo, canvas;

function inicio(){
	canvas = document.getElementById("dibujo");
	
	context = dibujo.getContext("2d");
	context.beginPath();
	context.strokeStyle = "#00F";
	context.arc(150,150,100,0,2*Math.PI,false);
	context.fillStyle="#EEE";
	context.closePath();
	context.fill();
	context.stroke();

	dibujarGrilla(canvas);
}

function dibujarGrilla(canvas)
{
	context = canvas.getContext("2d");
	var limiteX = canvas.width, limiteY = canvas.height;

for (i=0, x = limiteX; i<=limiteX ; i+=(limiteX/10),x-=(limiteX/10))
{
	context.beginPath();
	context.moveTo(i,0);
	context.lineTo(limiteX,x);
	context.strokeStyle="#AAA";
	context.closePath();
	context.stroke();
	
}

for (i=0; i<=limiteY ; i+=(limiteY/10))
{
	context.beginPath();
	context.moveTo(limiteY,i);
	context.lineTo(i,limiteY);
	context.strokeStyle="#AAA";
	context.closePath();
	context.stroke();
	
}
//
for (i=0, x=limiteX; i<=limiteX ; i+=(limiteX/10),x-=(limiteX/10))
{
	context.beginPath();
	context.moveTo(0,i);
	context.lineTo(x,limiteX);
	context.strokeStyle="#AAA";
	context.closePath();
	context.stroke();
	
}

for (i=0, x=limiteY; i<=limiteY ; i+=(limiteY/10),x-=(limiteY/10))
{
	context.beginPath();
	context.moveTo(x,0);
	context.lineTo(0,x);
	context.strokeStyle="#AAA";
	context.closePath();
	context.stroke();
	
}
}