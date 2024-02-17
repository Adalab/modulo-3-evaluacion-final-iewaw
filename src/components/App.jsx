//React imports
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

//component imports
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

//other project imports
import "../scss/App.scss";
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
      <Header />
      <Routes>
        <Route
          path="/hp-home"
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
        <Route
          path="/characters/:id"
          element={<CharacterDetail characters={characters} />}
        />
      </Routes>
    </div>
  );
}

export default App;
