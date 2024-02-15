export function fetchCharacters() {
    return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
        .then(response => response.json())
        .then(reponseData => {
            return reponseData.map((character) => {
                return {
                    id: character.id,
                    name: character.name,
                    species: character.species,
                    image: character.image
                }
            })
        })
}