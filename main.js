// Obtener elementos del HTML
let elementoCantidad = document.getElementById('cantidad');
let elementoContrasena = document.getElementById('contrasena');
let elementoMensajeContrasena = document.getElementById('mensaje-contrsena');

// variables globales
let cadena = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyz';

function generar() {
    let cantidad = parseInt(elementoCantidad.value);
    if (cantidad < 8) {
        alert('La cantidad de caracteres tiene que ser mayor a 8');
    } else {
        let constranaGenerada = '';
        for (let i = 0; i < cantidad; i++) constranaGenerada += cadena[generaNumeroEntreRango(cadena.length, 0)];
        elementoContrasena.value = constranaGenerada;
        elementoMensajeContrasena.textContent = obtenerValorContrasena(constranaGenerada)
    }
}

function limpiar() {
    elementoContrasena.value = '';
    elementoMensajeContrasena.textContent = '';
}

function generaNumeroEntreRango(maximo, minimo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

function obtenerValorContrasena(contrasena) {
    if (/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(contrasena)) {
        return 'La contrasena es fuerte'
    } else {
        return 'La contrasena es debil'
    }
}