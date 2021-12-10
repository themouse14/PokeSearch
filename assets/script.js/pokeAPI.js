// First API Call

async function testCall() {
    await fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(pokemon => console.log(pokemon))

}

testCall();

        

const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokemon) => `
        <li class="card">
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
        
        
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

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
                
                

                
        })
    }

    const pokemonContainer = document.querySelector(".ability-container");
    const formEl = document.querySelector("form");
    const inputEl = document.querySelector("input[type=text]");
    

pokemonSearch.addEventListener("click", getPokemon);