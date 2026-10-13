// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// JS login Ocultar y Mostrar contraseña.

const campoContrasena = document.getElementById('contrasena');
const botonOjo = document.getElementById('btnOjo');

botonOjo.addEventListener('click', () => {
  // Si es "password" lo cambia a "text" (visible) y viceversa
  const esPassword = campoContrasena.type === 'password';
  campoContrasena.type = esPassword ? 'text' : 'password';
});