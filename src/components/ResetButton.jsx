import PropTypes from "prop-types";

import "../scss/ResetButton.scss";

function ResetButton({ handleReset }) {
  const resetForm = (event) => {
    handleReset();
  };

  return (
    <button className="resetButton" onClick={resetForm}>
      💫 RESET
    </button>
  );
}

ResetButton.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default ResetButton;
