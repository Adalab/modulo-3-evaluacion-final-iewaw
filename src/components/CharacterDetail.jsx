import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

import "../scss/CharacterDetail.scss";
import { speciesMapper } from "../services/mapper";

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
    navigate("/");
  };

  const handleStatus = () => {
    if (character.alive === true) {
      return character.gender.toLowerCase() === "male" ? "Vivo" : "Viva";
    } else {
      return character.gender.toLowerCase() === "male" ? "Muerto" : "Muerta";
    }
  };

  return (
    <div className="detail">
      <div className="detail__card">
        <img
          className="detail__card__image"
          src={
            character.image
              ? character.image
              : "https://via.placeholder.com/200x240/feb8c1/F96B3C/?text=HarryPotter"
          }
          alt={character.name}
        />
        <div>
          <h2>{character.name}</h2>
          <p>Estatus: {handleStatus()}</p>
          <p>Especie: {speciesMapper(character.species)}</p>
          <p>
            Género:{" "}
            {character.gender.toLowerCase() === "male" ? "Hombre" : "Mujer"}
          </p>
          <p>Casa: {character.house ? character.house : "Sin definir"}</p>
          {character.alternate_names &&
            character.alternate_names.length > 0 && (
              <p>Otros nombres: {character.alternate_names.join(", ")}</p>
            )}
        </div>
      </div>
      <button className="detail__button" onClick={handleReturn}>
        ⬅️ VOLVER
      </button>
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
      gender: PropTypes.string.isRequired,
      alive: PropTypes.bool.isRequired,
      alternate_names: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default CharacterDetail;
