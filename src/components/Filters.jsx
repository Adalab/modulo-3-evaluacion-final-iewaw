import PropTypes from "prop-types";

import "../scss/Filters.scss";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";
import ResetButton from "./ResetButton";

function Filters({
  handleFilter,
  filteredCharacter,
  selectedHouse,
  selectedGender,
  handleReset,
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
      <div className="form__reset">
        <ResetButton handleReset={handleReset} />
      </div>
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filteredCharacter: PropTypes.string.isRequired,
  selectedHouse: PropTypes.string.isRequired,
  selectedGender: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Filters;
