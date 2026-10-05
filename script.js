
const fetchdata = async () => {
    try{
        const input = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    
        if(!response.ok){
            throw new Error("Couldn't fetch Resource")
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