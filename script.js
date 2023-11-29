// Función para cargar y mostrar el contenido del archivo.txt
   async function cargarContenido() {
    const respuesta = await fetch('bots.txt');
    const texto = await respuesta.text();
    document.getElementById('contenido').textContent = texto;
}

// Llamar a la función cuando se cargue la página
    window.onload = cargarContenido;
// Redirigir a otra página del mismo sitio
    window.location.href = '/video934.html';
