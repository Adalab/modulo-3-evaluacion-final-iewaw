import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import Warning from "./Warning";
import "../scss/CharacterList.scss";

function CharacterList({ characters, filteredCharacter }) {
  // Sort characters alphabetically by name
  const sortedCharacters = characters
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  // Create character cards
  const renderCharacters = sortedCharacters.map((character) => {
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
        <>
          <Warning
            text={"No hay ningún personaje que coincida con la palabra "}
            searchedValue={filteredCharacter}
          />
        </>
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
