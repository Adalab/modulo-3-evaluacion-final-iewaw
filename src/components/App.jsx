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
  //state variables
  const [characters, setCharacters] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("Gryffindor");
  const [selectedGender, setSelectedGender] = useState("Female");

  //fetching characters
  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  //filtering characters
  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filteredCharacter.toLowerCase())
    )
    .filter((character) =>
      selectedHouse === "All"
        ? true
        : character.house.toLowerCase() === selectedHouse.toLowerCase()
    )
    .filter((character) =>
      selectedGender === "All"
        ? true
        : character.gender.toLowerCase() === selectedGender.toLowerCase()
    );

  const handleSearch = (filterType, value) => {
    switch (filterType) {
      case "character":
        setFilteredCharacter(value);
        break;
      case "house":
        setSelectedHouse(value);
        break;
      case "gender":
        setSelectedGender(value);
        break;
    }
  };

  return (
    <div className="main">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilter={handleSearch}
                filteredCharacter={filteredCharacter}
                selectedHouse={selectedHouse}
                selectedGender={selectedGender}
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
