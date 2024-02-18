import PropTypes from "prop-types";

function FilterByName({ filteredCharacter, handleFilter }) {
  const handleInputCharacter = (event) => {
    handleFilter("character", event.currentTarget.value);
  };

  return (
    <>
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
    </>
  );
}

FilterByName.propTypes = {
  filteredCharacter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterByName;
