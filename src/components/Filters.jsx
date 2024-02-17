import PropTypes from "prop-types";

import "../scss/Filters.scss";

function Filters({ handleFilter, filteredCharacter, selectedHouse }) {
  const handleInputCharacter = (event) => {
    event.preventDefault();
    handleFilter("character", event.currentTarget.value);
  };

  const handleInputHouse = (event) => {
    event.preventDefault();
    handleFilter("house", event.currentTarget.value);
  };
  return (
    <form className="form">
      <h2>Buscar por personaje:</h2>
      <label htmlFor="character"></label>
      <input
        type="text"
        name="character"
        id="character"
        placeholder="Hermione"
        onInput={handleInputCharacter}
        className="form__filter"
        value={filteredCharacter}
      />
      <h2>Selecciona la casa:</h2>
      <label htmlFor="house"></label>
      <select
        name="house"
        id="house"
        onInput={handleInputHouse}
        className="form__filter"
        value={selectedHouse}
      >
        <option value={"Todas"}>Todas</option>
        <option value={"Gryffindor"}>Gryffindor</option>
        <option value={"Ravenclaw"}>Ravenclaw</option>
        <option value={"Slytherin"}>Slytherin</option>
        <option value={"Hufflepuff"}>Hufflepuff</option>
      </select>
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filteredCharacter: PropTypes.string.isRequired,
  selectedHouse: PropTypes.string.isRequired,
};

export default Filters;
