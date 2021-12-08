// First API Call

async function testCall() {
    await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(response => response.json())
        .then(pokemon => console.log(pokemon))

}

testCall();

// Second API Call
// API Key: 4c3f5891-21b8-4f5e-892e-a14841e797e7

// async function testCall2() {
//     await fetch("https://api.pokemontcg.io/v2/cards")
//         .then(response => response.json())
//         .then(types => console.log(types))

// }

// testCall2();

const pokemonSearch = document.querySelector("#searchBtn")
const dataTable = document.getElementById("datatable")

async function getPokemon() {
    const searchValue = document.getElementById("datatable-search-input").value;
    console.log(searchValue)
    await fetch("https://pokeapi.co/api/v2/pokemon/" + searchValue.toString() + "/" )
    .then(response => response.json())
    .then(pokemon => {
            console.log(pokemon.abilities);

            
            // for (let j = 0; j < data.results.length; j++) {
                //     console.log(data.results[j].name)
                const abilityContainer = document.querySelector(".ability-container")
                const pokemonInfo = document.createElement("div")
                abilityContainer.textContent = ""
                pokemonInfo.setAttribute("class", "pokemoninfo")
                // pokemonInfo.textContent = 
                console.log(pokemonInfo)
                abilityContainer.appendChild(pokemonInfo)

                for (let i = 0; i < pokemon.abilities.length; i++) {
                    console.log(pokemon.abilities[i].ability.name);
                    const ability = document.createElement("p")
                    ability.textContent = pokemon.abilities[i].ability.name
                    pokemonInfo.appendChild(ability)
                }
                
                

                // if (pokemon.results[j].name = searchValue ) {

                // }
            // }
            // }
        })
}



pokemonSearch.addEventListener("click", getPokemon);