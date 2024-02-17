import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

import "../scss/CharacterDetail.scss";
import CharacterCard from "./CharacterCard";

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = characters.find((char) => char.id === id);

  if (!character) {
    return (
      <div className="warning">
        <p>🪄 No hay ningún personaje con el id "{id}". 😿</p>
      </div>
    );
  }

  const handleReturn = () => {
    navigate("/hp-home");
  };

  return (
    <div>
      <CharacterCard character={character} />
      <button onClick={handleReturn}>⬅️ VOLVER</button>
    </div>
  );
}

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired,
    })
  ),
};

export default CharacterDetail;
