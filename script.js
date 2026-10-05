
const fetchdata = async () => {
    try{
        const input = document.getElementById("pokemonName").value.toLowerCase();
        const notFound = document.getElementById("notFound");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        
        if(!response.ok){
            notFound.style.visibility = "visible";
            notFound.innerText = `There is no Pokémon named "${input}"`;
            throw new Error("No Pokemon in this name")
        }else{
            const data = await response.json();
            
            const pokemonSprite = data.sprites.front_default;
            const pokemoniImg = document.getElementById("pokemonSprite");
            pokemoniImg.src = pokemonSprite;
            pokemoniImg.style.visibility = "visible";
        }
    }
    catch(error){
        console.error(error);
        
    }

}