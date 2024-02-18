import PropTypes from "prop-types";
import "../scss/FilterByGender.scss";

function FilterByGender({ selectedGender, handleFilter }) {
  const handleInputGender = (event) => {
    handleFilter("gender", event.currentTarget.value);
  };

  return (
    <div className="filterGender">
      <h2>Selecciona el género:</h2>
      <div className="filterRadio">
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={selectedGender === "Female"}
          onChange={handleInputGender}
        />
        <label htmlFor="female">Mujer ♀️</label>

        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={selectedGender === "Male"}
          onChange={handleInputGender}
        />
        <label htmlFor="male">Hombre ♂️</label>

        <input
          type="radio"
          id="all"
          name="gender"
          value="All"
          checked={selectedGender === "All"}
          onChange={handleInputGender}
        />
        <label htmlFor="all">Tod@s ✨</label>
      </div>
    </div>
  );
}

FilterByGender.propTypes = {
  selectedGender: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterByGender;
