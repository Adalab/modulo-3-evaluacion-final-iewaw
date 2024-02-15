import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../scss/App.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

import { fetchCharacters } from "../services/fetch";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="main">
      <div>Harry Potter</div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Filters />
              <CharacterList characters={characters} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
