function numeroAleatorio(min,max)
{
	 return Math.floor(Math.random() * (max - min) + min);
}
alert("Juguemos Piedras, Papel, Tijeras, Lagartos y Spok .\n by Sheldon");

var reglas = "Reglas:\nLas tijeras cortan el papel,\nel papel cubre a la piedra,\nla piedra aplasta al lagarto,\nel lagarto envenena a Spock,\n"+
			 "Spock destroza las tijeras,\nlas tijeras decapitan al lagarto,\nel lagarto se come el papel,\n"+
			 "el papel refuta a Spock,\nSpock vaporiza la piedra,\ny, como es habitual… la piedra aplasta las tijeras.";
alert(reglas);

var opciones = ["Piedra", "Papel", "Tijeras", "Lagarto","Spok"],
	resultadosPosibles =["Perdiste!","Empataste","Ganaste!"],
	resultados= [[1,0,2,0,2],//Piedra
			  	 [2,1,0,2,0],//Papel
			  	 [0,2,1,2,0],//Tijeras
			  	 [0,2,0,1,2],//Lagarto
			  	 [2,0,2,0,1] //Spok
							]; 
var jugar =  prompt("Quieres Jugar? \n0: No\n1: Si",1);

while (jugar ==1)
{
	var opcionUsuario, opcionMaquina;

	opcionMaquina = numeroAleatorio(0,3);

	opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpok: 4", 0);
	while((opcionUsuario < 0 || opcionUsuario > 4 )||(opcionUsuario==undefined))//Tambien se puede con or
	{
	    alert("La opción seleccionada no es válida, elija una opción entre 0 y 4");
	    opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpok: 4", 0);
	}

	alert("Elegiste " + opciones[opcionUsuario]);
	alert("Javascript eligió " + opciones[opcionMaquina]);

	alert(resultadosPosibles[resultados[opcionUsuario][opcionMaquina]]);

	jugar =  prompt("Quieres seguir jugando? \n0: No\n1: Si",1)
}

	alert("Bye");


