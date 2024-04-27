const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const type = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const container = document.getElementById("container");
let img = document.createElement("img");
img.id = "sprite";
container.prepend(img);
const getData = async () => {
  try {
    let urlEnd = input.value.trim(" ").replace(" ", "-").toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${urlEnd}`;
    let response = await fetch(url);
    let responseData = await response.json();
    img.src = responseData.sprites.front_default;
    pokeName.innerHTML = `${responseData.name.toUpperCase()}`;
    id.innerHTML = `#${responseData.id}`;
    weight.innerHTML = `Weight: ${responseData.weight}`;
    height.innerHTML = `Height: ${responseData.height}`;
    type.innerHTML = "";
    responseData.types.forEach((e) => {
      type.innerHTML += `<span>${e.type.name.toUpperCase()}</span> `;
    });
    hp.innerHTML = `${responseData.stats[0].base_stat}`;
    attack.innerHTML = `${responseData.stats[1].base_stat}`;
    defense.innerHTML = `${responseData.stats[2].base_stat}`;
    specialAttack.innerHTML = `${responseData.stats[3].base_stat}`;
    specialDefense.innerHTML = `${responseData.stats[4].base_stat}`;
    speed.innerHTML = `${responseData.stats[5].base_stat}`;
    input.value = "";
  } catch {
    alert("Pokémon not found");
  }
};
searchBtn.addEventListener("click", () => {
  getData();
});
