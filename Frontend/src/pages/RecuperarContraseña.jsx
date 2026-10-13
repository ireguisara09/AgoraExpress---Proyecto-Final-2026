import { useState } from "react";
import "../styles/RecuperarContraseña.css";
import logo from "../assets/logo.png";

export default function RecuperarContrasena() {
    const [correo, setCorreo] = useState("");

const enviar = (e)  => {
    e.preventDefault();
};

return (
    <div className="ae-page">
        <header className="ae-header">
            <img src={logo} alt="AgoraExpress" className="ae-logo"/>
        </header>

        <main className="ae-card">
            <svg width="150" height="80" viewBox="0 0 150 80" fill="none" stroke="#17874f" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="75" cy="40" r="38" fill="#dcebe0" stroke="none" />
          <rect x="60" y="29" width="30" height="22" rx="3" />
          <path d="m61 31 14 10 14-10M12 40h8M130 40h8M24 20l6 5M126 20l-6 5M24 60l6-5M126 60l-6-5" />
        </svg>
        <h1>Recuperar Contraseña</h1>
        <p>Ingresa tu correo electronico y te enviaremos<br/> un enlace para restablecer tu contraseña</p>
        <form onSubmit={enviar}>
            <label>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7.5 8.5 6 8.5-6" />
            </svg>
                <input type="email" placeholder="Correo Electronico" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
            </label>
            <button>Enviar enlace</button>
        </form>

        <a href="/login">Volver al inicio de sesión</a>
        </main>
    </div>
  );
}