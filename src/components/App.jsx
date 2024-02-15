import { useState, useEffect } from "react";

import "../scss/App.scss";

import { fetchCharacters } from "../services/fetch";

function App() {
  const [characters, setCharacters] = useState({
    id: "",
    name: "",
    species: "",
    image: "",
  });

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
      console.log(data);
    });
  }, []);

  return <div>Harry Potter</div>;
}

export default App;
