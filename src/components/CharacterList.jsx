import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import "../scss/CharacterList.scss";

function CharacterList({ characters, filteredCharacter }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li key={character.id}>
        <Link className="link" to={`/characters/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });
  return (
    <>
      {characters && characters.length > 0 ? (
        <ul className="list">{renderCharacters}</ul>
      ) : (
        <div className="warning">
          <p>
            🪄 No hay ningún personaje que coincida con la palabra "
            {filteredCharacter}". 😿
          </p>
        </div>
      )}
    </>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired,
    })
  ),
  filteredCharacter: PropTypes.string.isRequired,
};

export default CharacterList;
