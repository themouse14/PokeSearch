// First API Call

async function testCall() {
    await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(response => response.json())
        .then(pokemon => console.log(pokemon))

}

testCall();

const pokemonSearch = document.querySelector("#searchBtn")
const dataTable = document.getElementById("datatable")

async function getPokemon() {
    const searchValue = document.getElementById("datatable-search-input").value;
    console.log(searchValue)
    await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon)
            // for (let i = 0; i < 2; i++) {
                // console.log(pokemon.results[i]);
                for (let j = 0; j < pokemon.results.length; j++) {
                    console.log(pokemon.results[j].name)

                    const pokemonInfo = document.createElement("div")
                    pokemonInfo.setAttribute("class", "pokemoninfo")
                    pokemonInfo.textContent = pokemon.results[j].name
                    dataTable.appendChild(pokemonInfo)

                    
                    // if (pokemon.results[j].name = searchValue ) {
                    
                    // }
                }
            // }
        })
}
getPokemon()