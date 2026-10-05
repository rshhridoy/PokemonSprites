const input = document.getElementById("pokemonName").value;

const fetchdata = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    const data = await response.json();
    console.log(data);
}