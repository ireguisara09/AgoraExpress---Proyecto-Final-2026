// LOGIN JS
const formulario = document.querySelector('.formulario');
const inputCorreo = document.getElementById('correo');
const inputContrasena = document.getElementById('contrasena');
const btnOjo = document.getElementById('btnOjo');
const checkRecordarme = document.querySelector('input[name="recordarme"]');
const btnEnviar = document.querySelector('.boton-verde');


const ojoAbierto = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>`;

const ojoTachado = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a19.77 19.77 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A10.94 10.94 0 0 1 12 5c7 0 11 7 11 7a19.86 19.86 0 0 1-3.17 4.19" />
    <path d="M14.12 14.12a3.2 3.2 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;


btnOjo.addEventListener('click', () => {
    const estaOculta = inputContrasena.type === 'password';

    inputContrasena.type = estaOculta ? 'text' : 'password';
    btnOjo.innerHTML = estaOculta ? ojoTachado : ojoAbierto;
    btnOjo.setAttribute('aria-label', estaOculta ? 'Ocultar contraseña' : 'Mostrar contraseña');
    inputContrasena.focus();
});


function mostrarError(input, mensaje) {
    const campo = input.closest('.campo');
    let error = campo.nextElementSibling;

    if (!error || !error.classList.contains('campo__error')) {
        error = document.createElement('span');
        error.className = 'campo__error';
        error.setAttribute('role', 'alert');
        campo.insertAdjacentElement('afterend', error);
    }

    error.textContent = mensaje;
    campo.classList.add('campo--error');
}

function limpiarError(input) {
    const campo = input.closest('.campo');
    const error = campo.nextElementSibling;

    campo.classList.remove('campo--error');
    if (error && error.classList.contains('campo__error')) {
        error.remove();
    }
}


const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validarCorreo() {
    const valor = inputCorreo.value.trim();

    if (valor === '') {
        mostrarError(inputCorreo, 'El correo es obligatorio.');
        return false;
    }
    if (!regexCorreo.test(valor)) {
        mostrarError(inputCorreo, 'Ingresa un correo válido (ejemplo@correo.com).');
        return false;
    }

    limpiarError(inputCorreo);
    return true;
}

function validarContrasena() {
    const valor = inputContrasena.value;

    if (valor === '') {
        mostrarError(inputContrasena, 'La contraseña es obligatoria.');
        return false;
    }
    if (valor.length < 6) {
        mostrarError(inputContrasena, 'La contraseña debe tener mínimo 6 caracteres.');
        return false;
    }

    limpiarError(inputContrasena);
    return true;
}


inputCorreo.addEventListener('blur', validarCorreo);
inputContrasena.addEventListener('blur', validarContrasena);
inputCorreo.addEventListener('input', () => limpiarError(inputCorreo));
inputContrasena.addEventListener('input', () => limpiarError(inputContrasena));


const correoGuardado = localStorage.getItem('agoraexpress_correo');
if (correoGuardado) {
    inputCorreo.value = correoGuardado;
    checkRecordarme.checked = true;
}


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const correoValido = validarCorreo();
    const contrasenaValida = validarContrasena();

    if (!correoValido || !contrasenaValida) {
   
        (!correoValido ? inputCorreo : inputContrasena).focus();
        return;
    }

    if (checkRecordarme.checked) {
        localStorage.setItem('agoraexpress_correo', inputCorreo.value.trim());
    } else {
        localStorage.removeItem('agoraexpress_correo');
    }

  
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Ingresando...';

    const datos = {
        correo: inputCorreo.value.trim(),
        contrasena: inputContrasena.value,
    };


    console.log('Datos listos para enviar:', datos);
    btnEnviar.disabled = false;
    btnEnviar.textContent = 'Iniciar sesión';
});