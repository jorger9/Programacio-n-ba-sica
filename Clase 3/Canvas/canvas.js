//var dibujo, canvas;

function inicio(){
	canvas = document.getElementById("dibujo");
	
	context = dibujo.getContext("2d");
	//canvas.moveTo(0,0);
	//canvas.lineTo(0,300);
	//canvas.lineTo(300,300);
	//canvas.lineTo(300,0);
	//canvas.lineTo(0,0);
	//canvas.strokeStyle="#F00";
	//canvas.stroke();
	context.beginPath();
	context.strokeStyle = "#00F";
	context.arc(150,150,100,0,2*Math.PI,false);
	context.closePath();
	context.stroke();
	dibujarGrilla(canvas);
}

function dibujarGrilla(canvas)
{
	context = canvas.getContext("2d");
	var limiteX = canvas.width, limiteY = canvas.height;

 for (i=0; i<=limiteX ; i+=(limiteX/10))
 {
 	context.beginPath();
 	context.moveTo(i,0);
 	context.lineTo(i,limiteX);
 	context.strokeStyle="#AAA";
 	context.closePath();
 	context.stroke();
 	
 }

 for (i=0; i<=limiteY ; i+=(limiteY/10))
 {
 	context.beginPath();
 	context.moveTo(0,i);
 	context.lineTo(limiteY,i);
 	context.strokeStyle="#AAA";
 	context.closePath();
 	context.stroke();
 	
 }
	

}