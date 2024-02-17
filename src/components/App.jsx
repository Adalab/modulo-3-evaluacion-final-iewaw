import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../scss/App.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import cat from "../assets/cat.png";

import { fetchCharacters } from "../services/fetch";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("Gryffindor");

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filteredCharacter.toLowerCase())
    )
    .filter((character) =>
      selectedHouse === "Todas" ? true : character.house === selectedHouse
    );

  const handleSearch = (filterType, value) => {
    switch (filterType) {
      case "character":
        setFilteredCharacter(value);
        break;
      case "house":
        setSelectedHouse(value);
        break;
    }
  };

  return (
    <div className="main">
      <header className="header">
        <img className="cat" src={cat} alt="imagen de un gato mago" />
        <h1>Harry Potter</h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilter={handleSearch}
                filteredCharacter={filteredCharacter}
                selectedHouse={selectedHouse}
              />
              <CharacterList
                characters={filteredCharacters}
                filteredCharacter={filteredCharacter}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
