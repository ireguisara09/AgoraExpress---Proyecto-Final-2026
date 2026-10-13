import "../styles/Registro.css";

export default function Registro() {
  return (
    <main className="registro-page">
      <section className="registro-container">
        <header className="registro-header">
          <h1>Crear cuenta</h1>
          <p>Únete a AgoraExpress y descubre nuevos emprendimientos.</p>
        </header>

        <form className="registro-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre completo"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="ejemplo@correo.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ingresa tu teléfono"
              autoComplete="tel"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipoUsuario">Tipo de usuario</label>
            <select id="tipoUsuario" name="tipoUsuario" required defaultValue="">
              <option value="" disabled>
                Selecciona tu tipo de usuario
              </option>
              <option value="comprador">Comprador</option>
              <option value="emprendedor">Emprendedor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Crea una contraseña"
              autoComplete="new-password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarContrasena">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmarContrasena"
              name="confirmarContrasena"
              placeholder="Repite tu contraseña"
              autoComplete="new-password"
              required
            />
          </div>

          <button type="submit" className="registro-button">
            Crear cuenta
          </button>
        </form>

        <p className="registro-login">
          ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
        </p>
      </section>
    </main>
  );
}
