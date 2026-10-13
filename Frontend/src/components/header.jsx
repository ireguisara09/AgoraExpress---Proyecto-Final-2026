import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo">
        <span className="logo-texto">
          <span className="logo-agora">Agora</span>
          <span className="logo-express">Express</span>
        </span>

        <img
          src={logo}
          alt="Icono de AgoraExpress"
          className="logo-icono"
        />
      </Link>

      <p className="navbar__registro">
        ¿No tienes cuenta?
        <Link to="/registro">¡Regístrate aquí!</Link>
      </p>
    </header>
  );
}
