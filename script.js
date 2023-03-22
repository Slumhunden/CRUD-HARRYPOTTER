"use strict"
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
    dexindex: "130",
    type: "water",
    subtype: "flying",
    weaknesses: "electric, rock moves",
    gender: "male eller female",
    weight: "235 kg",
    height:"650 cm",
    generation:"1",
    spilversion:"",
    canEvolve: 
  };
  function fetchJSON(){}
  
  function showPokemon(){}
  showPokemons(
    potterImage,
    potterName,
    potterGender,
    potterHouse,
    potterDateOfBirth,
    potterAncestry,
    potterEyeColour,
    potterHairColour,
    potterActor
  );
}
function showPokemons(image, name, house, dateOfBirth, actor) {
  console.log(image, name, house, dateOfBirth, actor);
  const myHTML = /*HTML*/ `
<article><img src=${image}>
                <h2>${name}</h2>
                <p>${house}</p>
                <p>${dateOfBirth}</p>
                <p>${actor}</p>
            </article>
            `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHTML);
}