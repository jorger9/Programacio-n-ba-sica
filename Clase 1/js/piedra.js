//Genera un número aleatorio entre un rango de enteros
function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"],
	resultados = [["Empate","Perdiste","Ganaste"],["Ganaste","Empate","Perdiste"],["Perdiste","Ganaste","Empate"]]


var opcionUsuario;
var opcionMaquina = patito(0,2);


opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
while(!(opcionUsuario >= 0 && opcionUsuario <= 2 ))
{
	alert("La opción seleccionada no es válida, elija una opción entre 0 y 2");
	opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
}

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

alert(resultados[opcionUsuario][opcionMaquina]);
