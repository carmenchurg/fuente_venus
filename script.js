function abrirUbicacion() {
    // Coordenadas de la Fuente de Venus (ejemplo)
    var latitud = 40.03933787965463;
    var longitud = -3.6109476550307082;

    // URL para abrir Google Maps con la ubicación
    var url = "https://www.google.com/maps?q=" + latitud + "," + longitud;

    // Abrir en una nueva ventana
    window.open(url, '_blank');
}

document.getElementById('descargarPdf').addEventListener('click', function() {
    // Nombre del archivo PDF (asegúrate de tener el archivo en la misma carpeta)
    var pdfFileName = 'info_venus.pdf';

    // Ruta del archivo PDF
    var pdfFilePath = './' + pdfFileName;

    // Crear un enlace temporal
    var link = document.createElement('a');
    link.href = pdfFilePath;

    // Asignar el nombre del archivo al enlace
    link.download = pdfFileName;

    // Simular un clic en el enlace para iniciar la descarga
    link.click();
});

var audio = document.getElementById('audioPlayer');
var botonReproducir = document.getElementById('reproducirAudio');

botonReproducir.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        botonReproducir.textContent = 'PAUSAR AUDIO';
    } else {
        audio.pause();
        botonReproducir.textContent = 'REPRODUCIR AUDIO';
    }
});

function iniciarReproduccion() {
    window.location.href = 'reproductor.html'; // Redirige a la página con el reproductor de video
}

function irAPagina() {
    window.location.href = 'imagenes.html'; // Cambia 'otra_pagina.html' por la página a la que deseas redirigir
}