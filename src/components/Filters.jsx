import PropTypes from "prop-types";

import "../scss/Filters.scss";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";

function Filters({
  handleFilter,
  filteredCharacter,
  selectedHouse,
  selectedGender,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FilterByName
        filteredCharacter={filteredCharacter}
        handleFilter={handleFilter}
      />
      <FilterByHouse
        selectedHouse={selectedHouse}
        handleFilter={handleFilter}
      />
      <FilterByGender
        selectedGender={selectedGender}
        handleFilter={handleFilter}
      />
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filteredCharacter: PropTypes.string.isRequired,
  selectedHouse: PropTypes.string.isRequired,
};

export default Filters;
