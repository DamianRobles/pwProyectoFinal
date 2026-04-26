<?php
// Variables que header.php necesita para personalizar el título y la ruta base
$pageTitle     = "Inicio";
$activeSection = "";   // Ninguna sección del navbar se resalta en el inicio
$basePath      = "./"; // Las páginas en la raíz usan "./" como ruta base
include 'includes/header.php';
?>

<!-- Contenido principal de la página -->
<main class="container py-5">
    <p class="text-neon-cyan">Bienvenido a NeonThread</p>
</main>

<?php include 'includes/footer.php'; ?>