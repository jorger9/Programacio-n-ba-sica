function Pokemon(n,v,a)
{
    this.grito = "Pika!";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.imagen = n+".png";
    this.gritar = function ()
    {
        alert(this.grito);
    }
}

function inicio()
{
    var rattata = new Pokemon("Rattata", 40, 2);
    var datos ="vida: " + rattata.vida+"\n"+"\nataque: "+rattata.ataque;
    rattata.vida = rattata.vida - 13;
    nombrePokemon.textContent = rattata.nombre;
    datosPokemon.textContent=datos;
    imgPokemon.src=rattata.imagen;
}