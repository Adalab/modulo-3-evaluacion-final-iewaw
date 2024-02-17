import PropTypes from "prop-types";
import "../scss/Warning.scss";

function Warning({ text, searchedValue }) {
  return (
    <div className="warning">
      <p>
        🪄 {text} "{searchedValue}". 😿
      </p>
    </div>
  );
}

Warning.propTypes = {
  text: PropTypes.string.isRequired,
  searchedValue: PropTypes.string.isRequired,
};

export default Warning;
