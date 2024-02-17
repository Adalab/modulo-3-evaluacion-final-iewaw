export function fetchCharacters() {
    return fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(reponseData => {
            return reponseData.map((character) => {
                return {
                    id: character.id,
                    name: character.name,
                    species: character.species,
                    image: character.image,
                    house: character.house,
                    gender: character.gender,
                    alive: character.alive,
                    alternate_names: character.alternate_names
                }
            })
        })
}