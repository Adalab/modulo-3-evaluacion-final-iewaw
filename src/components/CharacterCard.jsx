import PropTypes from "prop-types";

import "../scss/CharacterCard.scss";
import { speciesMapper } from "../services/mapper";

function CharacterCard({ character }) {
  return (
    <div className="card">
      <img
        className="card__image"
        src={
          character.image
            ? character.image
            : "https://via.placeholder.com/200x240/feb8c1/F96B3C/?text=HarryPotter"
        }
        alt={character.name}
      />
      <div>
        <h2>{character.name}</h2>
        <p>{speciesMapper(character.species)}</p>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
