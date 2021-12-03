import React from "react";

function PokemonSelect() {
  const handleSelect = (e) => {
    console.log(e.target.value);
  };
  return (
    <select onChange={(e) => handleSelect(e)}>
      <option value="#" selected disabled>
        --- Select a pokemon ---
      </option>
      <option value="bulbasaur">Bulbasaur</option>
      <option value="charmander">Charmander</option>
      <option value="squirtle">Squirtle</option>
    </select>
  );
}

export default PokemonSelect;
