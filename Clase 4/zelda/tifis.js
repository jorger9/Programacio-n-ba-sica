
var tablero,
	fondo = {
		imageURL: "fondo.png",
		fondoImageOK : false
	},
	tifis = {
		frenteOK: false,
	    atrasOK: false,
	    derOK: false,
	    izqOK: false,
	    velocidad: 20,
	    x: 0,
	    y: 0
	};
function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.image = new Image();
	fondo.image.src = fondo.imageURL;
	fondo.image.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = "diana-frente.png";
	tifis.frente.onload = confirmarFrente;
	
}

function confirmarFondo()
{
	fondo.fondoImageOK = true;
	dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function dibujar()
{
	if( fondo.fondoImageOK)
	{
		tablero.drawImage(fondo.image,0,0);
	}

	if( tifis.frenteOK)
	{
		tablero.drawImage(tifis.frente,tifis.x,tifis.y);
	}
}