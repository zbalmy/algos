const pokémon = [
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
];

/**
 * given an array of pokemon objects, return an array of all the pokemon's names
 * @param {Array<Objects>} pokemon an array of objects
 * @returns {Array<Strings>} an array of all the pokemon names
 */
function AllPokemonNames(pokemon) {
  newArr = [];
  for (i = 0; i < pokemon.length; i++) {
    newArr.push(pokemon[i]["name"]);
    //newArr.push(pokemon[i].name);
    //can access keys with dot notation
  }
  return newArr;
}
// console.log(AllPokemonNames(pokémon));

/**
 * given an array of pokemon objects and a string for type, return an array of objects with
 * only the names and ids of all the pokemon with the given type
 * @param {Array<Objects>} pokemon an array of objects
 * @param {String} type a string
 * @returns {Array<Objects>} an array of objects
 */
function AllNamesAndIdsSpecificType(pokemon, type) {
  newArr = [];
  for (i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.includes(type)) {
      newArr.push({ id: pokemon[i].id, name: pokemon[i].name });
      //pushing an object
    }
  }
  return newArr;
}

// console.log(AllNamesAndIdsSpecificType(pokémon, "poison"));
