// First API Call

async function testCall() {
    await fetch("https://pokeapi.co/api/v2/pokemon")
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
let getPokemonImage 

async function getPokemon() {
    const searchValue = document.getElementById("datatable-search-input").value;
    console.log(searchValue)
    await fetch("https://pokeapi.co/api/v2/pokemon/" + searchValue.toString() + "/" )
    .then(response => response.json())
    .then(pokemon => {
            console.log(pokemon);
            
            const pokemonId = pokemon.id;
            console.log(pokemonId);

            const pokeNum = document.querySelector(".num-container");
            const pokemonNum = document.createElement("h2");
            pokeNum.appendChild(pokemonNum);
            pokemonNum.textContent = "#" + pokemonId;
            //unable to capture data for image
            // pokemonImage = pokemon.sprites.back_default
            // console.log(pokemonImage);
            

            //Dynamically appending pokemon name to html 
            const pokeName = pokemon.name;
            console.log(pokeName);


            const nameContainer = document.querySelector(".name-container");
            const pokemonName = document.createElement("h1");
            nameContainer.appendChild(pokemonName);
            pokemonName.textContent = pokeName;
            
            

            // nameContainer.textContent= "";
            // pokemonName.textContent = pokeName;
            


            
            
            
            


            //Dynamically appending pokemon abilities to html
            const pokemonInfo = document.createElement("div")
            pokemonInfo.setAttribute("class", "pokemoninfo")
            console.log(pokemonInfo)

            //abilities
            const abilityContainer = document.querySelector(".ability-container")
            abilityContainer.textContent = "";
            abilityContainer.appendChild(pokemonInfo)

                for (let i = 0; i < pokemon.abilities.length; i++) {
                    console.log(pokemon.abilities[i].ability.name);
                    const ability = document.createElement("p")
                    ability.textContent = pokemon.abilities[i].ability.name
                    pokemonInfo.appendChild(ability)}
    })
}


//     const pokemonContainer = document.querySelector(".ability-container");
//     const formEl = document.querySelector("form");
//     const inputEl = document.querySelector("input[type=text]");
    

// pokemonSearch.addEventListener("click", getPokemon);