import PropTypes from "prop-types";

import "../scss/FilterByHouse.scss";

function FilterByHouse({ selectedHouse, handleFilter }) {
  const handleInputHouse = (event) => {
    handleFilter("house", event.currentTarget.value);
  };

  return (
    <>
      <h2>Selecciona la casa:</h2>
      <label htmlFor="house"></label>
      <select
        name="house"
        id="house"
        onInput={handleInputHouse}
        className="filterSelect"
        value={selectedHouse}
      >
        <option value={"All"}>❤️💙 Todas 💚💛</option>
        <option value={"Gryffindor"}>🦁 Gryffindor ❤️</option>
        <option value={"Ravenclaw"}>🦅 Ravenclaw 💙</option>
        <option value={"Slytherin"}>🐍 Slytherin 💚</option>
        <option value={"Hufflepuff"}>🦡 Hufflepuff 💛</option>
      </select>
    </>
  );
}

FilterByHouse.propTypes = {
  selectedHouse: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterByHouse;
