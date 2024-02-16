import PropTypes from "prop-types";

import "../scss/CharacterList.scss";

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <div>
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
            <p>{character.species}</p>
          </div>
        </div>
      </li>
    );
  });
  return (
    <>
      <ul className="list">{renderCharacters}</ul>
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
};

export default CharacterList;
