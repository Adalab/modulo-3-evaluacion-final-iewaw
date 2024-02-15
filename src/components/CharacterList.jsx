import PropTypes from "prop-types";

import "../scss/CharacterList.scss";

function CharacterList({ characters }) {
  console.log(characters);
  const renderCharacters = characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <div>
          <img
            className="card__image"
            src={character.image}
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

CharacterList.propTypes = {};

export default CharacterList;
