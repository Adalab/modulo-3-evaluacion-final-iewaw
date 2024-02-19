import PropTypes from "prop-types";

import "../scss/Warning.scss";

function Warning({
  text = "Ha ocurrido el siguiente error: ",
  searchedValue = "404 Not Found",
}) {
  return (
    <div className="warning">
      <p>
        🪄 {text} "{searchedValue}". 😿
      </p>
    </div>
  );
}

Warning.propTypes = {
  text: PropTypes.string,
  searchedValue: PropTypes.string,
};

export default Warning;
