export function speciesMapper(species) {
    switch (species.toLowerCase()) {
        case "human":
            return "Humano";
        case "half-giant":
            return "Medio-gigante";
        case "werewolf":
            return "Hombre lobo";
        case "cat":
            return "Gato";
        case "goblin":
            return "Duende";
        case "owl":
            return "Búho";
        case "ghost":
            return "Fantasma";
        case "poltergeist":
            return "Poltergeist";
        case "three-headed dog":
            return "Perro de tres cabezas";
        case "dragon":
            return "Dragón";
        case "centaur":
            return "Centauro";
        case "house-elf":
            return "Elfo doméstico";
        case "acromantula":
            return "Acrmántula";
        case "hippogriff":
            return "Hipogrifo";
        case "giant":
            return "Gigante";
        case "vampire":
            return "Vampiro";
        case "half-human":
            return "Medio-humano";
        default:
            return "¡Es un misterio!";
    }
}
