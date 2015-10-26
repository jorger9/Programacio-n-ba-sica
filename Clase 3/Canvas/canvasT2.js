//var dibujo, canvas;

function inicio(){
	canvas = document.getElementById("dibujo");
	dibujarGrilla(canvas);
}

function dibujarGrilla(canvas)
{
	context = canvas.getContext("2d");
	var limiteX = canvas.width, limiteY = canvas.height;

for (i=0 ; i<=limiteX ; i+=(limiteX/30))
{
	context.beginPath();
	context.moveTo(i,0);
	context.lineTo(limiteX,i);
	context.strokeStyle="#AAA";
	context.closePath();
	context.stroke();
	
}

for (i=0; i<=limiteY ; i+=(limiteY/30))
{
	context.beginPath();
	context.moveTo(i,limiteY);
	context.lineTo(0,i);
	context.strokeStyle="#AAA";
	context.closePath();
	context.stroke();
	
}


for (i=0, x=300; i<=limiteX ; i+=(limiteX/30), x-=(limiteX/30))
{
	context.beginPath();
	context.moveTo(x,0);
	context.lineTo(0,i);
	context.strokeStyle="#AAA";
	context.closePath();
	context.stroke();
	
}

for (i=0, x=300; i<=limiteX ; i+=(limiteX/30), x-=(limiteX/30))
{
	context.beginPath();
	context.moveTo(limiteX,x);
	context.lineTo(i,limiteY);
	context.strokeStyle="#AAA";
	context.closePath();
	context.stroke();
	
}
}