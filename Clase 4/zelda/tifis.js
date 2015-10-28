
var tablero,
	fondo = {
		imageURL: "fondo.png",
		fondoImageOK : false
	},
	tifis = {

		imagenes :[
						{
							descrip : "frente",
							estatus: false,
							url : "diana-frente.png"	
						},
						{
							descrip: "atras",
							estatus: false,
							url : 	"diana-atras.png"
						},
						{
							descrip: "izq",
							estatus: false,
							url : "diana-izq.png"	
						},
						{
							descrip: "der",
							estatus: false,
							url : "diana-der.png"	

						}
					],

		direccion : 0,
	    velocidad: 50,
	    x: 0,
	  	y: 0
	},

	liz = {
		lizOk : false,
		x : 100,
		y : 0 
	},

	teclas = {
		UP: 38,
	    DOWN: 40,
	    LEFT: 37,
	    RIGHT: 39
	}


function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.image = new Image();
	fondo.image.src = fondo.imageURL;
	fondo.image.onload = confirmarFondo;

	for (i=0; i<tifis.imagenes.length; i++)
	{
		tifis.imagenes[i].imagen = new Image();
		tifis.imagenes[i].imagen.src = tifis.imagenes[i].url;
		tifis.imagenes[i].imagen.onload = confirmarTifisHandler(i);
	}

	liz.liz = new Image();
	liz.liz.src = "liz.png";
	liz.liz.onload = confirmarLiz;

	document.addEventListener("keydown",teclado);
}


function teclado(evento)
{

	if(evento.keyCode == teclas.UP)
	{
		if(validarMovimiento(tifis.x,tifis.y-tifis.velocidad))
		{
			tifis.y -=tifis.velocidad;
		}
		tifis.direccion=1;
	}
	if(evento.keyCode == teclas.DOWN)
	{
		if(validarMovimiento(tifis.x,tifis.y+tifis.velocidad))
		{
			tifis.y +=tifis.velocidad;
		}
		tifis.direccion=0;
	}
	if(evento.keyCode == teclas.LEFT){

		if(validarMovimiento(tifis.x -tifis.velocidad,tifis.y))
		{
			tifis.x -=tifis.velocidad;
		}
		tifis.direccion = 2;

	}
	if(evento.keyCode == teclas.RIGHT)
	{
		if(validarMovimiento(tifis.x +tifis.velocidad,tifis.y))
		{
			tifis.x +=tifis.velocidad;
		}
		tifis.direccion = 3;
	}

	dibujar();
}


function confirmarTifisHandler(index){
	return function confirmarTifis(evento){
		tifis.imagenes[index].estatus=true;
	}
}
function confirmarFondo()
{
	fondo.fondoImageOK = true;
	dibujar();
}

function confirmarLiz()
{
	liz.lizOk = true;
	dibujar();
}


function dibujar()
{
	if( fondo.fondoImageOK)
	{
		tablero.drawImage(fondo.image,0,0);
	}
	if( tifis.imagenes[tifis.direccion].estatus)
	{
		tablero.drawImage(tifis.imagenes[tifis.direccion].imagen,tifis.x,tifis.y);
	}

	if (liz.lizOk)
	{
		tablero.drawImage(liz.liz,liz.x,liz.y);
	}
}

	function validarMovimiento(nextX, nextY)
	{
		return (nextX >=0 && nextX<=450)&& (nextY >=0 && nextY<=450);
	}