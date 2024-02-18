import "../scss/Footer.scss";
import cat from "../assets/cat.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__cat" src={cat} alt="imagen de un gato mago" />
      <h2> © 2024 Izabela Ewa Wawrzyniak </h2>
    </footer>
  );
}

export default Footer;
