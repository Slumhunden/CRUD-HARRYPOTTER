"use strict";
window.addEventListener("load", initApp);

function initApp() {
  // Pokémon
  const gyarados = {
    name: "Gyarados",
    description:
      "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
    ability: "Intidmidate",
    image: "https://img.pokemondb.net/artwork/large/gyarados.jpg",
    footprint: null,
    dexindex: 130,
    type: "water",
    subtype: "flying",
    weaknesses: "electric, rock moves",
    gender: "male eller female",
    weight: 235000,
    height: 650,
    generation: 1,
    gameversion: 1,
    canEvolve: true,
    statsHP: 95,
    statsAttack: 125,
    statsDefence: 79,
    statsSpecialAttack: 60,
    statsSpecialDefence: 100,
    statsSpeed: 81,
  };
  showPokemon(gyarados);
}

function showPokemon(pokemon) {
  const myHTML = /*HTML*/ `
            <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                <p>${pokemon.type}</p>
                <p>${pokemon.dexindex}</p>
                <p>${pokemon.subtype}</p>
                </article>
                `;
                document.querySelector("#pokemon").insertAdjacentHTML("beforeend", myHTML);
                document
                  .querySelector("#pokemon article:last-child")
                  .addEventListener("click", pokemonClicked);
                  
    function pokemonClicked(pokemon) {
      document.querySelector("#dialog-name").textContent = pokemon.name;
      document.querySelector("#description").textContent = pokemon.description;
      document.querySelector("#ability").textContent = pokemon.ability;
      document.querySelector("#footprint").textContent = pokemon.footprint;
      document.querySelector("#dexindex").textContent = pokemon.dexindex;
      document.querySelector("#type").textContent = pokemon.type;
      document.querySelector("#subtype").textContent = pokemon.subtype;
      document.querySelector("#weaknesses").textContent = pokemon.weaknesses;
      document.querySelector("#gender").textContent = pokemon.gender;
      document.querySelector("#weight").textContent = pokemon.weight;
      document.querySelector("#height").textContent = pokemon.height;
      document.querySelector("#generation").textContent = pokemon.generation;
      document.querySelector("#gameversion").textContent = pokemon.gameversion;
      document.querySelector("#canEvolve").textContent = pokemon.canEvolve;
      document.querySelector("#statsHP").textContent = pokemon.statsHP;
      document.querySelector("#statsAttack").textContent = pokemon.statsAttack;
      document.querySelector("#statsDefence").textContent = pokemon.statsDefence;
      document.querySelector("#statsSpecialAttack").textContent =
        pokemon.statsSpecialAttack;
      document.querySelector("#statsSpecialDefence").textContent =
        pokemon.statsSpecialDefence;
      document.querySelector("#statsSpeed").textContent = pokemon.statsSpeed;
      document.querySelector("#pokemonbox").showModal()
  }
}
