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
    var pokemons =  [
                        {
                            nombre : "Pikachu",
                            grito  : "pika!",
                            ataque : 60,
                            vida   : 100        
                        },
                        {
                            nombre : "Bulbasur",
                            grito  : "Bul!",
                            ataque : 55,
                            vida   : 100     
                        },
                        {
                            nombre : "Rattata",
                            grito  : "rattata!",
                            ataque : 40,
                            vida   : 100     
                        }
                    ];
        botonBuscar.addEventListener("click",getPokemon,false);
    //var rattata = new Pokemon("Rattata", 40, 2);
    //var datos ="vida: " + rattata.vida+"\n"+"\nataque: "+rattata.ataque;
    //rattata.vida = rattata.vida - 13;
    //nombrePokemon.textContent = rattata.nombre;
    //datosPokemon.textContent=datos;
    //imgPokemon.src=rattata.imagen; 


    function getPokemon()
    {
        console.log(pokemons[selectPokemon.value]);
    }
}

