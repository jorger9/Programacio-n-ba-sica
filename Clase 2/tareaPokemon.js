function Pokemon(n,v,a,g)
{
    this.grito = g;
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
                            nombre : "Bulbasaur",
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
        //console.log(pokemons[selectPokemon.value]);
        var p=pokemons[selectPokemon.value];
        var poke = new Pokemon(p.nombre, p.vida, p.ataque,p.grito);
        var datos ="vida: " + poke.vida+"\n"+"\nataque: "+poke.ataque;
        poke.vida = poke.vida - 13;
        nombrePokemon.textContent = poke.nombre;
        datosPokemon.textContent=datos;
        imgPokemon.src=poke.imagen; 
    }
}

