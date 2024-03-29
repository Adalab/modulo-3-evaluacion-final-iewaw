import PropTypes from "prop-types";

import "../scss/CharacterCard.scss";
import { mapSpecies, mapHouses } from "../services/mapper";

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
      <div className="card__info">
        <h2>{character.name}</h2>
        <p>{mapSpecies(character.species)}</p>
        <p>{mapHouses(character.house)}</p>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
