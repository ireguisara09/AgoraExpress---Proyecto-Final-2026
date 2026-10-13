
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registro from "./pages/registro";
import RecuperarContrasena from "./pages/RecuperarContraseña";
import "./styles/registro.css";
import "./styles/RecuperarContraseña.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registro" replace />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

