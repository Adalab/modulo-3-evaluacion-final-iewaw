import PropTypes from "prop-types";

import "../scss/FilterByName.scss";

function FilterByName({ filteredCharacter, handleFilter }) {
  const handleInputCharacter = (event) => {
    handleFilter("character", event.currentTarget.value);
  };

  return (
    <div className="filterName">
      <h2>Buscar por personaje:</h2>
      <label htmlFor="character"></label>
      <input
        type="text"
        name="character"
        id="character"
        placeholder="Hermione"
        onInput={handleInputCharacter}
        className="filterInput"
        value={filteredCharacter}
      />
    </div>
  );
}

FilterByName.propTypes = {
  filteredCharacter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterByName;
