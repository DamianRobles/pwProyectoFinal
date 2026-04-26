// main.js — Scripts globales de NeonThread
// Este archivo se carga en todas las páginas a través del footer.php

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

    // Resalta el link del navbar que corresponde a la página actual
    // Compara el pathname de la URL con el atributo href de cada link
    const currentPath = window.location.pathname;

    document.querySelectorAll('.nav-link').forEach(function (link) {
        // endsWith() verifica si la URL termina con el href del link
        // por ejemplo: "/proyectos/forum.php".endsWith("forum.php") → true
        if (link.href && currentPath.endsWith(link.getAttribute('href'))) {
            link.classList.add('active'); // Agrega clase 'active' para resaltarlo visualmente
        }
    });

});