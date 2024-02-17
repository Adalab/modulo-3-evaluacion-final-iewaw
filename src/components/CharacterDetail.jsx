import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

import "../scss/CharacterDetail.scss";
import { speciesMapper } from "../services/mapper";
import Warning from "./Warning";

function CharacterDetail({ characters }) {
  //setting up the return button
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };

  //identifying the id url param
  const { id } = useParams();
  const character = characters.find((character) => character.id === id);

  if (!character) {
    return (
      <Warning text={"No hay ningún personaje con el id "} searchedValue={id} />
    );
  }

  //defining message for the character's status
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
          {/* checking alternate names */}
          {character.alternate_names &&
            character.alternate_names.length > 0 && (
              <p>Otros nombres: {character.alternate_names.join(", ")}</p>
            )}
        </div>
      </div>
      <button className="detail__button" onClick={handleReturn}>
        ⬅ VOLVER
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
