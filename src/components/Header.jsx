import "../scss/Header.scss";
import cat from "../assets/cat.png";

function Header() {
  return (
    <header className="header">
      <img className="header__cat" src={cat} alt="imagen de un gato mago" />
      <h1>Harry Potter</h1>
    </header>
  );
}

export default Header;
